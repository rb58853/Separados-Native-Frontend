import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    test: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    },
    image:{
        //El aspect-ratio se guia por el valor del height
        height:100,
        aspectRatio: 1/1,
    }
});
