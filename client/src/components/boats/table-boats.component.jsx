import React from 'react';

import { connect } from 'react-redux';
import TableRows from './table-rows.component';
import Table from 'react-bootstrap/Table';

const TableBoats = ({ boats }) => {

  console.log('render ',boats);

  return (
    <>
    <h1>Лодки ПВХ</h1>
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>В наличии</th>
          <th>Цена</th>
          <th>Категория</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {boats.map((boat, index) => <TableRows key={index} {...boat} />)}
      </tbody>
    </Table>
    </>
  )
}


const mapStateToProps = state => ({
  boats: state.boat.boats
});

export default connect(mapStateToProps)(TableBoats);