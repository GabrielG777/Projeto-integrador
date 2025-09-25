import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookListScreen from "../screens/BookListScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen 
        name="BookList" 
        component={BookListScreen} 
        options={{ title: "Lista de Livros", headerTitleAlign: "center" }}
      />
      <Stack.Screen 
        name="BookDetails" 
        component={BookDetailsScreen} 
        options={{ title: "Detalhes do Livro", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
