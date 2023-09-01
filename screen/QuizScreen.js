import { SafeAreaView, StyleSheet, Text, View,Button, Alert } from 'react-native';
import React from 'react';
import Question from '../components/Question';
import Answer from '../components/Answer';

const QuizScreen = () => {
  return (
    <SafeAreaView>
      <Question/>
      <Answer/>
      <Answer/>
      <Answer/>
      <Answer/>
      <Button title="Next" onPress={() => Alert.alert("Congralation","Correct",[{text:"Close"}])}/>
    </SafeAreaView>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})