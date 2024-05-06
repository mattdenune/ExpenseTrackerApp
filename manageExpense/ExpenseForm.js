import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input';

export default function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input label="Amount" TextInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangedHandler,
      }} />
      <Input label="Date" TextInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangeText: () => {}
      }} />
      <Input label="Description" TextInputConfig={{
        multiLine: true,
        
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})