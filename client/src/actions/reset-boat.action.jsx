import React, { useState } from  'react';
import { connect } from 'react-redux';
import { reset } from '../redux/boat/boat.actions'

const ResetBoat=()=>{
    const [count, setCount] = useState(0);
    setCount(count + 1)
    console.log('reset Boat', count);
}
const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

export default ResetBoat;