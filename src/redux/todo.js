import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'wake up at 7am',
      completed: false,
    },
    {
      id: 2,
      title: 'rush your teeth',
      completed: false,
    },
    {
      id: 3,
      title: 'walk the dog',
      completed: false,
    },
    {
      id: 4,
      title: 'pay the bills',
      completed: true,
    },
    {
      id: 5,
      title: 'work on UI/UX',
      completed: true,
    },
  ],
};

const todos = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
    },
  },
});

export const {addTodo, deleteTodo, editTodo} = todos.actions;
export default todos.reducer;
