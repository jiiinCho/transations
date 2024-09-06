import { useCallback, useEffect, useState } from 'react';
import { useTransaction } from './hook/useTransaction';
import type { Transaction } from './types';
import { TransactionForm } from './components/TransactionForm';
import Alert from './components/Alert';
import { TransactionList } from './components/TransactionList';
import { Loader } from './components/Loader';

function App() {
  const { createTransaction, getAllTransactions } = useTransaction();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionId, setTransactionId] = useState<string | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllTransactions()
      .then((transactions) => {
        setTransactions([...transactions]);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [transactionId]);

  const onError = (error: any) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const onSubmitTransaction = useCallback(
    (accountId: string, amount: number, onReset: CallableFunction) => {
      createTransaction(accountId, Number(amount))
        .then(({ transaction_id }) => {
          setTransactionId(transaction_id);
          onReset();
        })
        .catch(onError);
    },
    []
  );

  return (
    <div>
      {error && <Alert text={error} isAlert={true} />}
      <section className='container'>
        <TransactionForm onSubmitTransaction={onSubmitTransaction} />
        {loading ? (
          <Loader />
        ) : (
          <TransactionList
            transactions={sortByTime(transactions)}
            onError={onError}
          />
        )}
      </section>
    </div>
  );
}

export default App;

function sortByTime(transactions: Transaction[]) {
  return transactions.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}
