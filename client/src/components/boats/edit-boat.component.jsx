import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';
import { Row, Col, Container } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import CKEditor from 'ckeditor4-react';

import store from '../../redux/store';
import { reset } from '../../redux/boat/boat.actions';
import ResetBoat from '../../actions/reset-boat.action';
import {editBoat as boatEdit} from '../../redux/boat/boat.actions';

const EditBoat = ({editB}) => {

  // console.log(editB);
  
  //console.log(reset());
  const { register, handleSubmit, errors } = useForm();

  const clone = editB;

  const ajax = data => new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    axios
      .put(
        process.env.REACT_APP_BACKEND + '/goods/' + editB.id,
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

  const intersection = (o1, o2) => {
    return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
  }

  const onSubmit = async(editB) => {
    const assignedObject = Object.assign(store.getState(editB).boat.editBoat, editB);
    const objIndex = store.getState(editB).boat.boats.findIndex(obj => obj.id === clone.id);
    store.dispatch( boatEdit(assignedObject));
    store.getState(editB).boat.boats[objIndex] = assignedObject;
    await ajax(assignedObject);
  }

  return(
      <div>
        <h1>Редактирование лодок</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Container className="mt-3">
            <Row>
              <Col>
                Название 
              </Col>
              <Col xs={9}>
                <FormControl
                  placeholder="Название сервиса"
                  defaultValue={editB.name}
                  name="name"
                  ref={register({
                    validate: value => value.length > 1
                  })}
                />
                {errors.name && <Alert key="service_edit_1" variant="danger">Некорректное название</Alert>}
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row>
            <Col>
                Описание
            </Col>
              <Col xs={9}>
                <CKEditor
                    name="content"
                    data={editB.content}
                    defaultValue={editB.content}
                    onChange={
                        (event) => { 
                            editB.content = event.editor.getData();
                            store.dispatch(boatEdit(editB));
                        }
                    }
                    config={{
                    uiColor: '#cccccc',
                    }}
                    ref={register()}
                />
                {errors.name && <Alert key="service_edit_1" variant="danger">Пустое описание</Alert>}
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row>
              <Col>
                В наличии
                </Col>
              <Col xs={9}>
                <select
                  name="availability"
                  ref={register}
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  defaultValue={editB.availability}>
                  <option value={true}>В наличии</option>
                  <option value={false}>Нет в наличии</option>
                </select>
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row>
              <Col>
                Артикул
              </Col>
              <Col xs={9}>
                <FormControl
                  defaultValue={editB.artikul}
                  name="artikul"
                  ref={register({
                    validate: value => value.length > 1
                  })}
                />
                {errors.name && <Alert key="service_edit_1" variant="danger">Пустой артикул</Alert>}
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row>
              <Col>
                Цена
              </Col>
              <Col xs={9}>
                <FormControl
                    type="number"
                  defaultValue={editB.rubles}
                  name="rubles"
                  ref={register({
                    validate: value => value >= 0
                  })}
                />
                {errors.rubles && <Alert key="service_edit_1" variant="danger">Цена  - только больше 0</Alert>}
              </Col>
            </Row>
          </Container>

          <Button variant="primary" type="submit">Обновить</Button>
        </form>
      </div>
  )

}



const mapStateToProps = state => ({
  editB: state.boat.editBoat
});
export default connect(mapStateToProps)(EditBoat);