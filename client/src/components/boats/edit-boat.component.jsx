import React from 'react';
import Button from 'react-bootstrap/Button';
import { reset } from '../../redux/boat/boat.actions';
import { connect } from 'react-redux';
import ResetBoat from '../../actions/reset-boat.action';
import useForm from 'react-hook-form';
import { Row, Col, Container } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const EditBoat = ({editBoat}) => {

  // console.log(editBoat);
  
  //console.log(reset());
  const { register, handleSubmit, errors } = useForm();

  const ajax = data => new Promise((resolve, reject) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    axios
      .put(
        process.env.REACT_APP_BACKEND + '/goods/' + editBoat.id,
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
  
  const onSubmit = async(editBoat) => {
    console.log(editBoat);
    await ajax(editBoat);
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
                  defaultValue={editBoat.name}
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
                <FormControl
                  placeholder="Описание"
                  defaultValue={editBoat.content}
                  name="content"
                  as="textarea"
                  ref={register({
                    validate: value => value.length > 1
                  })}
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
                  defaultValue={editBoat.availability}>
                  <option value="true">Активный</option>
                  <option value="false">Закрытый</option>
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
                  defaultValue={editBoat.artikul}
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
                  defaultValue={editBoat.rubles}
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


const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(reset())
});

const mapStateToProps = state => ({
  editBoat: state.boat.editBoat
});
export default connect(mapStateToProps, mapDispatchToProps)(EditBoat);