import React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial</Text>
      <Button title='Ir para detalhes'onPress={() => navigation.navigate('Detalhes', {produtoId: 101 })}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});