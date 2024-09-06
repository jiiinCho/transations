import { useEffect, useState } from 'react';
import { useTransaction } from '../hook/useTransaction';
import { Transaction } from '../types';

type TransactionListProps = {
  transactions: Transaction[];
};
export const TransactionList = ({ transactions }: TransactionListProps) => {
  const { getAccountById } = useTransaction();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const accountId = transactions[transactions.length - 1]?.account_id;
    if (!accountId) {
      return;
    }

    getAccountById(accountId)
      .then(({ balance }) => setBalance(balance))
      .catch(console.error);
  }, [transactions]);

  return (
    <section>
      <h2>Transaction history</h2>
      <ul>
        {transactions.map(({ transaction_id, account_id, amount }, i) => {
          if (i === 0) {
            return (
              <p
                key={transaction_id}
              >{`Transferred ${amount}$ from account ${account_id}. The current account balance is ${balance}`}</p>
            );
          }
        })}
      </ul>
    </section>
  );
};
