import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Top from './component/Top';
import Details from './component/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Top"
          component={Top} />
        <Stack.Screen
          name="Details"
          component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}