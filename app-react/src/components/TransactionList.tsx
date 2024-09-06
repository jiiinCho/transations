import { useEffect, useState } from 'react';
import { useTransaction } from '../hook/useTransaction';
import { Transaction } from '../types';

type TransactionListProps = {
  transactions: Transaction[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  const { getAccountById } = useTransaction();
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const lastTransaction = transactions[0];
    if (!lastTransaction) return;

    const accountId = lastTransaction.account_id;

    getAccountById(accountId)
      .then(({ balance }) => {
        setBalance(balance);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch account balance');
      });
  }, [transactions, getAccountById]);

  if (!transactions.length) {
    return <p>No transactions available.</p>;
  }

  return (
    <section>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map(
          ({ transaction_id, account_id, amount, created_at }, i) => (
            <li key={transaction_id} className='item'>
              {`Transferred ${amount}$ from account ${account_id}`}
              {i === 0 && balance !== null && (
                <span>{`. The current account balance is ${balance} `}</span>
              )}
            </li>
          )
        )}
      </ul>
      {error && <p className='error'>{error}</p>}
    </section>
  );
};
