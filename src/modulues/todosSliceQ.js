import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getTodos = async () => {
  // const  response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  const response = await axios.get(`http://localhost:4002/todos`);
  console.log(response.data)

}

const initialState = {
  todos: [],
  isLoadgin: false,
  isError: false,
  error: null
}

const todosSlice = createSlice({
  name:"todosQ",
  initialState,
  reducers:{},
  extraReducers:{},
})

export default todosSlice.reducer;