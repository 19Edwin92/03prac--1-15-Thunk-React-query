import { configureStore } from "@reduxjs/toolkit";
import todosT from "../modulues/todosSliceT";
import todosQ from "../modulues/todosSliceQ";

const store = configureStore({
  reducer: {
    // todosT : thunk 로 제어하는 중앙상태관리소
    // todosQ : React-query 로 제어하는 중앙상태관리소
    todosT, todosQ
  },
  devTools: process.env.NODE_ENV === 'developmetns' ? false : true
  // devTools: false;
  // https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/
  // yarn add redux-devtools-extension
  // https://ui.toast.com/weekly-pick/ko_20191212
  // development 환경에서만 redux devtool이 활성화 되도록 처리합니다.


});

export default store;