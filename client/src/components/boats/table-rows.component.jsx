import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import { editBoat } from '../../redux/boat/boat.actions';
import { connect } from 'react-redux';
import store from '../../redux/store';
import {editBoat as boatEdit, setBoat} from '../../redux/boat/boat.actions';
import { reset } from '../../redux/boat/boat.actions';
import axios from 'axios';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';

const TableRows= ({setBoat, ...boat}) =>{



  const ajax = data => new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    axios
      .put(
        process.env.REACT_APP_BACKEND + '/goods/' + boat.id,
        data,
        { headers, timeout: 10000 }
      )
      .then(response => {
        resolve('ok')
      })
      .catch(error => {
        console.log('ERROR: ', error.response);
        reject(error)
      })
      .finally(() => {
      });
  });


  const [availability, setAvaiability] = useState(boat.availability);
  const reToggle = async (boat) => {
    const objIndex = store.getState(boat).boat.boats.findIndex(obj => obj.id === boat.id);
    store.getState(boat).boat.boats[objIndex] = {...boat, availability: !availability};
    const assignedObject = Object.assign(store.getState(boat).boat.editBoat, boat);
    store.dispatch( reset());
    await(ajax({availability: !availability}));
    setAvaiability(!availability);
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }
  return(
    <tr>
      <td>{boat.id}</td>
      <td>{boat.name}</td>
      <td>
        <Form.Check
          type="switch"
          id={boat.id}
          label=""
          checked={availability}
          onClick={()=>{reToggle(boat)}}
        />
      </td>
      <td>{formatNumber(boat.rubles)}</td>
      <td>{boat.razdel_id}</td>
      <td className="text-center">
        <Button variant="info" onClick={() => { console.log('show') }}>Посмотреть</Button>
        <Button variant="primary" onClick={() => { boat.editBoat(boat); }} className="ml-1">Редактировать</Button>
        <Button variant="danger" onClick={() => { console.log('delete') }} className="ml-1">Удалить</Button>
        </td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => ({
  editBoat: boat => dispatch(editBoat(boat))
});

const mapStateToProps = state => ({
  setBoat: state.boat.editBoat
});
export default connect(mapStateToProps, mapDispatchToProps)(TableRows);



// const reToggle = (boat) => {

//   const objIndex = store.getState(boat).boat.boats.findIndex(obj => obj.id === boat.id);
//   store.getState(boat).boat.boats[objIndex] = {...boat, availability: false};
// boat.availability = false;
// setAvaiability(!availability);
// console.log(setBoat());
// console.log(store);
  // boat = {...boat, x: 1};
 //store.getState(boat).boat.editBoat = {...boat, availability: false};
 //  setBoat(store.getState(boat).boat.boats)
  //store.dispatch(setBoat(store.getState(boat).boat.boats));
 //  store.dispatch(setBoat(store.getState(boat).boat.boats));
  //console.log(store.getState(boat).boat.boats);
   // store.dispatch(setBoat(store.getState(boat).boat.boats));
// store.dispatch( reset());
// store.dispatch(reset())
 //const assignedObject = Object.assign(store.getState(boat).boat.editBoat, {...boat, availability: false});
 // const objIndex = store.getState(boat).boat.boats.findIndex(obj => obj.id === clone.id);
 //store.dispatch( boatEdit(assignedObject));
 
 // store.getState(boat).boat.boats[objIndex] = assignedObject;
 // console.log(store.getState(boat).boat.boats);
// }