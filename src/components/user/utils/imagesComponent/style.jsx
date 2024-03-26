import { StyleSheet } from 'react-native';

export const imagesStyle = StyleSheet.create({
    container: {
        position:'relative',
        overflow: 'scroll',
        borderRadius: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    carrusel: {
        width: '100%',
        aspectRatio: 2 / 3,
    },
    image: {
        height: "100%",
        aspectRatio: 2 / 3,
    },

    slidesSpace: {
        display: 'flex',
        flexDirection: 'row',
        gap:5,
        width:'99%',
        alignSelf:'center',
        top:1,
        position:'absolute',
        zIndex:1,
    },

    slidesSpaceHide: {
        display: 'flex',
        flexDirection: 'row',
        gap:5,
        width:'96%',
        alignSelf:'center',
        top:1,
        position:'absolute',
        zIndex:1,
        opacity: 0,
    },

    slide: {
        height: 3,
        flexGrow:1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius:50,
    },

    activeSlide: {
        height: 3,
        flexGrow:1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius:50,
    }

})