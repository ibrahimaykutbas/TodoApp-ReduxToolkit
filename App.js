import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import colors from './src/theme/colors';
import units from './src/theme/units';

import Header from './src/components/Header';
import TodoList from './src/TodoList';
import Button from './src/components/Button';
import ModalComponent from './src/components/Modal';

import {Provider} from 'react-redux';
import store from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TodoList />
        <Button />

        <ModalComponent />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginTop: units.height / 15,
    marginHorizontal: units.width / 10,
  },
});

export default App;
