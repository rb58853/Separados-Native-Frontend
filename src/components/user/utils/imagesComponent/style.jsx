import { StyleSheet } from 'react-native';
import { mode } from '../../../../environment/environment';

let styleSheetDefault = StyleSheet.create({
    container: {
        position: 'relative',
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
        gap: Math.min(3, 5),
        width: '99%',
        alignSelf: 'center',
        top: 1,
        position: 'absolute',
        zIndex: 1,
    },

    slidesSpaceHide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        width: '96%',
        alignSelf: 'center',
        top: 1,
        position: 'absolute',
        zIndex: 1,
        opacity: 0,
    },

    slide: {
        height: 3,
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
    },

    activeSlide: {
        height: 3,
        flexGrow: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 50,
    },
    absoluteInfoSpace: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        pointerEvents: 'box-none',

    },

    text: {
        color: 'rgba(255,255,255,0.9)',
        fontWeight:'200',
    },
  
});

if (mode == 'light') {
    styleSheetDefault.slide.backgroundColor = 'rgba(255,255,255,0.2)'
}

styleSheetDefault = StyleSheet.create(styleSheetDefault)

const styleSheetFast = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'scroll',
        borderRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
})

export const infoStyle = StyleSheet.create(
    {
        button: {
            marginLeft: 'auto',
            height: 30,
            width: 30,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,

        },

        buttonImage: {
            height: '100%',
            width: '100%',
        },

        infoSpace: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
            pointerEvents: 'box-none',
        },
        shortInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap:1,
        },
        infoRow:{
            // backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            gap: 5,
        },
        infoRowImage:{
            height: 14,
            width: 14,
            opacity: 0.8,
        },
        genreImage:{
            height: 24,
            width: 24,
            opacity: 1,
        }

    }
)

function styles(fast = false) {
    if (fast)
        return styleSheetFast
    return styleSheetDefault
}
export default styles