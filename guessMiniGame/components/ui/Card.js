import  { Dimensions, StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.card}>
            { children }
        </View>
    )
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // Android only property for shadow
        justifyContent: 'center',
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        shadowColor: 'black', // iOS only aatribute for shadow
        shadowOffset: { width: 0, height: 2 }, // iOS only aatribute for shadow
        shadowRadius: 6, // iOS only aatribute for shadow
        shadowOpacity: 0.25, // iOS only aatribute for shadow
    },
});

export default Card;