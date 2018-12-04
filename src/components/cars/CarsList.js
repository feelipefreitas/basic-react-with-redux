import React from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../../actions/CarsAction';
import  Car  from './Car';

class CarsList extends React.Component {

    renderCars = () => this.props.cars.map(car => {
        return <Car key={ car.id } car={ car } />
        // return  <ul key={car.name}>
        //             {car.name}
        //             <button onClick={() => this.props.selectCar(car)}>Detalhes</button>
        //         </ul>
    });
    
    render() {
        return(
            <div>
                <ul>
                    { this.renderCars() }
                </ul>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { cars: state.listCars };
};

export default connect(mapStateToProps, { selectCar })(CarsList);