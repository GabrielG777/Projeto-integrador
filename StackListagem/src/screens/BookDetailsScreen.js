import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookDetailsScreen({ route }) {
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📖 Detalhes do Livro</Text>
      <Text>ID: {id}</Text>
      <Text>Título: {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
});
