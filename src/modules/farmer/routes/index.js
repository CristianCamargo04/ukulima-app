import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterFarmer from '../screens/registerFarmer/registerFarmer';
import ListFarmer from '../screens/listFarmer/listFarmer';

const Stack = createNativeStackNavigator();

export function FarmerStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RegisterFarmer" component={RegisterFarmer} />
          <Stack.Screen name="ListFarmer" component={ListFarmer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  