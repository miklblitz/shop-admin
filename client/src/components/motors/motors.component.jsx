import React from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import ShareTable from '../share/share-table.component';
import Myspinner from '../share/myspinner.component';

class Motors extends React.Component {

  constructor() {
    super();
    this.state = {
      gettingData: false,
      data: null,
      columns: [
        {
          Header: 'ID',
          accessor: 'id',
          headerStyle: { textAlign: 'center' }
        }, {
          Header: 'Название',
          accessor: 'name',
          headerStyle: { textAlign: 'center' }
        }, {
          Header: 'content',
          accessor: 'content',
          headerStyle: { textAlign: 'center' }
        }, {
          Header: 'Стоимость',
          accessor: 'rubles',
          headerStyle: { textAlign: 'center' }
        }
      ],
      page_count: 1,
      current_page: 1,
    }
  }

  getData() {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    axios.get(
      process.env.REACT_APP_BACKEND+'/goods/1/razdel',
      {
        timeout: 10000
      }
    )
      .then(response => {
        this.setState({
          data: response.data
        });
        this.setState({ gettingData: true });
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
      });
  }

  componentWillMount() {
    this.getData()
  }

  render() {
    // const PROD = process.env.REACT_APP_BACKEND
    if (this.state.gettingData) {
      const { data, columns } = this.state;

      return (
        <>
          <Breadcrumb className="mt-4">
            <Breadcrumb.Item active>Общий список</Breadcrumb.Item>
          </Breadcrumb>

          <ShareTable
            data={data}
            columns={columns}
            startUrl='motors'
            {...this.props}
          />
          
        </>
      )
    } else {
      return (
        <>
          <Myspinner />
        </>
      )
    }
  }

}

export default Motors;