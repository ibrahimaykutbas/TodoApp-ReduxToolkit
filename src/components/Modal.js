import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import units from '../theme/units';
import colors from '../theme/colors';

import {useDispatch, useSelector} from 'react-redux';

import {toggleModal} from '../redux/modal';
import {addTodo, editTodo} from '../redux/todo';

import {nanoid} from '@reduxjs/toolkit';

import Modal from 'react-native-modal';

const AddTodo = () => {
  const {modalVisible, data} = useSelector(state => state.modal);
  const [todo, setTodo] = useState(data.title);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const saveTodo = () => {
    data
      ? dispatch(
          editTodo({
            id: data.id,
            title: todo,
            completed: data.completed,
          }),
        )
      : dispatch(
          addTodo({
            id: nanoid(),
            title: todo,
            completed: false,
          }),
        );
    closeModal();
  };

  useEffect(() => {
    setTodo(data.title);
  }, [data]);

  return (
    <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Enter the new task"
          value={todo}
          onChangeText={setTodo}
          style={styles.inputContainer}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={saveTodo}>
          <Text>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: units.height / 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: units.height / 300,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    width: units.width / 1.7,
    height: units.height / 25,
    backgroundColor: colors.WHITE,
    paddingLeft: units.width / 25,
    marginBottom: units.height / 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    width: units.width / 5,
    height: units.height / 25,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: units.height / 150,
    position: 'absolute',
    bottom: units.height / 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
