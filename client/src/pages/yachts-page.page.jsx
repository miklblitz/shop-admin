import React from 'react';

import Table from '../components/table/table.component';
import './page.style.scss';

const YachtsPage = () => (
  <div>
    <h1>Яхты</h1>
    <Table category='yachts' />
  </div>
)

export default YachtsPage;