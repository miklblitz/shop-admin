import React from 'react';
import Button from 'react-bootstrap/Button';
import { reset } from '../../redux/boat/boat.actions';
import { connect } from 'react-redux';
import ResetBoat from '../../actions/reset-boat.action';

class EditBoat extends React.Component {

    resetButton() {
        const {reset} = this.props;
        reset();
    }

    render() {
        return(
            <div>
                <h1>Редактирование лодок</h1>
                <Button variant="primary" onClick={() => {this.resetButton()}} className="ml-1">Назад</Button>

                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(reset())
});

export default connect(null, mapDispatchToProps)(EditBoat);