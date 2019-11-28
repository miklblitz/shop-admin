import React from 'react';
import Button from 'react-bootstrap/Button';
import { editBoat } from '../../redux/boat/boat.actions';
import { connect } from 'react-redux';

const TableRows= ({...boat}) =>{
  
  console.log('BOAT ',boat);
  return(
    <tr>
      <td>{boat.id}</td>
      <td>{boat.name}</td>
      <td>{boat.availability? 'Есть' : '-'}</td>
      <td>{boat.rubles}</td>
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

export default connect(null, mapDispatchToProps)(TableRows);