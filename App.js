import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors,parameters } from './src/global/styles';
import HomeScreen from './src/screens/homeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
   
}
})