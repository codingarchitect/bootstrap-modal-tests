import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App.jsx';
import store from './store';

test('adds 1 + 2 to equal 3', () => {
  expect(1+2).toBe(3);
}); 
test('allows us to find close-button', (done) => {
  const wrapper = mount((<Provider store={store}>
    <App />
  </Provider>));
  wrapper.find('.show-dialog').simulate('click');
  setTimeout(() => {
    const dialog = wrapper.find(Modal);
    const modal = dialog.node._modal;
    const closeButton = modal.getDialogElement().querySelector('.close-button');
    ReactTestUtils.Simulate.click(closeButton);
    done();
  }, 3000);
});