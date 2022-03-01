import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {headerBase} from './Commons';
import Home from '../Components/Screens/Home';
import BigAd from '../Components/Screens/BigAd';

export type RootStackParam = {
  Home: undefined;
  BigAd: {
    ad: any;
  };
};

export type BigAdScreenProps = StackScreenProps<RootStackParam, 'BigAd'>;

export type HomeScreenProps = StackScreenProps<RootStackParam, 'Home'>;

const Stack = createStackNavigator<RootStackParam>();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      screenOptions={headerBase}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}: HomeScreenProps) => ({
          title: 'News Categories',
          headerLeft: () => null,
          headerRight: () => null,
        })}
      />
      <Stack.Screen
        name="BigAd"
        component={BigAd}
        options={({navigation}: HomeScreenProps) => ({
          title: 'Ad',
        })}
      />
    </Stack.Navigator>
  );
};

export default Routes;
