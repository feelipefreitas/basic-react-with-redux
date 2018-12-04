import React from 'react';
import { connect } from 'react-redux';

class CarDetails extends React.Component {

    render() {
        
        if(!this.props.car) return <div>Select a car!</div>

        const { id, name, velocity } = this.props.car;

        return(
            <div>
                <p>Car's Id: { id }</p>
                <p>Car's name: { name }</p>
                <p>Car's velocity: { velocity }</p>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {car: state.selectedCar}
};

export default connect(mapStateToProps)(CarDetails);