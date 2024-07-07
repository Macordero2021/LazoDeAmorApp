import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Temu from '../assets/Imagenes/Temu.png';
import Shein from '../assets/Imagenes/Shein.png';
import Amazon from '../assets/Imagenes/Amazon.webp';
import Alibaba from '../assets/Imagenes/Alibaba.png';
import Imagen1 from '../assets/Imagenes/Imagen1.jpg';

const MainPage = ({ navigation }) => {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image source={Imagen1} style={styles.imagePrincipal} />
        {/* Superposición negra semi-transparente */}
        <View style={styles.overlay} />
        <Text style={styles.textPrincipal}>Traemos todo lo que necesitas desde USA y China directamente a tu puerta.</Text>
      </View>

      <View style={styles.container}>
        <Image source={Shein} style={styles.image} />
        <Image source={Amazon} style={styles.image} />
        <Image source={Alibaba} style={styles.image} />
        <Image source={Temu} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f8f7ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePrincipal: {
    width: 450,
    height: 400,
    // La opacidad original se maneja a través de la capa superpuesta
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cubre toda la imagen principal
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo negro con 60% de opacidad
    zIndex: 1, // Asegura que esté por encima de la imagen pero por debajo del texto
  },
  textPrincipal: {
    position: 'absolute',
    zIndex: 2, // Asegura que esté por encima de la superposición
    color: 'white', // Texto blanco para que sea visible sobre el fondo negro
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 400,
    height: 100,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    flexDirection: 'row',
    margin: 10,
  },
});

export default MainPage;
