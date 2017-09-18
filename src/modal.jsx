/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const modalInstance = ({ visible }) => (<div>
  <Modal show={visible}>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      One fine body...
    </Modal.Body>
    <Modal.Footer>
      <Button className="close-button" 
        onClick={() => console.log('Hello World!')}>Close</Button>
      <Button
        bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal>
</div>);

modalInstance.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default modalInstance;
