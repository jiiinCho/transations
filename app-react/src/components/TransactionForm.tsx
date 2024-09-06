import { useState } from 'react';
import Banner from './Banner';
import { useTransaction } from '../hook/useTransaction';

type TransactionFormProps = {
  onSubmitTransaction: (accountId: string, amount: number) => void;
};

export const TransactionForm = ({
  onSubmitTransaction,
}: TransactionFormProps) => {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [accountError, setAccountError] = useState('');
  const [amountError, setAmountError] = useState('');

  // TODO: fix any
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!accountId) {
      setAccountError('Enter account id');
      return;
    }

    if (!amount) {
      setAmountError('Enter amount');
      return;
    }

    onSubmitTransaction(accountId, Number(amount));
  };

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'account-id':
        return setAccountId(value);
      case 'amount':
        return setAmount(value);
      default:
    }
  };

  return (
    <article>
      <h1>Submit new transaction</h1>
      <form onSubmit={onSubmit} className='form'>
        <label htmlFor='account-id'>
          Account ID
          <input
            id='account-id'
            data-type='account-id'
            name='account-id'
            type='text'
            placeholder='Account id'
            value={accountId}
            onChange={onChange}
            className='form-input'
            required
          />
          {accountError && <p>{accountError}</p>}
        </label>
        <label htmlFor='amount'>
          Amount
          <input
            data-type='amount'
            name='amount'
            type='number'
            placeholder='Amount'
            value={amount}
            className='form-input'
            onChange={onChange}
          />
          <input
            data-type='transaction-submit'
            className='form-btn auth-form-btn'
            type='submit'
            onClick={onSubmit}
          />
          {amountError && <p>{amountError}</p>}
        </label>
      </form>
    </article>
  );
};
