import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '_assets/theme';
import './i18n';

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
