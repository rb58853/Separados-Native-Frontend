import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    full: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(15,15,20,1)',
        // backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
    },


    myHeader2: {
        marginLeft: 5,
        marginBottom: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

    profileStats: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        placeContent: 'center',
        width: '98%',
    },

    scrollView: {
        width: "100%",
        flex:1,
    },
    text: {
        color: 'white',
    },
    favoritesBox: {
        backgroundColor: 'rgba(255,255,255,0.01)',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        // borderWidth:1,
        // borderColor: 'rgba(255,150,150,0.3)',
        marginVertical: 5,
    },

    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        width: '100%',
    },

    toUserButton: {
        width: '23.96%',
        aspectRatio: 2 / 3,
    },

    fullImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    exitButton: {
        position: 'absolute',
        right: 7,
        top: 7,
        backgroundColor: 'rgb(255, 0, 68)',
        height: 35,
        width: 35,
        zIndex: 2,
        borderRadius: 50,
    },
    exitButtonBackground: {
        height: 35,
        width: 35,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exitButtonImage: {
        height: '60%',
        width: '60%',
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 0.3,
    }
});