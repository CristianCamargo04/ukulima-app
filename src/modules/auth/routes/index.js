import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/register/register';
import Login from '../screens/login/login';

const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={ ()=> <Register/>} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  