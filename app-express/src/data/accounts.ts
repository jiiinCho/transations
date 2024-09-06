import type { Account } from '../../types';

let accounts: Account[] = [
  {
    account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
    balance: 7,
  },
  {
    account_id: '5ae0ef78-e902-4c40-9f53-8cf910587312',
    balance: 12,
  },
];

export async function getAll() {
  return accounts;
}

export async function getById(id: string) {
  const found = accounts.find(({ account_id }) => account_id === id);
  if (!found) {
    return null;
  }

  return found;
}
