import {Text,View,ScrollView,CheckBox,StyleSheet} from 'react-native'
import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'


export default function App() {
  const [appName, setAppName] = useState("My To Do List");

  return (
    <View style = {styles.mainView}>
    <Header name={appName} />
    <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
 mainView : {
    flex:1,
    height:"100%",
    alignItem:'center',
    justtifyContent:'center'
  },
})