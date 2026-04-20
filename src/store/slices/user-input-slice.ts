import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSliceState {
  value: number;
  plateNumber:string;
  errorOccured:boolean,
  isRotating:boolean,
  violation_list:string[],
  vehicle_color:string,
  vehicle_type:string,
  vehicle_model:string,
  driver_name:string,
  driver_address:string,
  transaction_status:string
}

const initialState: UserSliceState = {
  value: 0,
  plateNumber:"",
  errorOccured:false,
  isRotating:false,
  violation_list:[],
  vehicle_color:"",
  vehicle_type:"",
  vehicle_model:"",
  driver_name:"",
  driver_address:"",
  transaction_status:""
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
    },
    // This is dispatchers to the data we display to profile page
    violation_list:(state,action:PayloadAction<string[]>) => {
      state.violation_list = action.payload;
    },
    vehicle_color:(state,action:PayloadAction<string>) => {
      state.vehicle_color = action.payload;
    },
    vehicle_type:(state,action:PayloadAction<string>) => {
      state.vehicle_type = action.payload;
    },
    vehicle_model:(state,action:PayloadAction<string>) => {
      state.vehicle_model = action.payload;
    },
    driver_name:(state,action:PayloadAction<string>) => {
      state.driver_name = action.payload;
    },
    driver_address:(state,action:PayloadAction<string>) => {
      state.driver_address = action.payload;
    },
    transaction_status:(state,action:PayloadAction<string>) => {
      state.transaction_status = action.payload;
    }
  },
});

export const {setPlateNumber,clearPlateNumber,setYesErrorOccur,
  setNotErrorOccur,setTrueIsRotating,setFalseIsRotating,violation_list,vehicle_color,vehicle_type,vehicle_model,driver_name,driver_address,transaction_status
} = userInputSlice.actions;
export default userInputSlice.reducer;