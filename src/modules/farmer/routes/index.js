import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterFarmer from '../screens/registerFarmer/registerFarmer';
import ListFarmer from '../screens/listFarmer/listFarmer';
import ViewFarmer from '../screens/viewFarmer/viewFarmer';

const Stack = createNativeStackNavigator();

export function FarmerStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ListFarmer" component={ListFarmer} />
        <Stack.Screen name="ViewFarmer" component={ViewFarmer} />
        <Stack.Screen name="RegisterFarmer" component={RegisterFarmer} />
      </Stack.Navigator>
    );
}
  