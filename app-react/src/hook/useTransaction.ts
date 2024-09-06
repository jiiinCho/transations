import { httpClient } from '../service/httpClient';

export const useTransaction = () => {
  const getAllTransactions = async () => {
    return httpClient('/transactions', {
      method: 'GET',
    });
  };

  const getTransactionById = async (id: string) => {
    return httpClient(`/transactions/${id}`, {
      method: 'GET',
    });
  };

  const createTransaction = async (accountId: string, amount: number) => {
    return httpClient(`/transactions`, {
      method: 'POST',
      body: JSON.stringify({ account_id: accountId, amount }),
    });
  };

  const getAccountById = async (id: string) => {
    return httpClient(`/accounts/${id}`, {
      method: 'GET',
    });
  };

  return {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    getAccountById,
  };
};
