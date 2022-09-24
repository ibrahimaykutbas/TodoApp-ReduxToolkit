import {createSlice} from '@reduxjs/toolkit';

import {nanoid} from '@reduxjs/toolkit';

import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const todosMMKV = storage.getString('todos');
const todoList = todosMMKV && JSON.parse(todosMMKV);

const initialState = {
  todos: todoList ? todoList : [],
};

const todos = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      return storage.set('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload);
      return storage.set('todos', JSON.stringify(state.todos));
    },
    changeTodoStatus: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
      return storage.set('todos', JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
      return storage.set('todos', JSON.stringify(state.todos));
    },
  },
});

export const {addTodo, deleteTodo, changeTodoStatus, editTodo} = todos.actions;
export default todos.reducer;
