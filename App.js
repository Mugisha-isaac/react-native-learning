import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TodoList from './components/TodoList';
import ProductContainer from './Screens/products/product.container';
import Header from './shared/Header';

export default function App() {
  return (
    <View style={styles.container}>
      < Header/>
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
