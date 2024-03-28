import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

function ScalePanel({ children, visible, style }) {
    const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <Animated.View
            style={[
                style,
                {
                    scaleY: fadeAnim,
                },
            ]}
        >
            {children}
        </Animated.View>
    );
}

export default ScalePanel