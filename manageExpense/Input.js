import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label, TextInputConfig}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...TextInputConfig}/>
    </View>
  )
}

const styles = StyleSheet.create({})