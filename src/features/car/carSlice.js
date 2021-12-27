import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ['Model S',"MOdel 3","Model X","Model Y"]
}

const carslice = createSlice({
    name: "car",
    initialState,
    reducer:{}
})

export const selectCars = state => state.car.cars

export default carslice.reducer

