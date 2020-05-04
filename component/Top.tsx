import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';

const Tab = createBottomTabNavigator();

export default function Top() {
    const navigation = useNavigation();
  
    // Trick to add access to navigation prop to the header button
    // https://reactnavigation.org/docs/header-buttons/#header-interaction-with-its-screen-component
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={(props) => navigation.push('Details')} // FIXME: VSCode shows an error
            title="Details"
          />
        )
      });
    });
  
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Settings" component={SettingsTab} />
      </Tab.Navigator>
    );
  }
  