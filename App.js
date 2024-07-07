import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import Catalogo from './pages/Catalogo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen 
          name="MainPage" 
          component={MainPage} 
          options={{ title: 'Main Page' }} 
        />
        <Stack.Screen 
          name="Catalogo" 
          component={Catalogo} 
          options={{ title: 'Catalogo' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

