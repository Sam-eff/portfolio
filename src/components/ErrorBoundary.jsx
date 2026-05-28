import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#000814] px-6">
          <div className="max-w-2xl w-full">
            <div className="bg-gradient-to-br from-[#021527] to-[#001a33] border border-white/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-xl shadow-2xl">
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full mb-6 border border-red-500/30">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Oops! Something went wrong
              </h1>

              {/* Description */}
              <p className="text-gray-400 mb-8 text-lg">
                We encountered an unexpected error. Try reloading the page or head back home.
              </p>

              {/* Error Details (Development Only) */}
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-left">
                  <p className="text-red-400 text-sm font-mono mb-2">
                    {this.state.error.toString()}
                  </p>
                  <details className="text-gray-500 text-xs">
                    <summary className="cursor-pointer hover:text-gray-400">
                      View Stack Trace
                    </summary>
                    <pre className="mt-2 overflow-auto max-h-40">
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </details>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#007BFF] to-[#00E5FF] rounded-xl font-semibold text-gray-900 hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
                >
                  <RefreshCw size={20} />
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <Home size={20} />
                  Go Home
                </button>
              </div>

              {/* Help Text */}
              <p className="text-gray-500 text-sm mt-8">
                If this problem persists, please{' '}
                <a href="/contact" className="text-[#00E5FF] hover:underline">
                  contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
