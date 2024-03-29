import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const defaulStyles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'rgba(15,15,20,1)',
    },
    app: {
        marginTop: Constants.statusBarHeight,
        color: 'white',
        flex: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(15,15,20,1)',
        alignItems: 'center',
        flex: 1,
    },
});

export const appGradientColors = {
    standart: ['rgba(255, 20, 110,1)', 'rgba(255, 20, 90,1)', 'rgba(255, 50, 60,1)'],
    blue: ['rgba(20, 110,255,1)', 'rgba(20, 90,255,1)', 'rgba(50, 60,255,1)'],
    green: ['(60, 255, 46, 1)', '(60, 255, 46, 1)', 'rgba(26, 173, 0, 1)'],
    white: ['rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)'],
    white80: ['rgba(255, 255, 255,0.8)', 'rgba(255, 255, 255,0.8)'],

    like: ['rgba(128, 20, 255,1)', 'rgba(108, 20, 255,1)', 'rgba(68, 50, 255,1)'],
    superLike: ['rgba(100, 200, 255,1)', 'rgba(0, 150, 255,1)', 'rgba(0, 100, 255,1)'],
}

export default defaulStyles