import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import {Stack, HomeStack, VideoStack} from './Stacks';

//screens
import Auth from '../screens/Auth';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideoStack} />
  </Drawer.Navigator>
);

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.Auth.isAuth ? (
          <>
            <Stack.Screen name="Main" component={MainDrawer} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Auth} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToPtops = state => ({Auth: state.Auth});

export default connect(mapStateToPtops)(Routes);
