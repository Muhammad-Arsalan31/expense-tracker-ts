import { createContext, PropsWithChildren, useState } from "react";
import { Transaction } from "../interfaces/interfaces";

interface TransactionContextInterface {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
}

// Provider in your app
const initialTransactions: Transaction[] = [
  {
    id: 1,
    title: "Cash",
    amount: 100,
  },
  {
    id: 2,
    title: "Book",
    amount: -20,
  },
  {
    id: 3,
    title: "Fruits",
    amount: -40,
  },
];
const sampleAppContext: TransactionContextInterface = {
  transactions: initialTransactions,
  addTransaction: () => {},
  deleteTransaction: () => {},
};
export const TransactionCtx =
  createContext<TransactionContextInterface>(sampleAppContext);

export const TransactionProvider = (props: PropsWithChildren) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    sampleAppContext.transactions
  );

  function addTransaction(transaction: Transaction) {
    setTransactions([...transactions, transaction]);
  }
  function deleteTransaction(id: number) {
    const filtered = transactions.filter((t) => t.id !== id);
    setTransactions(filtered);
  }
  return (
    <TransactionCtx.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
      {...props}
    />
  );
};
