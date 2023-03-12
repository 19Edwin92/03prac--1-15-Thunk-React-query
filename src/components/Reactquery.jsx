import { queries } from '@testing-library/react'
import React, { useEffect } from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { addTodo, getTodos } from '../modulues/todosSliceQ'
import { __getTodos } from '../modulues/todosSliceT'


function Reactquery() {
  const {isLoading, isError, data} = useQuery("todos", getTodos)


  // REACT-QUERY: POST //////////////////////////////////////////////////
  const qureyClient = useQueryClient();
  // const mutation = useMutation(addTodo. {
  //   // 성공과 실패시를 테스트하기
  //   onSuccess: () => {
  //     qureyClient.invalidateQueries("todos")
  //     console.log("성공하였습니다.")
  //   }
  // })
  

  // View 부분 ///////////////////////////////////////////////////////////
  if(isLoading) {
    return <div> 로딩 중... </div>
  }
  if (isError) {
    return <div> 오류가 발생했습니다....</div>
  }

  return (
    <div>
      <h3>AXIOS - React-query로 중앙상태 제어하기</h3>
      <form>
        <input type="text" placeholder='제목을 입력하세요' style={{ width: "300px" }} />
        <button>추가하기</button>
      </form>
      <br />
      {data.map(el => (
        <div key={el.id}>{el.id} : {el.title}</div>
      ))}
    </div>
  )
}

export default Reactquery;