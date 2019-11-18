import React from 'react';

import Table from '../components/table/table.component';
import './page.style.scss';

const MotorsPage = () => (
  <div>
    <h1>Лодочные моторы</h1>
    <Table category='motors' />
  </div>
)

export default MotorsPage;