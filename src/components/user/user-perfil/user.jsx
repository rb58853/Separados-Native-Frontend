import { useEffect, useRef, useState } from 'react';
import users from '../../../data/users';
import perfil from '../../../data/perfil';
import { SwitchImage } from '../utils/utils';
import { AgeCaculate } from '../utils/utils';
import { View, ScrollView, Text, Touchable, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import { imagesStyle, styles } from './style';
import { usersImagesRoot } from '../../../environment/environment.js'
import FadePanel from '../utils/fadePanel.jsx';

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
            source={{ uri: 'http://192.168.200.251:8080/users/user1/images/1.png' }}
            style={imagesStyle.image}
        />
    );

    const [isHide, setIsHide] = useState(true)
    const [hideTimer, setHideTimer] = useState(null)

    const [indexImage, setIndexImage] = useState(0)
    const [deltaX, setDeltaX] = useState(0)

    const ref = useRef()

    // useEffect(() => {
    //     const component = ref.current.querySelectorAll('img')[indexImage];

    //     if (component) {
    //         const container = component.parentNode;
    //         const componentRect = component.getBoundingClientRect();
    //         const offsetLeft = (componentRect.width + 10) * indexImage;
    //         container.scrollTo({
    //             left: offsetLeft,
    //             behavior: 'smooth'
    //         });
    //     }
    // }, [indexImage])

    return (
        <View style={imagesStyle.container}>
            <Slides indexImage={indexImage} images={images} isHide={isHide} />
            {/* <Text style={styles.text}>{`${isHide ? 'True' : 'False'}`}</Text> */}
            <FlatList
                ref={ref}
                data={images}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={imagesStyle.carrusel}
                contentContainerStyle={{ gap: 10 }}

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

function Button({ image }) {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            // onPress={onPress}
            style={styles.button}
        >
            <Image
                style={styles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};

function Buttons() {
    const star = require('../utils/buttons/icons/star.png');
    const heart = require('../utils/buttons/icons/heart.png');
    const block = require('../utils/buttons/icons/block.png');
    const message = require('../utils/buttons/icons/message.png');
    const notification = require('../utils/buttons/icons/notification.png');
    // const [active, setActive] = useState(0)

    return (
        <View style={styles.buttons}>
            <Button image={notification} />
            <Button image={block} />
            <Button image={heart} />
            <Button image={message} />
            <Button image={star} />
        </View>
    );
}

function Tags({ user }) {
    const tags = []
    user.tags.forEach((tag) => {
        if (users[perfil.key].tags.includes(tag)) {
            tags.push(
                <Text style={styles.tagActive}>
                    {tag}
                </Text>
            )
        }
    })
    user.tags.forEach((tag) => {
        if (!users[perfil.key].tags.includes(tag)) {
            {
                tags.push(
                    <Text style={styles.tag}>
                        {tag}
                    </Text>
                )
            }
        }
    })

    return (
        <View style={styles.tagsSpace}>
            {tags}
        </View>
    )
}

function Info({ user }) {
    return (<View>

        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Informacion</Text>
            <Text style={styles.text}>{`${user.genre == 'male' ? "♂️" : '♀️'} ${user.name} ${user.last_name}`}</Text>
            <Text style={styles.text}>{`🏠 ${user.city}, ${user.municipe}`}</Text>
            <Text style={styles.text}>{`💜 ${user.sexual_orientation}`}</Text>
            <Text style={styles.text}>{`🏢 Unversidad de la Habana`}</Text>
            <Text style={styles.text}>{`👨‍🎓 Ingeniera de sofware`}</Text>
        </View>

        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Intereses</Text>
            <Tags user={user} />
        </View>
        <View style={styles.boxSpace}>
            <Text style={styles.myHeader2}>Sobre mi</Text>
            <Text style={styles.text}>
                {user.bibliografy}
            </Text>
        </View >
    </View>
    )

}
function User({ userKey }) {
    const user = users[userKey];

    return (
        <View style={styles.user}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.myHeader1}>{`${user.name}, ${AgeCaculate(user)}`}</Text>
                <Images user={user} />
                <Info user={user} />
                <View style={styles.spaceToButtons} />
            </ScrollView>
            <Buttons />
        </View >
    )
}
export default User