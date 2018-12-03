import React from 'react';
import { CarsList } from './cars/CarsList';

export class App extends React.Component {
    render() {
        return(
            <div>
                <CarsList />
            </div>
        );
    };
}