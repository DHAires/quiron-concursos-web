import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Você pode enviar o erro para um serviço de monitoramento aqui
    // Ex: Sentry.captureException(error);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="bg-gray-800 rounded-3xl p-8 border-2 border-red-500/30 shadow-2xl">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-900/30 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              
              {/* Title */}
              <h2 className="text-3xl text-center mb-4 text-red-500">
                Oops! Algo deu errado
              </h2>
              
              {/* Message */}
              <p className="text-gray-300 text-center mb-6">
                Encontramos um erro inesperado. Nossa equipe foi notificada e estamos trabalhando para resolver o problema.
              </p>
              
              {/* Error Details (only in development) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-gray-900 rounded-xl border border-gray-700">
                  <p className="text-xs text-red-400 font-mono break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={this.handleReset}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-500/50 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Tentar Novamente</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="w-full px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Voltar ao Início</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
