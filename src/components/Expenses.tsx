import { Box, Divider, Title } from "@mantine/core";
import { useContext } from "react";
import { TransactionCtx } from "../context/TransactionContext";

export function Expenses() {
  const { transactions } = useContext(TransactionCtx);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, curr) => (acc += curr), 0);
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          display: "flex",
          justifyContent: "space-between",
        })}
        py={"md"}
        px={"lg"}
      >
        <div>
          <Title order={5}>Income</Title>
          <Title order={3} style={{ color: "lightgreen" }}>
            ${income}
          </Title>
        </div>
        <Divider orientation="vertical" />
        <div>
          <Title order={5}>Income</Title>
          <Title order={3} style={{ color: "red" }}>
            ${expense}
          </Title>
        </div>
      </Box>
    </>
  );
}
