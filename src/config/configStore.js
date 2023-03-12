import { configureStore } from "@reduxjs/toolkit";
import todosT from "../modulues/todosSliceT";
import todosQ from "../modulues/todosSliceQ";

const store = configureStore({
  reducer: {
    // todosT : thunk 로 제어하는 중앙상태관리소
    // todosQ : React-query 로 제어하는 중앙상태관리소
    todosT, todosQ
  }
});

export default store;