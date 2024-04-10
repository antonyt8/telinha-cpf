import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavButton from '../components/NavButton';


const movies = [ { titulo: "Matrix", anoLancamento: 1999, autor: "The Wachowskis" },
{ titulo: "Pulp Fiction", anoLancamento: 1994, autor: "Quentin Tarantino" },
{ titulo: "O Poderoso Chefão", anoLancamento: 1972, autor: "Francis Ford Coppola" },
{ titulo: "Interestelar", anoLancamento: 2014, autor: "Christopher Nolan" },
{ titulo: "Clube da Luta", anoLancamento: 1999, autor: "David Fincher" },]




export default function FlatListSreen (){

const navigation  = useNavigation()
const navigateBack = ()=> {
    navigation.goBack()
}
 <View style={styles.container}>
      <Text style={styles.title}>FlatList</Text>
      <NavButton text="Voltar" onPress={navigateBack} />
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </View>
 const renderMovie = ({ item }) => (
    <View style={styles.list}>
      <Text>ID: {item.id}</Text>
      <Text>Filme: {item.title}</Text>
      <Text>Ano: {item.year}</Text>
    </View>
  );
 }

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 3,
    marginVertical: 32
  },
  title: {
    fontSize: 40,
    color: '#f64348'
  },
  button: {
    backgroundColor: "#1c1a1d",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
  },
  list: {
    marginTop: 40,
    marginHorizontal: 10,
  }
}) 
