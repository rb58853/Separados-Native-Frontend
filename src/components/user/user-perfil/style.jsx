import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    user: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        placeContent: 'center',
        width: '98%',
    },

    scrollView: {
        flex: 1
    },
    boxImageHeader: {
        // backgroundColor: 'rgba(255,255,255,0.05)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderRadius: 5,
    },

    myHeader1: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    },

    myHeader2: {
        marginLeft: 5,
        marginBottom: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

    spaceToButtons: {
        // backgroundColor: 'white',
        height: 100,
        with: '100%',
    },

    boxSpace: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
    },
    tagsSpace: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,

    },
    tag: {
        backgroundColor: `rgba(255, 255, 255, 0.1)`,
        color: 'white',
        padding: 7,
        borderRadius: 15,
    },

    tagActive: {
        backgroundColor: `rgb(255, 0, 68)`,
        color: 'white',
        padding: 7,
        borderRadius: 15,
    },

    exitButton: {
        position: 'absolute',
        right: 7,
        top: 7,
        backgroundColor: 'rgb(255, 0, 68)',
        height: 35,
        width: 35,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    exitButtonImage: {
        height: '60%',
        width: '60%',
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 0.3,
    },
});