import React from 'react';
import 'react-native-gesture-handler';

//screens
import Videos from '../screens/Home/Videos';
import Video from '../screens/Home/Videos/Video';
import Articles from '../screens/Home/Articles';
import Article from '../screens/Home/Articles/Article';

import {createStackNavigator} from '@react-navigation/stack';

export const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home_screen">
    <Stack.Screen name="Home_screen" component={Articles} />
    <Stack.Screen name="Articles_screen" component={Article} />
  </Stack.Navigator>
);

export const VideoStack = () => (
  <Stack.Navigator initialRouteName="Videos_screen">
    <Stack.Screen name="Videos_screen" component={Videos} />
    <Stack.Screen name="Video_screen" component={Video} />
  </Stack.Navigator>
);
