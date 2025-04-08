import React, { createContext, useContext, useState, useEffect } from 'react';
import generateEmployeeData from '../utils/dummyDataGenerator';
import { Employee } from '../types/employee';

// Define the shape of our context
interface DataContextType {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

// Create the context with a default value
const DataContext = createContext<DataContextType>({
  employees: [],
  loading: true,
  error: null
});

// Custom hook to use the data context
export const useData = () => useContext(DataContext);

// Provider component that wraps the application
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading data from an API
    try {
      // Using setTimeout to simulate network delay
      const loadData = async () => {
        try {
          setLoading(true);
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Generate dummy data
          const data = generateEmployeeData(5000);
          setEmployees(data);
          setLoading(false);
        } catch (err) {
          setError('Failed to load employee data');
          setLoading(false);
        }
      };
      
      loadData();
    } catch (err) {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider value={{ employees, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext; 