import React from 'react';
import { Car } from './Car';

export class CarsList extends React.Component {
    render() {
        return(
            <div>
                <Car />
                <Car />
                <Car />
                <Car />
            </div>
        );
    };
}