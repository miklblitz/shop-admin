import React from 'react';
import ReactTable from 'react-table'

import 'react-table/react-table.css'
class Table extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const data = [
      { name: "Motor 1",  artikul: "motor1",  price: 45000, count: 11 },
      { name: "Motor 2",  artikul: "motor2",  price: 46000, count: 1 },
      { name: "Motor 3",  artikul: "motor3",  price: 37000, count: 27 },
      { name: "Motor 4",  artikul: "motor4",  price: 48000, count: 12 },
      { name: "Motor 5",  artikul: "motor5",  price: 42000, count: 3 },
      { name: "Motor 6",  artikul: "motor6",  price: 23000, count: 4 },
      { name: "Motor 7",  artikul: "motor7",  price: 44000, count: 23 },
      { name: "Motor 8",  artikul: "motor8",  price: 45000, count: 2 },
      { name: "Motor 9",  artikul: "motor9",  price: 41000, count: 1 },
      { name: "Motor 10", artikul: "motor10", price: 170000, count: 1 },
      { name: "Motor 11", artikul: "motor11", price: 43000, count: 3 },
      { name: "Motor 12", artikul: "motor12", price: 44000, count: 12 },
      { name: "Motor 13", artikul: "motor13", price: 45000, count: 28 },
      { name: "Motor 14", artikul: "motor14", price: 45000, count: 11 },
      { name: "Motor 15", artikul: "motor15", price: 46000, count: 17 },
      { name: "Motor 16", artikul: "motor16", price: 47000, count: 7 },
      { name: "Motor 17", artikul: "motor17", price: 48000, count: 2 },
      { name: "Motor 18", artikul: "motor18", price: 42000, count: 1 },
      { name: "Motor 19", artikul: "motor19", price: 43000, count: 1 },
      { name: "Motor 20", artikul: "motor20", price: 44000, count: 11 },
      { name: "Motor 21", artikul: "motor21", price: 45000, count: 2 },
      { name: "Motor 22", artikul: "motor22", price: 41000, count: 0 },
      { name: "Motor 23", artikul: "motor23", price: 42000, count: 1 }
    ]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Артикул',
      accessor: 'artikul',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      Header: 'Цена в руб',
      accessor: 'price'
    }, {
      Header: props => <span>Наличие</span>, // Custom header components!
      accessor: 'count'
    }]

    return (
      <div className="mt-4">
        Загрузка {this.props.category}
        
        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    )
  }
}

export default Table;