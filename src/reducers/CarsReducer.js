const state = {
    cars: [
        { id:  1, name: 'Lamborguini ', velocity: '180km/h' },
        { id:  2, name: 'Camarro ', velocity: '80km/h' },
        { id:  3, name: 'Skyline ', velocity: '200km/h' },
        { id:  4, name: 'Ferrari', velocity: '150km/h' },
    ],
    selectedCar: null
}

export const listCarsReducer = () => {
    return [...state.cars];
};

export const selectCarReducer = (selectedCar = state.selectedCar, action) => {
    switch(action.type) {
        case 'CAR_SELECTED': 
            return action.payload;
        default: 
            return selectedCar;
    }
};