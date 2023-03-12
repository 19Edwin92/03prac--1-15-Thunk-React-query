import { createSlice } from "@reduxjs/toolkit";
// ${process.env.REACT_APP_SERVER_KEY}

// AXIOS.GET 코드 부분  /////////////////////////////////////////////////////////////////
import axios, { Axios } from "axios";
export const getTodos = async () => {
  // const  response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
  const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`);
  // console.log(response.data)
  return response.data
}

// AXIOS.POST 코드 부분  /////////////////////////////////////////////////////////////////
export const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_KEY}/todos`, newTodo)
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