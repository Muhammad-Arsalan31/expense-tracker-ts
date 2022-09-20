import { Box, Title, Divider, createStyles, ScrollArea } from "@mantine/core";
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

interface Props {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
}
export function Transactions({ transactions, deleteTransaction }: Props) {
  const { classes } = useStyles();

  return (
    <Box>
      <Title order={5}>History</Title>
      <Divider />
      <ScrollArea.Autosize maxHeight={300} mx="auto">
        <ul className={classes.list}>
          {transactions.map((transaction: Transaction) => (
            <TransactionComponent
              deleteTransaction={deleteTransaction}
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      </ScrollArea.Autosize>
    </Box>
  );
}
