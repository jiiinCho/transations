import type { Transaction } from '../../types';

let transations: Transaction[] = [
  {
    transaction_id: '4bcc3959-6fe1-406e-9f04-cad2637b47d5',
    account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
    amount: 7,
    created_at: '2021-05-12T18:29:40.206924+00:00',
  },
  {
    transaction_id: '050a75f6-8df1-4ad1-8f5b-54e821e98581',
    account_id: '5ae0ef78-e902-4c40-9f53-8cf910587312',
    amount: -4,
    created_at: '2021-05-18T21:33:47.203136+00:00',
  },
];

export async function getAll() {
  return transations;
}

export async function getById(id: string) {
  const found = transations.find(({ transaction_id }) => transaction_id === id);
  if (!found) {
    return null;
  }

  return found;
}
