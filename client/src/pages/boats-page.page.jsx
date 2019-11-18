import React from 'react';

import Table from '../components/table/table.component';
import './page.style.scss';

const BoatsPage = () => (
  <div>
    <h1>Лодки ПВХ</h1>
    <Table category='boats' />
  </div>
)

export default BoatsPage;