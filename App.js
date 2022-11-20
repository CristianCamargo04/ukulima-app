import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/modules/auth/routes";
import { FarmerStack } from "./src/modules/farmer/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="FarmerStack" component={FarmerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
