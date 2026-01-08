import React, { useState } from 'react';
import { Database, RefreshCw, X, Download } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { seedAllSistemaFinanceiroNacionalQuestions } from '../utils/seedQuestionsSistemaFinanceiroNacional';
import { seedAllMercadoCapitaisQuestions } from '../utils/seedQuestionsMercadoCapitais';
import { seedAllProdutosBancariosQuestions } from '../utils/seedQuestionsProdutosBancarios';

interface DebugQuestionsProps {
  onClose: () => void;
}

export function DebugQuestions({ onClose }: DebugQuestionsProps) {
  const [debugData, setDebugData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isSeedingSFN, setIsSeedingSFN] = useState(false);
  const [isSeedingMercadoCapitais, setIsSeedingMercadoCapitais] = useState(false);
  const [isSeedingProdutosBancarios, setIsSeedingProdutosBancarios] = useState(false);

  const loadDebugData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/debug/keys`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Response error:', response.status, errorText);
        throw new Error(`Failed to load debug data: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      setDebugData(data);
      console.log('🔍 Debug Data:', data);
    } catch (error) {
      console.error('❌ Error loading debug data:', error);
      // Don't show alert on load - just log it
      setDebugData({ error: 'Failed to load', total: 0, byArea: {}, allKeys: [] });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadDebugData();
  }, []);

  const handleSeedSFN = async () => {
    if (!confirm('🏛️ Importar Sistema Financeiro Nacional?\\n\\n45 questões comentadas em 9 temas:\\n• CMN\\n• BACEN\\n• CVM\\n• Bancos Comerciais\\n• Bancos de Investimento\\n• Cooperativas\\n• Corretoras\\n• SPB\\n• Política Monetária')) {
      return;
    }
    
    setIsSeedingSFN(true);
    try {
      await seedAllSistemaFinanceiroNacionalQuestions();
      alert('✅ Sistema Financeiro Nacional importado com sucesso!\\n\\n📊 45 questões adicionadas:\\n• Baseadas em CESPE, FCC, FGV, VUNESP\\n• Comentários detalhados em todas\\n• 9 tópicos completos\\n\\n🎯 Pronto para treinar!');
      loadDebugData(); // Reload debug data
    } catch (error) {
      console.error('Error seeding SFN:', error);
      alert('❌ Erro ao importar. Verifique o console.');
    } finally {
      setIsSeedingSFN(false);
    }
  };

  const handleSeedMercadoCapitais = async () => {
    if (!confirm('📈 Importar Mercado de Capitais?\\n\\n45 questões comentadas em 9 temas:\\n• Ações\\n• Debêntures\\n• Fundos\\n• B3\\n• Títulos Públicos\\n• Derivativos\\n• Análise Fundamentalista\\n• Análise Técnica\\n• Risco e Diversificação')) {
      return;
    }
    
    setIsSeedingMercadoCapitais(true);
    try {
      await seedAllMercadoCapitaisQuestions();
      alert('✅ Mercado de Capitais importado com sucesso!\\n\\n📊 45 questões adicionadas:\\n• Baseadas em CESPE, FCC, FGV, VUNESP\\n• Comentários detalhados em todas\\n• 9 tópicos completos\\n\\n🎯 Pronto para treinar!');
      loadDebugData(); // Reload debug data
    } catch (error) {
      console.error('Error seeding Mercado de Capitais:', error);
      alert('❌ Erro ao importar. Verifique o console.');
    } finally {
      setIsSeedingMercadoCapitais(false);
    }
  };

  const handleSeedProdutosBancarios = async () => {
    if (!confirm('💳 Importar Produtos Bancários?\\n\\n45 questões comentadas em 9 temas:\\n• Contas Correntes\\n• Cartões de Crédito\\n• Empréstimos\\n• Investimentos\\n• Seguros\\n• Tesouraria\\n• Custódia\\n• Pagamentos\\n• Relacionamento com Clientes')) {
      return;
    }
    
    setIsSeedingProdutosBancarios(true);
    try {
      await seedAllProdutosBancariosQuestions();
      alert('✅ Produtos Bancários importados com sucesso!\\n\\n📊 45 questões adicionadas:\\n• Baseadas em CESPE, FCC, FGV, VUNESP\\n• Comentários detalhados em todas\\n• 9 tópicos completos\\n\\n🎯 Pronto para treinar!');
      loadDebugData(); // Reload debug data
    } catch (error) {
      console.error('Error seeding Produtos Bancários:', error);
      alert('❌ Erro ao importar. Verifique o console.');
    } finally {
      setIsSeedingProdutosBancarios(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl">Debug: Questões no KV</h2>
              <p className="text-sm text-gray-400">Verificar questões armazenadas no banco</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={loadDebugData}
              disabled={loading}
              className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading && !debugData ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Carregando dados...</p>
              </div>
            </div>
          ) : debugData ? (
            <div className="space-y-6">
              {/* Summary */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-xl mb-4">📊 Resumo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-3xl text-blue-400 mb-1">{debugData.total}</div>
                    <div className="text-sm text-gray-400">Total de keys</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-3xl text-purple-400 mb-1">
                      {debugData.allKeys?.reduce((sum: number, k: any) => sum + k.questionsCount, 0) || 0}
                    </div>
                    <div className="text-sm text-gray-400">Total de questões</div>
                  </div>
                </div>
              </div>

              {/* Import Buttons */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/30">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  💰 Importar Questões Área Fiscal-Bancária
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Clique nos botões abaixo para importar questões comentadas baseadas em concursos nacionais (CESPE, FCC, FGV, VUNESP)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleSeedSFN}
                    disabled={isSeedingSFN}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="text-3xl mb-2">🏛️</div>
                      <div className="mb-2">Sistema Financeiro Nacional</div>
                      <div className="text-sm text-blue-200">
                        {isSeedingSFN ? 'Importando...' : '9 temas • 45 questões'}
                      </div>
                      <div className="text-xs text-blue-300 mt-2">
                        CMN, BACEN, CVM, Bancos, SPB...
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleSeedMercadoCapitais}
                    disabled={isSeedingMercadoCapitais}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="text-3xl mb-2">📈</div>
                      <div className="mb-2">Mercado de Capitais</div>
                      <div className="text-sm text-purple-200">
                        {isSeedingMercadoCapitais ? 'Importando...' : '9 temas • 45 questões'}
                      </div>
                      <div className="text-xs text-purple-300 mt-2">
                        Ações, Fundos, B3, Derivativos...
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleSeedProdutosBancarios}
                    disabled={isSeedingProdutosBancarios}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="text-3xl mb-2">💳</div>
                      <div className="mb-2">Produtos Bancários</div>
                      <div className="text-sm text-green-200">
                        {isSeedingProdutosBancarios ? 'Importando...' : '9 temas • 45 questões'}
                      </div>
                      <div className="text-xs text-green-300 mt-2">
                        Contas, Cartões, Empréstimos...
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* By Area */}
              {debugData.byArea && Object.keys(debugData.byArea).length > 0 ? (
                <div>
                  <h3 className="text-xl mb-4">📁 Por Área</h3>
                  <div className="space-y-4">
                    {Object.entries(debugData.byArea).map(([area, keys]: [string, any]) => {
                      const totalQuestions = keys.reduce((sum: number, k: any) => sum + k.count, 0);
                      
                      return (
                        <div key={area} className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg">
                              {area === 'juridica' ? '⚖️ Jurídica' : 
                               area === 'policial' ? '🛡️ Policial' : 
                               area === 'gerais' ? '🧠 Conhecimentos Gerais' :
                               area === 'fiscal' ? '💰 Fiscal-Bancária' : area}
                            </h4>
                            <div className="text-sm text-gray-400">
                              {keys.length} subjects • {totalQuestions} questões
                            </div>
                          </div>
                          <div className="space-y-2">
                            {keys.map((k: any, idx: number) => (
                              <div key={idx} className="bg-black/30 rounded-lg p-3 flex items-center justify-between">
                                <div className="text-sm text-gray-300 font-mono">{k.key}</div>
                                <div className={`text-sm px-3 py-1 rounded-full ${
                                  k.count > 0 ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                                }`}>
                                  {k.count} questões
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30 text-center">
                  <h3 className="text-2xl mb-2">⚠️ Nenhuma questão encontrada!</h3>
                  <p className="text-gray-400">
                    O banco de dados está vazio. Você precisa importar questões usando os botões de importação.
                  </p>
                </div>
              )}

              {/* All Keys Details */}
              <div>
                <h3 className="text-xl mb-4">🔑 Todas as Keys</h3>
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {debugData.allKeys && debugData.allKeys.length > 0 ? (
                      debugData.allKeys.map((k: any, idx: number) => (
                        <div key={idx} className="bg-black/30 rounded-lg p-3 flex items-center justify-between">
                          <div className="text-sm text-gray-300 font-mono flex-1">{k.key}</div>
                          <div className={`text-sm px-3 py-1 rounded-full ${
                            k.questionsCount > 0 ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                          }`}>
                            {k.questionsCount}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-400 py-8">Nenhuma key encontrada</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              Erro ao carregar dados de debug
            </div>
          )}
        </div>
      </div>
    </div>
  );
}