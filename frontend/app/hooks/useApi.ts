import { useState, useCallback } from 'react';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

export function useApi<T>() {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const fetchData = useCallback(async (url: string, options: ApiOptions = {}) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setState({ data, error: null, loading: false });
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({ data: null, error: new Error(errorMessage), loading: false });
      throw error;
    }
  }, []);

  return {
    ...state,
    fetchData,
  };
}
