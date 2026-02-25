import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSliceState {
  value: number;
  plateNumber:string;
  errorOccured:boolean,
  isRotating:boolean
}

const initialState: UserSliceState = {
  value: 0,
  plateNumber:"",
  errorOccured:false,
  isRotating:false
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
    },
    setYesErrorOccur:(state) => {
      state.errorOccured = true;
    },
    setNotErrorOccur:(state) => {
      state.errorOccured = false;
    },
    setTrueIsRotating:(state) => {
      state.isRotating = true;
    },
    setFalseIsRotating:(state) => {
      state.isRotating = false;
    }
  },
});

export const {setPlateNumber,clearPlateNumber,setYesErrorOccur,
  setNotErrorOccur,setTrueIsRotating,setFalseIsRotating 
} = userInputSlice.actions;
export default userInputSlice.reducer;