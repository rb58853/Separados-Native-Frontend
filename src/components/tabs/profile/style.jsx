import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'rgba(15,15,20,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profile: {
        // backgroundColor: 'rgba(152,152,220,1)',
        width: "98%"
    },
    imagesSpace:{
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 0,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
    },
    boxSpace: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 0,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
    },
    text: {
        color: 'white',
    },

    myHeader1: {
        marginLeft: 5,
        marginBottom: 10,
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
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 1,
        marginVertical: 5,
    },

    rowProfile: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        gap: 10,
        marginTop: 5,
    },

    nameSpace: {
        display: 'flex',
        flexDirection: 'column',
        // height: '100%',
    },

    profileName: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },

    profilePhoto: {
        height: "100%",
        aspectRatio: 1 / 1,
        backgroundColor: 'white',
        borderRadius: 50,
    }
});