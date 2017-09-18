import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import Modal from './modal.jsx';

const App = ({ dispatch, visible }) => {
  let modalRef; // eslint-disable-line
  return (<div>
    <h1>Hello from react!</h1>
    <button onClick={() => dispatch({ type: 'PING' })}>Dispatch Ping</button>
    <div>Check the console to see if ping was mapped to pong by cycle on Dispatch Ping</div>
    <Alert bsStyle="info">
        Hello from React Bootstrap
      </Alert>
    <button className="show-dialog" onClick={() => dispatch({ type: 'SHOW_DIALOG' })}>Show Dialog</button>
    <Modal visible={visible} />
  </div>);
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default connect(state => ({ visible: state.modal.visible }))(App);
