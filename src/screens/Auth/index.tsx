import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const Auth = () => {
  console.log('auth')

  return (
    <View style={style.container}>

      <Text>Auth</Text>
    </View>
  )
}

export default Auth