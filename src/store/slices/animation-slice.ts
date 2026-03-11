import { createSlice} from '@reduxjs/toolkit';

interface AnimationSliceState {
    triggerAboutUsAnimation:boolean,
}
const initialState:AnimationSliceState = {
    triggerAboutUsAnimation:false,
}

export const animationSlice = createSlice({
    name:"animation",
    initialState,
    reducers:{
        setTriggerAboutUsAnimation : (state: typeof initialState) => {
            state.triggerAboutUsAnimation = true;
        },
        setNotTriggerAboutUsAnimation : (state: typeof initialState) => {
            state.triggerAboutUsAnimation = false;
        }
    }
})

export const {setTriggerAboutUsAnimation,setNotTriggerAboutUsAnimation} = animationSlice.actions;
export default animationSlice.reducer;