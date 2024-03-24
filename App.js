import { StyleSheet, Text, View } from 'react-native';
import Test from './src/components/test/Test';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
