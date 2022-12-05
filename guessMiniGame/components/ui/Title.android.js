import { Text, StyleSheet, Platform } from 'react-native' ;

function Title({ children }) {
    return <Text style={styles.title}>{ children }</Text>;
};

const styles = StyleSheet.create({
    title: {
        borderColor: 'white',
        borderWidth: 2,
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2}),
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        maxWidth: '80%',
        textAlign: 'center',
        padding: 12,
        width: 300,
    }
});

export default Title;
