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
    <article className='section'>
      <h1>Submit new transaction</h1>
      <form onSubmit={onSubmit} className='form'>
        <div style={{ paddingBottom: '16px' }}>
          <label
            htmlFor='account-id'
            style={{ display: 'block', paddingBottom: '4px' }}
          >
            Account ID
          </label>
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
            style={{ width: '100%' }}
          />
          {accountError && <p>{accountError}</p>}
        </div>

        <div style={{ paddingBottom: '16px' }}>
          <label
            htmlFor='amount'
            style={{ display: 'block', paddingBottom: '4px' }}
          >
            Amount
          </label>
          <input
            data-type='amount'
            name='amount'
            type='number'
            placeholder='Amount'
            value={amount}
            className='form-input'
            onChange={onChange}
            style={{ width: '100%' }}
          />
          {amountError && <p>{amountError}</p>}
        </div>
        <div style={{ textAlign: 'center' }}>
          <input
            data-type='transaction-submit'
            className='form-btn auth-form-btn'
            type='submit'
            onClick={onSubmit}
          />
        </div>
      </form>
    </article>
  );
};
