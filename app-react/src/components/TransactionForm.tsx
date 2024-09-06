import { useCallback, useState } from 'react';
import './TransactionForm.css';

type TransactionFormProps = {
  onSubmitTransaction: (
    accountId: string,
    amount: number,
    onReset: CallableFunction
  ) => void;
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

    onSubmitTransaction(accountId, Number(amount), onReset);
  };

  const onChange = (event: any) => {
    setAccountError('');
    setAmountError('');

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

  const onReset = useCallback(() => {
    setAccountId('');
    setAmount('');
  }, []);

  return (
    <article className='form'>
      <h1>Submit new transaction</h1>
      <form onSubmit={onSubmit}>
        <div className='form-item'>
          <label htmlFor='account-id'>Account ID</label>
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
          {accountError && <p className='form-error'>{accountError}</p>}
        </div>

        <div className='form-item'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            data-type='amount'
            name='amount'
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={onChange}
            className='form-input'
            required
          />
          {amountError && <p className='form-error'>{amountError}</p>}
        </div>

        <div className='form-button'>
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
