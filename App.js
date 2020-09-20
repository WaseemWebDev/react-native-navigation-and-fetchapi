import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './components/register';
import Login from './components/login';
import Flatlist from './components/Flatlist';
import FetchApi from './components/FetchApi';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;
