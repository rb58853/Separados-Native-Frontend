import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bottomBar: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        backgroundColor: 'rgba(15,15,20,1)',

    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 1,
        marginTop: 'auto',
    },
    buttons: {
        height: '100%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },

    button: {
        height: '100%',
        aspectRatio: 1 / 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'gray',
    },
    buttonImage: {
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
    },

    buttonImageActive: {
        height: '80%',
        width: '80%',
        backgroundColor: 'red',
    },
});