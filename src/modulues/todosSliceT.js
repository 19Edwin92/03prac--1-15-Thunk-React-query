import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ${process.env.REACT_APP_SERVER_KEY}

// #01 axios.GET ///////////////////////////////////////////////////////////////////////////
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPi)=> {
    try {
      const response = await axios.get(`http://localhost:4002/todos`);
      // const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}`)
      console.log(response.data);
      return thunkAPi.fulfillWithValue(response.data);
    }
    catch (error) {
      console.log('error', error);
      return thunkAPi.rejectWithValue(error);
    }
  }
);

// ${process.env.REACT_APP_SERVER_KEY}
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null
}

const todosSlice = createSlice({
  name:"todosT",
  initialState,
  reducers:{},
  extraReducers:{
  // #01-01 axios.GET // isLoading   ///////////////////////////////////////////////////////  
  [__getTodos.pending] : (state, actions)=> {
    state.isLoading = true;
    state.isError = false;
  },
  // #01-02 axios.GET // fulfilled   ///////////////////////////////////////////////////////
  [__getTodos.fulfilled] : (state, actions) =>{
    state.isLoading = false;
    state.isError = false;
    state.todos = actions.payload
  },
  // #01-03 axios.GET // isError   ///////////////////////////////////////////////////////
  [__getTodos.rejected] : (state, actions)=> {
    state.isLoading = false;
    state.isError = true
  }
  },
})

export const {} = todosSlice.actions;
export default todosSlice.reducer;