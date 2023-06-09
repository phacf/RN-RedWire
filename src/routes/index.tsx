import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack, Stack, VideoStack} from './Stacks';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen component={HomeStack} name="Home" />
      <Drawer.Screen component={VideoStack} name="Videos" />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
