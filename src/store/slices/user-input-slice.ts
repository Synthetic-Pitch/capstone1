import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSliceState {
  value: number;
  plateNumber:string;
}

const initialState: UserSliceState = {
  value: 0,
  plateNumber:"",
};

export const userInputSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPlateNumber:(state,action:PayloadAction<string>)=>{
        state.plateNumber = action.payload;
    },
    clearPlateNumber: (state) => {
        state.plateNumber = ""; // Optional: add clear function
    }
  },
});

export const {setPlateNumber,clearPlateNumber } = userInputSlice.actions;
export default userInputSlice.reducer;