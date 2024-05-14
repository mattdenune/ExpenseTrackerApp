import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expense-app-be181-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
