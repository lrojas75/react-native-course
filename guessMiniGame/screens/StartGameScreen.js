import { useState } from 'react';
import { Alert, KeyboardAvoidingView, useWindowDimensions, TextInput, ScrollView, StyleSheet, View } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        };

        onPickedNumber(chosenNumber);
    };

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                        <Card>
                            <InstructionText>Enter a Number</InstructionText>
                            <TextInput
                                style={styles.numberInput}
                                maxLength={2}
                                keyboardType='number-pad'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={enteredNumber}
                                onChangeText={numberInputHandler}
                            />
                            <View style={styles.buttonsContainer}>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                                </View>
                            </View>
                        </Card>
                    </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        alignItems: 'center',
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
    },
    numberInput: {
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        fontSize: 32,
        fontWeight: 'bold',
        height: 50,
        marginVertical: 8,
        textAlign: 'center',
        width: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default StartGameScreen;