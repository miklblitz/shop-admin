import React, { Fragment } from 'react';

import { setBoat } from '../redux/boat/boat.actions';
import { connect } from 'react-redux';
import TableBoats from '../components/boats/table-boats.component';
import EditBoat from '../components/boats/edit-boat.component';
import axios from 'axios';
import store from '../redux/store';

import './page.style.scss';

class BoatsPage extends React.Component {

  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR ',props);
  }

  ajax = async() => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    const { setBoat } = this.props;
    await axios
      .get(
        process.env.REACT_APP_BACKEND + '/goods/2/razdel',
        { headers, timeout: 10000 }
      )
      .then(response => {
        console.log('RESPONSE: ', response);
        setBoat(response.data);
        // resolve(response.data);
      })
      .catch(error => {
        console.log('ERROR: ', error.response);
        // reject(error.response)
      })
      .finally(() => {
      });
  };

  componentDidMount() {
    this.ajax();
  }
  
  render() {
    console.log('editBoat: ',  this.props.editBoat);
    return (
      <div>
        <Mytrigger showIndexTable={!!isEmpty(this.props.editBoat)} showEditTable={!isEmpty(this.props.editBoat)} />
      </div>
    )
  }

}
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

function Mytrigger(props) {
  const { showIndexTable, showEditTable} = props;
  if (showIndexTable) {
    return <TableBoatsList />;
  }
  if (showEditTable) {
    return <TableBoatsEdit />;
  }
}

function TableBoatsList(props) {
  return <TableBoats />;
}

function TableBoatsEdit(props) {
  return <EditBoat store={store} />;
}



const mapDispatchToProps = dispatch => ({
  setBoat: boat => dispatch(setBoat(boat))
});

const mapStateToProps = state => ({
  editBoat: state.boat.editBoat
});

export default connect(mapStateToProps, mapDispatchToProps)(BoatsPage);