import { Dimensions, Text, StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{ children }</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: Colors.accent500,
        borderRadius: 8,
        borderWidth: 4,
        justifyContent: 'center',
        margin: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24,

    },
    numberText: {
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
});

export default NumberContainer;