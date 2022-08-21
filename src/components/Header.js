import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import units from '../theme/units';
import fonts from '../theme/fonts';
import colors from '../theme/colors';

import Moon from '../assets/svgs/moon.svg';
import Glass from '../assets/svgs/glass.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Moon width={units.width / 15} height={units.width / 15} />
        <Glass width={units.width / 15} height={units.width / 15} />
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.today}>TODAY</Text>
        <Text style={styles.tomorrow}>TOMORROW</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
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
