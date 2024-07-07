import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'; 

// Importar las páginas
import MainPage from './pages/MainPage';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

// Importar el logo
import Logo from './assets/Imagenes/Logo.jpeg';

const Menu = createDrawerNavigator(); // Crear el menú

// Componente personalizado para el contenido del Drawer
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.logo} />
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Menu.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Menu.Screen name="MainPage" component={MainPage} />
        <Menu.Screen name="Catalogo" component={Catalogo} />
        <Menu.Screen name="Contacto" component={Contacto} />
        <Menu.Screen name="Nosotros" component={Nosotros} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 100, // Ajusta el tamaño del logo según sea necesario
    height: 100,
    resizeMode: 'contain', // Mantiene la proporción del logo
  },
});

export default App;

 
