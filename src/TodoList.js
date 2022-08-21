import {View, StyleSheet} from 'react-native';
import React from 'react';

import Todo from './components/Todo';

import {useSelector} from 'react-redux';
import units from './theme/units';

const TodoList = () => {
  const {todos} = useSelector(state => state.todo);

  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: units.height / 25,
  },
});
