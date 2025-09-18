import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de Detalhes </Text>
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}
