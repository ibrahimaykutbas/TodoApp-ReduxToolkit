import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

import units from './theme/units';
import colors from './theme/colors';
import fonts from './theme/fonts';

import Todo from './components/Todo';

import {useSelector, useDispatch} from 'react-redux';

import {deleteTodo} from './redux/todo';
import {toggleModal} from './redux/modal';

import {SwipeListView} from 'react-native-swipe-list-view';

const TodoList = () => {
  const dispatch = useDispatch();

  const {todos} = useSelector(state => state.todo);
  const {isDark} = useSelector(state => state.theme);

  const editTodo = todo => {
    dispatch(
      toggleModal({
        visible: true,
        data: todo,
      }),
    );
  };

  const renderItem = ({item}) => {
    return <Todo todo={item} />;
  };

  const renderHiddenItem = (data, rowMap) => (
    <>
      <TouchableOpacity
        onPress={() => dispatch(deleteTodo(data.item.id))}
        style={[styles.swipeContainer, {left: 0}]}>
        <Text
          style={[
            styles.swipeText,
            {color: isDark ? colors.WHITE : colors.BLACK},
          ]}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => editTodo(data.item)}
        style={[styles.swipeContainer, {right: 0}]}>
        <Text
          style={[
            styles.swipeText,
            {color: isDark ? colors.WHITE : colors.BLACK},
          ]}>
          Edit
        </Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={todos}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={units.width / 5}
        stopLeftSwipe={units.width / 5}
        rightOpenValue={-units.width / 5}
        stopRightSwipe={-units.width / 5}
        contentContainerStyle={{paddingBottom: units.width}}
        showsVerticalScrollIndicator={false}
      />
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
  swipeContainer: {
    width: units.width / 5,
    height: units.width / 10,
    position: 'absolute',
    top: units.height / 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeText: {
    fontSize: fonts.size(14),
    fontWeight: '500',
  },
});
