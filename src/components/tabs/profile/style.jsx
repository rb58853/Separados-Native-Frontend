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

    boxSpace: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 0,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
        width: '100%',
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
        // marginLeft: 5,
        // marginBottom: 10,
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
        // justifyContent:'space-between',
        gap: 10,
        marginTop: 5,
        marginBottom: 5,
        // backgroundColor: 'gray'
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
    },

    imagesSpace: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        width: '100%',
        // backgroundColor:'gray'
    },
    shortImage: {
        width: "32.415%",
        aspectRatio: 2 / 3,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 2,
    },

    addImage: {
        width: "32.415%",
        aspectRatio: 2 / 3,
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.04)',
        // backgroundColor: 'rgba(0,255,100,0.04)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,1)',
        opacity:0.8,
    },
    addImageImage: {
        height: '60%',
        width: '60%',
    },
    tagsSpace: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    tag: {
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 5,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor:'blue',
        height: 22,
        marginBottom: 10,
    },
    headerIcon: {
        width: 18,
        height: 18,
        opacity: 0.6,
    },
    deleteIcon: {
        width: 15,
        height: 15,
        opacity: 1,
    },
    newTag: {
        borderRadius: 100,
        height: 26,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1 / 1,
    },
    plusImage: {
        height: '70%',
        width: '70%',
    }

});