import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register/register";
import Login from "../screens/login/login";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
