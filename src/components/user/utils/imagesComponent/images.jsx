import { useEffect, useRef, useState } from 'react';
import { AgeCaculate, CalculateDistance, SwitchImage } from '../utils.jsx';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import styles, { infoStyle } from './style.jsx';
import { usersImagesRoot } from '../../../../environment/environment.js'
import FadePanel from '../../../utils/fadePanel.jsx'
import { LinearGradient } from 'expo-linear-gradient';
import Buttons from '../buttons/buttons.jsx';
import { useDispatch } from 'react-redux';

function InfoButton({ navigation, user }) {
    const dispatch = useDispatch()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('user',
                    {
                        userKey: user.nick,
                        activeButtons: true,
                    }
                );
            }}
            style={infoStyle.button}
        >
            <Image
                style={infoStyle.buttonImage}
                source={require('./icons/infoDark.png')}
            />
        </TouchableOpacity>
    )
};

function Slides({ images, indexImage, isHide }) {
    const slides = images.map((images, index) => {
        if (index == indexImage)
            return <View style={styles().activeSlide} />
        else
            return <View style={styles().slide} />
    })
    return (
        <FadePanel style={styles().slidesSpace} visible={!isHide}>
            {slides}
        </FadePanel>
    )
}
function Info({ user, navigation }) {

    return (
        <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)', 'rgba(15,15,20,1)']}
            style={styles().absoluteInfoSpace}
        >
            <View style={{ height: 100 }} />
            <View style={infoStyle.infoSpace}>

                <View style={infoStyle.shortInfo}>

                    <View style={infoStyle.infoRow}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 28, fontWeight: '500', color: 'white' }}>
                                {`${user.name} `}
                            </Text>
                            <Text style={{ fontSize: 23, fontWeight: '300', color: 'white' }}>
                                {`${AgeCaculate(user)}`}
                            </Text>
                        </View>

                        {/* {user.genre == 'male' && <Image style={infoStyle.genreImage} source={require('./icons/male.png')} />}
                        {user.genre == 'female' && <Image style={infoStyle.genreImage} source={require('./icons/female.png')} />} */}

                    </View>

                    <View style={infoStyle.infoRow}>
                        <Image style={infoStyle.infoRowImage} source={require('./icons/metrics.png')} />
                        <Text style={styles().text}>{`${user.height} cm, ${user.weight} kg`}</Text>
                    </View>

                    <View style={infoStyle.infoRow}>
                        {user.genre == 'male' && <Image style={infoStyle.infoRowImage} source={require('./icons/male.png')} />}
                        {user.genre == 'female' && <Image style={infoStyle.infoRowImage} source={require('./icons/female.png')} />}

                        {/* <Image style={infoStyle.infoRowImage} source={require('./icons/orientation.png')} /> */}
                        <Text style={styles().text}>{`${user.sexual_orientation}`}</Text>
                    </View>

                    {user.profession != 'none' &&
                        <View style={infoStyle.infoRow}>
                            <Image style={infoStyle.infoRowImage} source={require('./icons/profession.png')} />
                            <Text style={styles().text}>{`${user.profession}`}</Text>
                        </View>}

                    <View style={infoStyle.infoRow}>
                        <Image style={infoStyle.infoRowImage} source={require('./icons/location.png')} />
                        <Text style={styles().text}>{`${CalculateDistance(user)} km`}</Text>
                    </View>

                </View>

                <InfoButton navigation={navigation} user={user} />
            </View>

            <Buttons fast={true} />
        </LinearGradient>
    )
}

function Images({ user, mode = 'default', navigation }) {
    const images = user.images.map((path, index) => {
        return { id: index, uri: usersImagesRoot + path }
    })

    const renderItem = ({ item }) => (
        <Image
            source={{ uri: item.uri }}
            style={styles().image}
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
        <View style={styles(fast = mode == 'fast').container}>
            <Slides indexImage={indexImage} images={images} isHide={isHide} />
            <FlatList
                ref={ref}
                data={images}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={styles().carrusel}
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
                pagingEnabled

                onViewableItemsChanged={({ viewableItems, changed }) => { }}
            />
            {mode == 'fast' && <Info user={user} navigation={navigation} />}
        </View>
    )
}
export default Images