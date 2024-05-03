import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpense() {
  const expnesesCtx = useContext(ExpensesContext);

  const recentExpenses = expnesesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({});
