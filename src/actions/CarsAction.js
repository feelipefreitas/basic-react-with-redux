export const selectCar = car => {
    console.log("action!");
    return {type: 'CAR_SELECTED', payload: car};
};