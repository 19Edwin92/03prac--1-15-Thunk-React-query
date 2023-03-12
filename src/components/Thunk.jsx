import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getTodos,__postTodos,__deleteTodos } from '../modulues/todosSliceT'
import ThunkEdit from './ThunkEdit';

function Thunk() {
  const dispatch = useDispatch();
  const {todos, isLoading, error} = useSelector(state => {
    return state.todosT
  })

  // GET 방식의 서버 소통 ////////////////////////////////////////
  useEffect(()=> {
    dispatch(__getTodos())
  },[])

  // INPUT 관련 부분  //////////////////////////////////////////
  // POST 방식의 서버 소통 ///////////////////////////////////////
  const [inputValue, setInputValue] = useState({
    title:""
  })
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(__postTodos(inputValue));
    await dispatch(__getTodos());
    setInputValue({title: ''})
  }

  // DELETE 방식의 서버 소통 ////////////////////////////////////
  const onDeleteButtonHandler = async (id)=> {
    await dispatch(__deleteTodos(id))
    await dispatch(__getTodos());
  }

  // PATCH 방식의 서버 소통 ////////////////////////////////////
  const [edit, setEdit] = useState(false)

  // View 부분 ///////////////////////////////////////////////////////////
  if(isLoading) {
    return <div> 로딩 중... </div>
  }
  if (error) {
    return <div> {error.message}</div>
  }
  return (
    <div>
      <h3>AXIOS - Thunk로 중앙상태 제어하기</h3>
      <form onSubmit={onSubmitHandler}>
        <input 
            type="text" 
            placeholder='제목을 입력하세요' 
            style={{ width: "300px" }} 
            value={inputValue.title}
            onChange={e=> setInputValue({title: e.target.value})}/>
        <button>추가하기</button>
      </form>
      <br />
      {/* {todos.map(el => (
        <div key={el.id}>{el.id} : {el.title}</div>
      ))} */}
      {todos.map(el => (
        <div key={el.id}>
          <button onClick={()=>onDeleteButtonHandler(el.id)}>삭제하기</button>
          <ThunkEdit el={el} />
        </div>  
      ))}
    </div>
  )
}

export default Thunk