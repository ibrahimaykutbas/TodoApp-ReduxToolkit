import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../theme/colors';
import fonts from '../theme/fonts';
import units from '../theme/units';

import {useDispatch} from 'react-redux';

import {deleteTodo} from '../redux/todo';
import {toggleModal} from '../redux/modal';

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => dispatch(deleteTodo(todo.id))}
        onLongPress={() =>
          dispatch(
            toggleModal({
              visible: true,
              data: todo,
            }),
          )
        }>
        <Text style={todo.completed ? styles.completedText : styles.activeText}>
          {todo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    color: colors.GRAY,
    fontWeight: 'bold',
    fontSize: fonts.size(15),
    marginVertical: units.height / 40,
    textDecorationLine: 'line-through',
  },
  completedText: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.size(15),
    marginVertical: units.height / 40,
  },
});
