import { StyleSheet } from 'react-native';

export const perfilStyles = StyleSheet.create({
    buttons: {
        position: 'absolute',
        bottom: 30,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        // backgroundColor: 'rgba(255,255,255,0.3)',
        alignSelf: 'center',
    },

    button: {
        height: '100%',
        aspectRatio: 1 / 1,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(44,44,53,1)',
        borderRadius: 50,
        // borderColor: 'rgba(0, 0, 0,0.3)',
        // borderWidth: 1,

    },
    buttonImage: {
        height: '50%',
        width: '50%',
        // backgroundColor:'white',
    },
});

export const fastStyles = StyleSheet.create({
    buttons: {
        position: 'absolute',
        bottom: 30,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        // backgroundColor: 'rgba(255,255,255,0.3)',
        alignSelf: 'center',
    },

    button: {
        height: '100%',
        aspectRatio: 1 / 1,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50,50,50,1)',
        borderRadius: 20,

    },
    buttonImage: {
        height: '60%',
        width: '60%',
        // backgroundColor:'white',
    },
});