import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Videos from '../screens/Home/Videos';
import Video from '../screens/Home/Videos/Video';
import Articles from '../screens/Home/Articles';
import Article from '../screens/Home/Articles/Article';

export const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home_Screen">
      <Stack.Screen component={Articles} name={'Home_Screen'} />
      <Stack.Screen component={Article} name={'Article'} />
    </Stack.Navigator>
  );
};

export const VideoStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home_Screen">
      <Stack.Screen component={Videos} name={'Videos_Screen'} />
      <Stack.Screen component={Video} name={'Video'} />
    </Stack.Navigator>
  );
};
