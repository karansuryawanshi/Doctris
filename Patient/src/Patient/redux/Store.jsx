// src/Patient/redux/Store.jsx
import { createStore } from 'redux';
import rootReducer from './reducers'; // Ensure this path is correct

const store = createStore(rootReducer);

export default store;

