/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useRef, useCallback } from 'react';

type Status = 'error' | 'loading' | 'fetched';

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

interface State<T> {
  data?: T;
  status?: Status;
  error?: Error;
}

export const useFetch = <T = unknown>(
  endpoint: (data?: any) => Promise<T>,
  options?: any,
): State<T> => {
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    status: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, status: 'loading' };
      case 'fetched':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'error':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: 'loading' });

    try {
      const data = await endpoint(options);

      dispatch({ type: 'fetched', payload: data as T });
    } catch (error) {
      dispatch({ type: 'error', payload: error as Error });
    }
  }, []);

  useEffect(() => {
    cancelRequest.current = false;

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, []);

  return state;
};
