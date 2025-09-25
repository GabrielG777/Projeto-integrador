import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function BookListScreen({ navigation }) {
  const books = [
    { id: "1", title: "O Senhor dos Anéis" },
    { id: "2", title: "Harry Potter" },
    { id: "3", title: "Dom Casmurro" },
    { id: "4", title: "1984" },
    { id: "5", title: "O Pequeno Príncipe" },
    { id: "6", title: "O Hobbit" },
    { id: "7", title: "A Revolução dos Bichos" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Button
        title="Ver detalhes"
        onPress={() => navigation.navigate("BookDetails", { id: item.id, title: item.title })}
      />
    </View>
  );

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
});
