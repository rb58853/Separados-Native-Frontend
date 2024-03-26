import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

//TODO future
class AnimItem {
    anim;
    defaultValue;
    activeValue;

    constructor(anim, defaultValue, activeValue) {
        this.anim = anim;
        this.defaultValue = defaultValue;
        this.activeValue = activeValue;
    }
}

const Transition = ({ children, active, style, activeStyle, transitionDuration = 500 }) => {
    // Crea una referencia para cada propiedad de estilo que desees animar
    const anims = {}

    anims['opacity'] = AnimItem(anim = useRef(new Animated.Value(active ? 1 : 0)).current, defaultValue = 0, activeValue = 1)
    anims['scale'] = AnimItem(anim = useRef(new Animated.Value(active ? 1.2 : 1)).current, defaultValue = 1, activeValue = 1.2)

    useEffect(() => {
        // Define las animaciones para cada propiedad de estilo
        const animations = anims.map((item) => {
            return Animated.timing(item.anim, {
                toValue: active ? item.activeValue : item.defaultValue,
                duration: transitionDuration,
                useNativeDriver: true,
            })
        })
        Animated.parallel(animations).start();
    }, [active, transitionDuration]);

    // Combina los estilos animados con los estilos estáticos
    const animatedStyle = {
        opacity: anims['opacity'],
        transform: [{ scale: anims['scale'] }], // Ejemplo de animación de escala
    };

    return (
        <Animated.View style={[style, animatedStyle]}>
            {children}
        </Animated.View>
    );
};


export default Transition