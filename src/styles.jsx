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
    standart: ['rgba(255, 20, 128,1)', 'rgba(255, 20, 108,1)', 'rgba(255, 50, 68,1)'],
    white: ['rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)'],

    like: ['rgba(128, 20, 255,1)', 'rgba(108, 20, 255,1)', 'rgba(68, 50, 255,1)'],
    likeActive: ['rgba(255, 20, 128,1)', 'rgba(255, 20, 108,1)', 'rgba(255, 50, 68,1)'],

    superLike: ['rgba(100, 200, 255,1)', 'rgba(0, 150, 255,1)', 'rgba(0, 100, 255,1)'],
}

export default defaulStyles