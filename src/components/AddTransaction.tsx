import { Box, Button, Divider, TextInput, Title } from "@mantine/core";
import { useContext, useState } from "react";
import { TransactionCtx } from "../context/TransactionContext";
import { Transaction } from "../interfaces/interfaces";

export function AddTransaction() {
  const { addTransaction } = useContext(TransactionCtx);

  const [title, setTitle] = useState<string | undefined>();
  const [amount, setAmount] = useState<string | undefined>();
  function add() {
    if (!title || !amount) return;
    const transaction = {
      id: Math.random(),
      title,
      amount: +amount,
    };
    addTransaction(transaction);
  }
  return (
    <Box>
      <Title order={5}>Add Transaction</Title>
      <Divider />
      <TextInput
        size="xs"
        placeholder="Book etc"
        label="Expense Name"
        withAsterisk
        value={title}
        required
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
      <TextInput
        placeholder="40 or -40  "
        label="Amount -40 expense, 40 income "
        withAsterisk
        size="xs"
        value={amount}
        required
        onChange={(event) => setAmount(event.currentTarget.value)}
      />
      <Button fullWidth mt={"md"} onClick={add}>
        Add Transaction
      </Button>
    </Box>
  );
}
