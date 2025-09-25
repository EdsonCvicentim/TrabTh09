import React from 'react';
import { View, Text, StyleSheet, FlatList, Button} from 'react-native';

const LIVROS = [
  {
    id: '1',
    titulo: 'Diario de um banana', 
    autor: 'Jeff Kinney', 
    imagem: 'https://www.topleituras.com/livros/diario-banana-b749-capa.jpg',
  },
  {
    id: '2',
    titulo: 'A Revolução dos Bichos', 
    autor: 'George Orwell', 
    imagem: 'https://images.dlivros.org/George-Orwell/revolucao-bichos-george-orwell_large.webp',
  },
  {
    id: '3',
    titulo: 'Pai Rico, Pai Pobre', 
    autor: 'Robert Kiyosaki, Sharon L. Lechter', 
    imagem: 'https://m.media-amazon.com/images/I/71V4lNR2gKL.jpg',
  },
  {
    id: '4',
    titulo: 'Solo Leveling', 
    autor: 'Chu-Gong', 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjydKUpH1rz3V2N2oTcKX7O3QIMkH_-xqqw&s',
  },
];

const ListaLivrosScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.autor}>{item.autor}</Text>
      </View>
      <Button
        title="Detalhes"
        onPress={() => {
          navigation.navigate('Detalhes', { livro: item });
        }}
        color="blue"
      />
    </View>
  );

  return (
    <view style={styles.container}>
      <FlatList
        data={LIVROS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    padding: 18,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 22,
    marginVertical: 8,
    borderRadius: 6,
    elevation: 4, 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemTextContainer: {
    marginBottom: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 14,
    color: 'black',
  },
});

export default ListaLivrosScreen;