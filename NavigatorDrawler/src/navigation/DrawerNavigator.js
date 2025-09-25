import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: "Tela Home" }} 
      />
      <Drawer.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ title: "Tela Detalhes" }} 
      />
    </Drawer.Navigator>
  );
}
