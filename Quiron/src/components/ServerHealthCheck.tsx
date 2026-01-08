import React, { useState, useEffect } from 'react';
import { Activity, CheckCircle, XCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function ServerHealthCheck() {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [details, setDetails] = useState('');

  const checkHealth = async () => {
    setStatus('checking');
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/health`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStatus('online');
        setDetails(`Server OK - ${data.timestamp}`);
        console.log('✅ Server is ONLINE:', data);
      } else {
        setStatus('offline');
        setDetails(`HTTP ${response.status}`);
        console.error('❌ Server returned error:', response.status);
      }
    } catch (error) {
      setStatus('offline');
      setDetails(error.message);
      console.error('❌ Server is OFFLINE:', error);
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 5000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-2">
        {status === 'checking' && (
          <>
            <Activity className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400">Checking...</span>
          </>
        )}
        {status === 'online' && (
          <>
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400">Server Online</span>
          </>
        )}
        {status === 'offline' && (
          <>
            <XCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400">Server Offline</span>
          </>
        )}
      </div>
      {details && (
        <div className="text-xs text-gray-400 mt-1">{details}</div>
      )}
      <button
        onClick={checkHealth}
        className="text-xs text-blue-400 hover:text-blue-300 mt-1"
      >
        Refresh
      </button>
    </div>
  );
}
