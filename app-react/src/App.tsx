import { useEffect, useState } from 'react';
import './App.css';
import { useTransaction } from './hook/useTransaction';
import type { Transaction } from './types';

function App() {
  const { getAllTransactions } = useTransaction();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllTransactions()
      .then((response) => setTransactions([...response]))
      .catch(onError);
  }, []);

  const onError = (error: any) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        {error && <p className='text-red-700'>{error || 'Error 💣'}</p>}
        <ul>
          {transactions.map(({ transaction_id }) => (
            <p key={transaction_id}>{transaction_id}</p>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
