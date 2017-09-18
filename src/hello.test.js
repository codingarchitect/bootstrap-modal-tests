import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from './App.jsx';
import store from './store';

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
}); 
test('allows us to set props', () => {
  const wrapper = mount((<Provider store={store}>
    <App />
  </Provider>));
  expect(wrapper).toBeTruthy();
});