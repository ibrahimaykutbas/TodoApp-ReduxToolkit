import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../theme/colors';
import fonts from '../theme/fonts';
import units from '../theme/units';

import {useSelector, useDispatch} from 'react-redux';

import {changeTodoStatus} from '../redux/todo';

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  const {isDark} = useSelector(state => state.theme);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? colors.BLACK : colors.WHITE},
      ]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => dispatch(changeTodoStatus(todo.id))}>
        <Text
          style={
            todo.completed
              ? styles.completedText
              : [styles.activeText, isDark && {color: colors.WHITE}]
          }>
          {todo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: units.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.size(15),
    marginVertical: units.height / 40,
  },
  completedText: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: fonts.size(15),
    marginVertical: units.height / 40,
    textDecorationLine: 'line-through',
  },
});
