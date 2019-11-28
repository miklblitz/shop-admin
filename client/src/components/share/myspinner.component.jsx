import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Myspinner = () => {
  return(
    <div className="d-flex justify-content-center align-middle">
      <Spinner animation="border" variant="primary" stylename="display: flex;margin: 100px auto;" />
    </div>
  )
}

export default Myspinner;