import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';

export default function App() {
    const screenHeight = Dimensions.get('screen').height;
    const screenWidth = Dimensions.get('screen').width;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/auth-bg.png')}
                style={{ ...styles.bg_photo, width: screenWidth, height: screenHeight / 2 }}
            >
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <View>
                    <Text style={styles.text}>
                        Создавай. Следи. Оценивай. Все в одном приложении.
                    </Text>
                </View>

                <TouchableOpacity style={{ ...styles.loginBtn, width: screenWidth - 26 }}>
                    <LinearGradient
                        style={{ width: screenWidth - 26 }}
                        colors={[
                            'rgba(63, 140, 254, 0.2)',
                            'rgba(108, 99, 255, 0.2)',
                            'rgba(63, 140, 254, 0)',
                        ]}
                    >
                        <View style={styles.btnBox}>
                            <FontAwesome name="phone" size={24} color="black" />
                            <Text style={styles.textLogin}>Войти по номеру телефона</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_photo: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 25,
    },
    text: {
        marginTop: 24,
        fontSize: 21,
        marginHorizontal: 50,
        color: 'white',
        textAlign: 'center',
    },
    loginBtn: {
        marginTop: 54,
        height: 54,
        backgroundColor: 'white',

        marginBottom: 70,
        borderRadius: 12,
    },
    btnBox: {
        flexDirection: 'row',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
