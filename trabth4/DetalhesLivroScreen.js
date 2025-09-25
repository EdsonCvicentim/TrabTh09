import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';



const DetalhesLivroScreen = ({ route, navigation }) => {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{livro.titulo}</Text>
        <Text style={styles.autor}>{livro.autor}</Text>
        <Image 
          source={{ uri: livro.imagem }} 
          style={styles.imagem} 
        />
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  autor: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 250,
    borderRadius: 8,
    marginBottom: 30,
    backgroundColor: 'white',
  },
});

export default DetalhesLivroScreen;
