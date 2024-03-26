import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        marginLeft:5,
    },
    logo: {
        height: '70%',
        backgroundColor: 'white',
        aspectRatio: 4 / 1,
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 1,
        marginTop: 'auto',
    },
});