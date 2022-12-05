import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    useWindowDimensions,
    View
} from 'react-native';

import Title from '../components/ui/Title';
import successImg from '../assets/images/success.png';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { height, width } = useWindowDimensions();
    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        borderRadius: imageSize / 2,
        height: imageSize,
        width: imageSize,
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image source={successImg} style={styles.image} />
                </View>
                <Text style={styles.summary}>
                    Your're phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
};

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    imageContainer: {
        borderColor: Colors.primary800,
        //borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        //height: deviceWidth < 380 ? 150 : 300,
        margin: 36,
        overflow: 'hidden',
        //width: deviceWidth < 380 ? 150 : 300,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;