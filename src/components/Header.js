import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

import units from '../theme/units';
import fonts from '../theme/fonts';
import colors from '../theme/colors';

import DarkMoon from '../assets/svgs/dark-moon.svg';
import LightMoon from '../assets/svgs/light-moon.svg';
import DarkGlass from '../assets/svgs/dark-glass.svg';
import LightGlass from '../assets/svgs/light-glass.svg';

import {useDispatch} from 'react-redux';

import {changeTheme as changeThemeRedux} from '../redux/theme';

const Header = ({isDark}) => {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(changeThemeRedux());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Pressable onPress={changeTheme}>
          {isDark ? (
            <LightMoon width={units.width / 15} height={units.width / 15} />
          ) : (
            <DarkMoon width={units.width / 15} height={units.width / 15} />
          )}
        </Pressable>
        {isDark ? (
          <LightGlass width={units.width / 15} height={units.width / 15} />
        ) : (
          <DarkGlass width={units.width / 15} height={units.width / 15} />
        )}
      </View>
      <View style={styles.bottomContent}>
        <Text style={[styles.today, isDark && {color: colors.WHITE}]}>
          TODAY
        </Text>
        <Text style={styles.tomorrow}>TOMORROW</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: units.height / 40,
    marginHorizontal: units.width / 10,
    marginBottom: units.height / 25,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: units.height / 25,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  today: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.size(30),
  },
  tomorrow: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: fonts.size(19),
    textDecorationLine: 'line-through',
  },
});
