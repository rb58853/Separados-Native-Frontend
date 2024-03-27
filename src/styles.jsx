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

export default defaulStyles