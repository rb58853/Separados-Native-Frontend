import { View, Image, TouchableOpacity} from 'react-native';
import {perfilStyles } from './style.jsx';

function Button({ image }) {
    return (
        <TouchableOpacity
            // onPress={() => { }}
            // onPress={onPress}
            style={perfilStyles.button}
        >
            <Image
                style={perfilStyles.buttonImage}
                source={image}
            />
        </TouchableOpacity>
    )
};

function Buttons() {
    const star = require('./icons/star.png');
    const heart = require('./icons/heart.png');
    const block = require('./icons/block.png');
    const message = require('./icons/message.png');
    const notification = require('./icons/notification.png');
    // const [active, setActive] = useState(0)

    return (
        <View style={perfilStyles.buttons}>
            <Button image={notification} />
            <Button image={block} />
            <Button image={heart} />
            <Button image={message} />
            <Button image={star} />
        </View>
    );
}

export default Buttons