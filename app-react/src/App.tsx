import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useTransaction } from './hook/useTransaction';
import type { Transaction } from './types';
import { TransactionForm } from './components/TransactionForm';
import Banner from './components/Banner';
import { TransactionList } from './components/TransactionList';

function App() {
  const { createTransaction, getAllTransactions } = useTransaction();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<any[]>([]);

  useEffect(() => {
    getAllTransactions()
      .then((transactions) => setTransactions([...transactions]))
      .catch(onError);
  }, []);

  const onError = (error: any) => {
    setError([error, ...error.toString()]);
    setTimeout(() => {
      setError([]);
    }, 3000);
  };

  const onSubmitTransaction = useCallback(
    (accountId: string, amount: number) => {
      createTransaction(accountId, Number(amount)).catch(onError);

      if (!error.length) {
        getAllTransactions()
          .then((transactions) => setTransactions([...transactions]))
          .catch(onError);
      }
    },
    []
  );

  return (
    <div className='App'>
      {!!error.length &&
        error.map((error, i) => <Banner key={i} text={error} isAlert={true} />)}
      <section className='container'>
        <TransactionForm onSubmitTransaction={onSubmitTransaction} />
        <TransactionList transactions={transactions} />
      </section>
    </div>
  );
}

export default App;
