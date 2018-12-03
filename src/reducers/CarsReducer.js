const state = {
    cars: [
        { name: 'Lamborguini ', velocity: '180km/h' },
        { name: 'Camarro ', velocity: '80km/h' },
        { name: 'Skyline ', velocity: '200km/h' },
        { name: 'Ferrari', velocity: '150km/h' },
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