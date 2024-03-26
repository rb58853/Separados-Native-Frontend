import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 60,
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
    buttons: {
        height: '100%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent:'center',
        // backgroundColor:'white',
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