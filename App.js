import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

import colors from './src/theme/colors';
import units from './src/theme/units';

import Header from './src/components/Header';
import TodoList from './src/TodoList';
import Button from './src/components/Button';
import ModalComponent from './src/components/Modal';

import {Provider} from 'react-redux';
import store from './src/redux';

import {useSelector} from 'react-redux';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

/* 
could not find react-redux context value; please ensure the component is wrapped in a <Provider>
Bu hatayı veriyor.
Önerilen yöntem ise Provider içerisini ayrı bir component yapmak.

*/
const App = () => {
  const {isDark} = useSelector(state => state.theme);

  return (
    <>
      <SafeAreaView
        style={{
          height: units.height / 20,
          backgroundColor: isDark ? colors.BLACK : colors.WHITE,
        }}>
        <StatusBar
          translucent
          barStyle={isDark ? 'light-content' : 'dark-content'}
        />
      </SafeAreaView>
      <SafeAreaView
        style={isDark ? styles.darkContainer : styles.lightContainer}>
        <Header isDark={isDark} />

        <TodoList />
        <Button isDark={isDark} />

        <ModalComponent />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  lightContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});

export default AppWrapper;
