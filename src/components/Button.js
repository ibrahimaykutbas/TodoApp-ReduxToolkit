import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

import units from '../theme/units';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

import {useDispatch} from 'react-redux';

import {toggleModal} from '../redux/modal';

const Button = ({isDark}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => dispatch(toggleModal({visible: true}))}>
      <Text style={[styles.text,isDark && {color:colors.WHITE}]}>Add a new task</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: units.height / 15,
    position: 'absolute',
    bottom: units.height / 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.BLACK,
    fontSize: fonts.size(20),
    fontWeight: '400',
  },
});
