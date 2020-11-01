import {
    useState,
    useCallback,
  } from 'react';
  
  export const searchTodos = async (searchValue: any, options: any) => {
    const response = await fetch(
      `http://localhost:3030/api/cards?limit=30&name=picha&type=normal`,
      options
    );
    const data = await response.json();
    
    return data;
  }
  
  export const useSearchTodos = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    const execute = async (searchValue: any, options = {}) => {
      try {
        setIsLoading(true);
        const todos = await searchTodos(searchValue, options);
        setData(todos);
        return todos;
      } catch (e) {
        setError(e);
        setIsLoading(false);
        throw e;
      }
    };
    
    return {
      isLoading,
      error,
      data,
      execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
    };
  };