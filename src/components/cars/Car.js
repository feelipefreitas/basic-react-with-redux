import React from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../../actions/CarsAction';

class Car extends React.Component {
    
    render() {
        const { name } = this.props.car;
        return(
            <div>
                <p>{ name }</p>
                <button onClick={() => this.props.selectCar(this.props.car)}>Details</button>
            </div>
        );
    };
}

export default connect(null, { selectCar })(Car);
