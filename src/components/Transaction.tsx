import { createStyles } from "@mantine/core";
import { Transaction as TransactionInterface } from "../interfaces/interfaces";
const useStyles = createStyles((theme) => ({
  item: {
    cursor: "pointer",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
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
}));
interface Props {
  transaction: TransactionInterface;
  deleteTransaction: (id: number) => void;
}
export function Transaction({ transaction, deleteTransaction }: Props) {
  const { classes, cx } = useStyles();

  return (
    <li
      className={cx(
        classes.item,
        transaction.amount > 0 ? classes.plus : classes.minus
      )}
      onClick={() => deleteTransaction(transaction.id)}
    >
      <p>{transaction.title}</p>
      <p>${transaction.amount}</p>
    </li>
  );
}
