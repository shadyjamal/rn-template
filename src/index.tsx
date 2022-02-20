import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '_assets/theme';

const App = () => (
  <PaperProvider theme={theme}>
    <View style={styles.main}>
      <Text>Hello World</Text>
    </View>
  </PaperProvider>
);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
