/**
 * 🎮 SCRIPT AUTOMÁTICO: EXTRAIR ARQUIVOS DO GODOT
 * 
 * Este script descompacta o ZIP do Godot e copia os arquivos
 * para a pasta correta automaticamente.
 * 
 * COMO USAR:
 * 1. Coloque o ZIP na pasta raiz do projeto
 * 2. Renomeie para: godot-game.zip
 * 3. Execute: node extract-godot-files.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎮 QUIRON CONCURSOS - EXTRATOR DE ARQUIVOS GODOT\n');

// Configurações
const ZIP_NAME = 'godot-meu-jogo-web-main.zip';
const POSSIBLE_ZIP_LOCATIONS = [
  path.join(__dirname, ZIP_NAME),
  path.join(__dirname, 'godot-game.zip'),
  path.join(require('os').homedir(), 'Downloads', ZIP_NAME),
  path.join(require('os').homedir(), 'Downloads', 'godot-meu-jogo-web-main (2).zip'),
];
const TARGET_DIR = path.join(__dirname, 'public', 'godot-game');
const TEMP_DIR = path.join(__dirname, 'temp-godot-extract');

// Função para encontrar o ZIP
function findZipFile() {
  console.log('🔍 Procurando arquivo ZIP...\n');
  
  for (const location of POSSIBLE_ZIP_LOCATIONS) {
    console.log(`   Verificando: ${location}`);
    if (fs.existsSync(location)) {
      console.log(`   ✅ Encontrado!\n`);
      return location;
    }
  }
  
  console.log('\n❌ ERRO: Arquivo ZIP não encontrado!\n');
  console.log('📋 INSTRUÇÕES:\n');
  console.log('1. Copie o arquivo ZIP para a pasta raiz do projeto');
  console.log('2. OU renomeie para: godot-game.zip');
  console.log('3. OU coloque na pasta Downloads\n');
  console.log('Locais verificados:');
  POSSIBLE_ZIP_LOCATIONS.forEach(loc => console.log(`   - ${loc}`));
  process.exit(1);
}

// Função para extrair usando PowerShell (nativo do Windows)
function extractWithPowerShell(zipPath, targetPath) {
  console.log('📦 Extraindo com PowerShell (nativo Windows)...\n');
  
  try {
    const command = `powershell -command "Expand-Archive -Path '${zipPath}' -DestinationPath '${targetPath}' -Force"`;
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.log('❌ Falha com PowerShell');
    return false;
  }
}

// Função para extrair usando Node.js puro
function extractWithNodeJS(zipPath, targetPath) {
  console.log('📦 Tentando extrair com Node.js...\n');
  console.log('⚠️  Instalando biblioteca adm-zip...\n');
  
  try {
    // Tentar instalar adm-zip
    execSync('npm install adm-zip --no-save', { stdio: 'inherit' });
    
    const AdmZip = require('adm-zip');
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(targetPath, true);
    return true;
  } catch (error) {
    console.log('❌ Falha com Node.js');
    return false;
  }
}

// Função para copiar arquivos
function copyFiles(sourceDir, targetDir) {
  console.log('📁 Copiando arquivos para public/godot-game/...\n');
  
  // Criar pasta de destino se não existir
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Procurar a pasta extraída (pode ter subpastas)
  let godotFilesDir = sourceDir;
  
  // Se tiver uma subpasta, entrar nela
  const items = fs.readdirSync(sourceDir);
  if (items.length === 1 && fs.statSync(path.join(sourceDir, items[0])).isDirectory()) {
    godotFilesDir = path.join(sourceDir, items[0]);
  }
  
  // Copiar todos os arquivos
  const files = fs.readdirSync(godotFilesDir);
  let copiedCount = 0;
  
  files.forEach(file => {
    const sourcePath = path.join(godotFilesDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`   ✅ ${file}`);
      copiedCount++;
    }
  });
  
  console.log(`\n✅ ${copiedCount} arquivos copiados!\n`);
  
  // Verificar arquivos essenciais
  const essentialFiles = ['index.html', 'index.js'];
  const optionalFiles = ['index.wasm', 'index.pck'];
  
  console.log('🔍 Verificando arquivos essenciais:\n');
  
  essentialFiles.forEach(file => {
    const exists = fs.existsSync(path.join(targetDir, file));
    console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  });
  
  console.log('\n🔍 Arquivos opcionais (mas importantes):\n');
  
  optionalFiles.forEach(file => {
    const exists = fs.existsSync(path.join(targetDir, file));
    console.log(`   ${exists ? '✅' : '⚠️ '} ${file}`);
  });
  
  console.log('');
}

// Função principal
async function main() {
  try {
    // 1. Encontrar o ZIP
    const zipPath = findZipFile();
    
    // 2. Criar pasta temporária
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TEMP_DIR, { recursive: true });
    
    // 3. Tentar extrair
    let extracted = false;
    
    // Tentar com PowerShell primeiro (mais confiável no Windows)
    extracted = extractWithPowerShell(zipPath, TEMP_DIR);
    
    // Se falhar, tentar com Node.js
    if (!extracted) {
      extracted = extractWithNodeJS(zipPath, TEMP_DIR);
    }
    
    if (!extracted) {
      console.log('\n❌ ERRO: Não foi possível extrair o arquivo automaticamente.\n');
      console.log('📋 SOLUÇÃO MANUAL:\n');
      console.log('1. Baixe 7-Zip: https://www.7-zip.org/');
      console.log('2. Clique direito no ZIP → 7-Zip → Extract Here');
      console.log('3. Copie os arquivos para: public/godot-game/\n');
      process.exit(1);
    }
    
    // 4. Copiar arquivos
    copyFiles(TEMP_DIR, TARGET_DIR);
    
    // 5. Limpar pasta temporária
    console.log('🧹 Limpando arquivos temporários...\n');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    
    // 6. Sucesso!
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('🎉 SUCESSO! ARQUIVOS COPIADOS COM SUCESSO!\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('📍 Arquivos em: public/godot-game/\n');
    console.log('🚀 PRÓXIMOS PASSOS:\n');
    console.log('1. Execute o app: npm run dev');
    console.log('2. Acesse: http://localhost:5173');
    console.log('3. Clique em "Game Épico" no menu');
    console.log('4. APROVEITE O GAME! 🎮\n');
    
  } catch (error) {
    console.error('\n❌ ERRO:', error.message);
    console.log('\n📋 Tente a extração manual com 7-Zip.\n');
    process.exit(1);
  }
}

// Executar
main();
