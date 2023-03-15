import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter limite={10} limitezero={0}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
