import { Box, Title, Divider, createStyles, ScrollArea } from "@mantine/core";
import { useContext } from "react";
import { TransactionCtx } from "../context/TransactionContext";
import { Transaction } from "../interfaces/interfaces";
import { Transaction as TransactionComponent } from "./Transaction";

const useStyles = createStyles({
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
    padding: "5px 10px",
    p: {
      fontSize: "14px",
      padding: 0,
      margin: 0,
    },
  },
  minus: {
    borderRight: "4px solid red",
  },
  plus: {
    borderRight: "4px solid green",
  },
});

export function Transactions() {
  const { classes } = useStyles();
  const { transactions } = useContext(TransactionCtx);

  return (
    <Box>
      <Title order={5}>History</Title>
      <Divider />
      <ScrollArea.Autosize maxHeight={300} mx="auto">
        <ul className={classes.list}>
          {transactions.map((transaction: Transaction) => (
            <TransactionComponent
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      </ScrollArea.Autosize>
    </Box>
  );
}
