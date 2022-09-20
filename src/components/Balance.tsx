import { Title } from "@mantine/core";
import { useContext } from "react";
import { TransactionCtx } from "../context/TransactionContext";

export function Balance() {
  const { transactions } = useContext(TransactionCtx);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <div>Your Balance</div>
      <Title order={3}>${total}</Title>
    </>
  );
}
