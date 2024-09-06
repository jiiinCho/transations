// Interface for TransactionRequest
export interface TransactionRequest {
  account_id: string; // UUID format
  amount: number; // Integer
}

// Interface for Transaction
export interface Transaction {
  transaction_id: string; // UUID format
  account_id: string; // UUID format
  amount: number; // Integer
  created_at: string; // Date-time format
}

// Interface for Array of Transactions
export type ArrayOfTransactions = Transaction[];

// Interface for Account
export interface Account {
  account_id: string; // UUID format
  balance: number; // Integer
}

// Example Data Interface for Transactions
export const exampleTransactionRequestWithPositiveAmount: TransactionRequest = {
  account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
  amount: 7,
};

export const exampleTransactionRequestWithNegativeAmount: TransactionRequest = {
  account_id: '5ae0ef78-e902-4c40-9f53-8cf910587312',
  amount: -4,
};

// Example Data Interface for Transactions
export const exampleTransactionWithPositiveAmount: Transaction = {
  transaction_id: '4bcc3959-6fe1-406e-9f04-cad2637b47d5',
  account_id: '0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2',
  amount: 7,
  created_at: '2021-05-12T18:29:40.206924+00:00',
};

export const exampleTransactionWithNegativeAmount: Transaction = {
  transaction_id: '050a75f6-8df1-4ad1-8f5b-54e821e98581',
  account_id: '5ae0ef78-e902-4c40-9f53-8cf910587312',
  amount: -4,
  created_at: '2021-05-18T21:33:47.203136+00:00',
};

// Example Array of Transactions
export const exampleArrayOfTransactions: ArrayOfTransactions = [
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

// Example Data for Accounts
export const examplePositiveAccount: Account = {
  account_id: 'fbf4a552-2418-46c5-b308-6094ddc493a1',
  balance: 10,
};

export const exampleNegativeAccount: Account = {
  account_id: '9c3cd9a8-65c4-4d26-8488-ef9a40f57c37',
  balance: -7,
};

// Example of Max Transaction Volume
export interface MaxTransactionVolume {
  maxVolume: number;
  accountIds: string[]; // Array of UUIDs
}

export const exampleMaxTransactionVolume: MaxTransactionVolume = {
  maxVolume: 4,
  accountIds: [
    '44a92331-a533-4dd3-82e3-3ff75219e33b',
    '7c9be9e8-a6df-4f43-9a44-38c10ad0de4a',
  ],
};
