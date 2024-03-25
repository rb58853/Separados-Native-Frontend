import { StyleSheet } from 'react-native';

export const imagesStyle = StyleSheet.create({
    container: {
        position:'relative',
        backgroundColor: 'green',
        overflow: 'scroll',
        borderRadius: 10,
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
        width:'96%',
        alignSelf:'center',
        // position: 'absolute',
        top:1,
        position:'absolute',
        zIndex:1,
    },

    slide: {
        height: 5,
        flexGrow:1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius:50,
    },

    activeSlide: {
        height: 5,
        flexGrow:1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius:50,
    }

})

export const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    user: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        placeContent: 'center',
        width: '95%',
    },
    scrollView: {
        flex: 1
    },

    myHeader1: {
        marginTop: 10,
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
    }
});


// .buttons {
//     height: 100%,
//     overflow: visible,
//     display: flex,
//     place-items: center,
//     gap: 15px,
//     /* background-color: aqua, */
// }

// .button-reaction {
//     border: solid 1px white,
//     border: none,
//     padding: 15px,
//     height: 70%,
//     aspect-ratio: 1/1,
//     /* background-color: rgba(0, 0, 0, 0.4), */
//     background-color: rgba(50, 50, 50, 1),
//     /* background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(50, 50, 50, 1)), */
//     border-radius: 20px,
//     opacity: 1,

//     transition-property: transform, opacity,
//     transition-duration: 0.15s,
//     transition-timing-function: ease-in-out,
//     pointer-events: auto,
// }

// .button-reaction.like {
//     height: 80%,
// }

// .button-reaction>img {
//     /* background-color: aliceblue, */
//     height: 100%,
//     /* aspect-ratio: 1/1, */
// }

// .button-reaction.active {
//     transform: scale(1.3),
//     opacity: 1,

// }


// .button-reaction>img {
//     width: 100%,
// }

// .photo-name>h2 {
//     /* position: absolute, */
//     /* background-image: linear-gradient(rgba(15, 15, 15, 1), rgba(0, 0, 0, 0)), */
//     /* background-color: aqua, */
//     top: 0px,
//     margin-top: 0px,
//     width: 100%,
//     display: flex,
//     place-content: center,
//     place-items: flex-start,
//     /* height: 15%, */
// }

// .information {
//     width: 95%,
//     pointer-events: none,
// }

// .tags-space {
//     display: flex,
//     flex-wrap: wrap,
//     gap: 10px,
// }

// .tag {
//     background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
//     padding: 7px,
//     border-radius: 20px,
//     font-weight: 500,
//     /* border: solid 1px rgba(255, 255, 255, 0.323), */
// }

// .tag.active {
//     background-image: linear-gradient(to right, rgb(255, 0, 68), rgb(255, 0, 183)),
//     /* border: solid 1px rgba(255, 164, 244, 0.323), */
// }

// .slides {
//     top: 1px,
//     position: absolute,
//     z-index: 1,
//     width: calc(100% - 10px),
//     height: 10px,
//     display: flex,
//     gap: 5px,
//     opacity: 1,
//     transition-property: opacity,
//     transition-duration: 0.1s,
//     transition-timing-function: ease-in-out,
// }

// .slides.hide {
//     opacity: 0,
//     transition-duration: 0.5s,
// }

// .slide {
//     height: 3px,
//     background-color: rgba(0, 0, 0, 0.2),
//     flex-grow: 1,
//     border-radius: 10px,
// }

// .slide.active {
//     background-color: rgba(255, 255, 255, 0.5),
//     flex-grow: 1,
//     border-radius: 10px,
// }

// .info-space {
//     display: flex,
//     flex-direction: column,
//     gap: 5px,
// }

// .location {
//     height: fit-content,
//     display: flex,
//     place-items: center,
//     gap: 5px,

// }

// .icon-location {
//     height: 20px,
// }

// .space-for-buttons {
//     height: 100px,
// }

// .interests {
//     background-color: rgba(255, 255, 255, 0.05),
//     padding: 10px,
//     border-radius: 5px,
//     margin-top: 5px,
// }