import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSliceState {
  value: number;
  plateNumber:string;
  errorOccured:boolean
}

const initialState: UserSliceState = {
  value: 0,
  plateNumber:"",
  errorOccured:false
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
      state.errorOccured = true
    },
    setNotErrorOccur:(state) => {
      state.errorOccured = false
    }
  },
});

export const {setPlateNumber,clearPlateNumber,setYesErrorOccur,setNotErrorOccur } = userInputSlice.actions;
export default userInputSlice.reducer;