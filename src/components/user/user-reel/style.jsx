import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { bottomBarHeight } from '../../../environment/environment.js';
import { Dimensions} from 'react-native';

// export const reelHeight = Dimensions.get('window').height - bottomBarHeight;
export const reelHeight = 787;

export const styles = StyleSheet.create({
    boxSpace: {
        // backgroundColor: 'rgba(255,255,255,0.05)',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 0,
    },
    text: {
        color: 'white',
    },
    myHeader2: {
        marginLeft: 5,
        marginBottom: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    user: {
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'center',
        width: '100%',
        // height: 800,
        height: reelHeight,
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 1,
        marginTop: 10,
    },
});