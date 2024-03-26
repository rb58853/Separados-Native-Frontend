import { useEffect, useRef, useState } from 'react';
import { SwitchImage } from '../utils.jsx';
import { View, Image, FlatList } from 'react-native';
import { imagesStyle } from './style.jsx';
import { usersImagesRoot} from '../../../../environment/environment.js'
import FadePanel from '../../../utils/fadePanel.jsx'

function Slides({ images, indexImage, isHide }) {
    const slides = images.map((images, index) => {
        if (index == indexImage)
            return <View style={imagesStyle.activeSlide} />
        else
            return <View style={imagesStyle.slide} />
    })
    return (
        <FadePanel style={imagesStyle.slidesSpace} visible={!isHide}>
            {slides}
        </FadePanel>
    )
}


function Images({ user }) {
    const images = user.images.map((path, index) => {
        return { id: index, uri: usersImagesRoot + path }
    })

    const renderItem = ({ item }) => (
        <Image
            source={{ uri: item.uri }}
            style={imagesStyle.image}
        />
    );

    const [isHide, setIsHide] = useState(true)
    const [hideTimer, setHideTimer] = useState(null)

    const [indexImage, setIndexImage] = useState(0)
    const [deltaX, setDeltaX] = useState(0)

    const ref = useRef()

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollToIndex({ index: indexImage, animated: true });
        }
    }, [indexImage]);

    return (
        <View style={imagesStyle.container}>
            <Slides indexImage={indexImage} images={images} isHide={isHide} />
            <FlatList
                ref={ref}
                data={images}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={imagesStyle.carrusel}
                showsHorizontalScrollIndicator={false}

                onScrollBeginDrag={(e) => { setDeltaX(e.nativeEvent.contentOffset.x) }}
                onScrollEndDrag={(e) => {
                    SwitchImage(e.nativeEvent.contentOffset.x, deltaX, setIndexImage, indexImage, images.length)
                }}
                onScroll={(e) => {
                    setIsHide(false)
                    if (hideTimer) {
                        clearTimeout(hideTimer);
                    }
                    setHideTimer(setTimeout(() => { setIsHide(true) }, 1000));
                }}

            />

        </View>
    )
}
export default Images