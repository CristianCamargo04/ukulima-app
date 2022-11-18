import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/modules/auth/routes';
import { FarmerStack } from './src/modules/farmer/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={ AuthStack } />
          <Stack.Screen name="FarmerStack" component={ FarmerStack } />
        </Stack.Navigator>
      </NavigationContainer>
    );
}