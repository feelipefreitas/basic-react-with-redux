import React from 'react';
import CarsList from './cars/CarsList';
import CarDetails from './cars/CarDetails';

export class App extends React.Component {
    render() {
        return(
            <div>
                <CarsList />
                <CarDetails />
            </div>
        );
    };
}