import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'rgba(15,15,20,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    myHeader2: {
        marginLeft: 5,
        marginBottom: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    profileStats: {
        // backgroundColor: 'rgba(152,152,220,1)',
        width: "98%"
    },
    text: {
        color: 'white',
    },

    superLikesBox: {
        backgroundColor: 'rgba(150,150,255,0.05)',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        borderColor: 'rgba(150,150,255,0.3)',
        marginVertical:5,
    },

    likesBox: {
        backgroundColor: 'rgba(150,255,150,0.05)',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        borderColor: 'rgba(150,255,150,0.3)',
        marginVertical:5,
    },

    blocksBox: {
        backgroundColor: 'rgba(255,150,150,0.05)',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        borderColor: 'rgba(255,150,150,0.3)',
        marginVertical:5,
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
        aspectRatio: 1 / 1,
    },

    fullImage: {
        width: '100%',
        height: '100%',
        borderRadius:20,
    }

})