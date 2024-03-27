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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 7,
    },
    
    logo: {
        height: '70%',
        aspectRatio: 4 / 1,
    },

    image: {
        height: "100%",
        backgroundColor: 'transparent',
        aspectRatio: 4 / 1,
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 1,
        marginTop: 'auto',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        backgroundColor: 'white',
        height: '80%',
        aspectRatio: 1 / 1,
    },
});