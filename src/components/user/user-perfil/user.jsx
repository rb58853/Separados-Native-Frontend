import { useEffect, useRef, useState } from 'react';
import users from '../../../data/users';
import perfil from '../../../data/perfil';
import { SwitchImage } from '../utils/utils';
import { AgeCaculate } from '../utils/utils';
import { View, ScrollView, Text, Touchable, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { requireNativeModule } from 'expo';


// function Slides({ images, indexImage, isHide }) {
//     const slides = images.map((images, index) => {
//         if (index == indexImage)
//             return <View className={`slide active`} />
//         else
//             return <View className={`slide`} />
//     })
//     return (
//         <View className={`slides ${isHide ? 'hide' : ''}`}>
//             {slides}
//         </View>
//     )
// }

// function Images({ user }) {
//     const [isHide, setIsHide] = useState(true)
//     const [hideTimer, setHideTimer] = useState(null)

//     const images = user.images.map((path, index) => {
//         return <img src={path} alt="" key={index} />
//     }
//     )
//     const [indexImage, setIndexImage] = useState(0)
//     const [deltaX, setDeltaX] = useState(0)

//     const ref = useRef()

//     useEffect(() => {
//         const component = ref.current.querySelectorAll('img')[indexImage];

//         if (component) {
//             const container = component.parentNode;
//             const componentRect = component.getBoundingClientRect();
//             const offsetLeft = (componentRect.width + 10) * indexImage;
//             container.scrollTo({
//                 left: offsetLeft,
//                 behavior: 'smooth'
//             });
//         }
//     }, [indexImage])

//     return (

//         <View className="photo-name">
//             <Slides indexImage={indexImage} images={images} isHide={isHide} />
//             <View className='carrusel'
//                 ref={ref}
//                 onTouchStart={(e) => setDeltaX(e.currentTarget.scrollLeft)}
//                 onTouchEnd={(e) => {
//                     SwitchImage(e.currentTarget.scrollLeft, deltaX, setIndexImage, indexImage, images.length)
//                 }}
//                 onScroll={(e) => {
//                     setIsHide(false)
//                     if (hideTimer) {
//                         clearTimeout(hideTimer);
//                     }
//                     setHideTimer(setTimeout(() => { setIsHide(true) }, 1000));
//                 }
//                 }
//             >
//                 {images}
//             </View>
//             {/* <View className='vinnete'/> */}
//         </View>
//     )
// }


// function Buttons() {
//     return (
//         <Text  style ={styles.text}>
//             seasrassad sadjasddddddddddd
//         </Text>
//         )
// }
// const button = ({ onPress, image }) => (
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

function User({ userKey }) {
    const user = users[userKey];

    return (
        <View style={styles.user}>
            <ScrollView>
                <Text style={styles.myHeader1}>{`${user.name}, ${AgeCaculate(user)}`}</Text>
                {/* <Images user={user} /> */}
                {/* <View> */}
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
                <View style = {styles.spaceToButtons}/>
            </ScrollView>
            <Buttons />
        </View >
    )
}
export default User