import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nosotros = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Nosotros</Text>
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
        },
    });

export default Nosotros;
