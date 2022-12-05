import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        elevation: 2, // Android only attribute for shadow
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: { // Dedicated style to simulate ripple effect on iOS.
        opacity: 0.75,
    }
});

export default PrimaryButton;