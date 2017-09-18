import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from './App.jsx';
import store from './store';

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
}); 
test('does not allow us to find close-button intially', () => {
  const wrapper = mount((<Provider store={store}>
    <App />
  </Provider>));
  expect(wrapper.find('.close-button').length).toBe(1);
});
test('allows us to find close-button after show dialog button click', (done) => {
  const wrapper = mount((<Provider store={store}>
    <App />
  </Provider>));
  wrapper.find('.show-dialog').simulate('click');
  setTimeout(() => {
    wrapper.update();
  }, 1000);
  setTimeout(() => {    
    expect(wrapper.find('.close-button').length).toBe(2);
    done();
  }, 3000);
});