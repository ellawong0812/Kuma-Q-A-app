import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import HomeScreen from './screen/HomeScreen';
import QuizScreen from './screen/QuizScreen';

export default function App() {
  useEffect(() =>{
    
  }

  )

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <QuizScreen/>
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
