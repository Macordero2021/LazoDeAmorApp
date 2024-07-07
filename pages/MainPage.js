import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Page</Text>
      <Button
        title="Go to Catalogo"
        onPress={() => navigation.navigate('Catalogo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainPage;
