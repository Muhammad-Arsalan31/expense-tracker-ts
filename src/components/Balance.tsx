import { Title } from "@mantine/core";
import { Transaction } from "../interfaces/interfaces";

interface Props {
  transactions: Transaction[];
}

export function Balance({ transactions }: Props) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <div>Your Balance</div>
      <Title order={3}>${total}</Title>
    </>
  );
}
