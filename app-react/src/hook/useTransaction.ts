import { httpClient } from '../service/httpClient';

export const useTransaction = () => {
  const getAllTransactions = async () => {
    return httpClient('/transactions', {
      method: 'GET',
    });
  };

  return { getAllTransactions };
};
