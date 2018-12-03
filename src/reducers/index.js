import { combineReducers } from 'redux';
import { listCarsReducer, selectCarReducer } from './CarsReducer';

export default combineReducers({
    listCars: listCarsReducer,
    selectedCar: selectCarReducer
});