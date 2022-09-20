import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Title,
} from "@mantine/core";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { Transactions } from "./components/Transactions";
import { Transaction } from "./interfaces/interfaces";
import { useState } from "react";
import "./App.css";
import { ThemeToggle } from "./components/ThemeToggle";

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
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  function addTransaction(transaction: Transaction) {
    setTransactions([...transactions, transaction]);
  }
  function deleteTransaction(id: number) {
    const filtered = transactions.filter((t) => t.id !== id);
    setTransactions(filtered);
  }
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Box sx={{ width: "300px", margin: "20px auto" }}>
          <ThemeToggle />
          <Title>Expense Tracker</Title>
          <Balance transactions={transactions} />
          <Expenses transactions={transactions} />
          <Transactions
            deleteTransaction={deleteTransaction}
            transactions={transactions}
          />
          <AddTransaction addTransaction={addTransaction} />
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
