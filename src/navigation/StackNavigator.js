import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        //Primeiro começo na Home - depois para detalhes
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Tela Home", headerTitleAlign: "center", }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Tela Detalhes", headerTitleAlign: "center" }} />
        </Stack.Navigator>
    );
}
