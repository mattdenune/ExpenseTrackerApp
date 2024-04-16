import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function RecentExpense() {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </View>
  )
}

const styles = StyleSheet.create({})