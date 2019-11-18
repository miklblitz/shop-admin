import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter } from 'react-router-dom';

const translations = { 
  previousText: 'Назад', 
  nextText: 'Вперед', 
  loadingText: 'Идет загрузка ...',
  noDataText: 'Нет данных',
  pageText: 'Страница',
  ofText: 'из',
  rowsText: 'строк'
};

const ShareTable = (props) => {

  return (
  <ReactTable
      defaultPageSize={10}
      getTdProps={(state, rowInfo, column, instance, startUrl) => {
      return {
        onClick: (e, handleOriginal) => {
          if (rowInfo !== undefined) {
            console.log(props.startUrl)
            const row = rowInfo.row
            const baseUrl = props.startUrl == undefined ? props.match.url : props.startUrl
            props.history.push(`${baseUrl}/${row._original.id}`)
          }
          if (handleOriginal) {
            handleOriginal()
          }
        },
        style: {
          textAlign: 'left'
        }
      }
    }}
    data={props.data}
    columns={props.columns}
    {...translations}
  />)
}

export default withRouter(ShareTable);