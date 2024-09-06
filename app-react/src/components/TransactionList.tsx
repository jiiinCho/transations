import { useEffect, useState } from 'react';
import { useTransaction } from '../hook/useTransaction';
import { Transaction } from '../types';
import './TransactionList.css';

type TransactionListProps = {
  transactions: Transaction[];
  onError: (error: any) => void;
};

export const TransactionList = ({
  transactions,

  onError,
}: TransactionListProps) => {
  const { getAccountById } = useTransaction();

  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const accountId = transactions[0]?.account_id;
    if (!accountId) {
      return;
    }

    getAccountById(accountId)
      .then(({ balance }) => {
        setBalance(balance);
      })
      .catch((err) => {
        onError(err);
      });
  }, [transactions]);

  if (!transactions.length) {
    return <p>No transactions available.</p>;
  }

  return (
    <section>
      <h2 className='transaction-title'>Transaction History</h2>
      <ul>
        {transactions.map(({ transaction_id, account_id, amount }, i) => (
          <li key={transaction_id} className='transaction-item'>
            Transferred <span style={{ fontWeight: 700 }}>{amount}$</span> from
            account <span className='transaction-highlight'>{account_id}</span>.
            {i === 0 && balance !== null && (
              <>
                {' '}
                The current balance is{' '}
                <span style={{ fontWeight: 700 }}>{balance}</span>.
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
