import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getTodos } from '../modulues/todosSliceT'

function Thunk() {
  const dispatch = useDispatch();
  const {todos, isLoading, error} = useSelector(state => {
    return state.todosT
  })

  useEffect(()=> {
    dispatch(__getTodos())
  },[])

  if(isLoading) {
    return <div> 로딩 중... </div>
  }
  if (error) {
    return <div> {error.message}</div>
  }
  return (
    <div>
      <h3>Thunk로 중앙상태 제어하기 - AXIOS</h3>
      {todos.map(el => (
        <div key={el.id}>{el.id} : {el.title}</div>
      ))}
    </div>
  )
}

export default Thunk