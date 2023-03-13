import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo, deleteTodo, getTodos } from '../modulues/todosSliceQ';
import ReactQueryEdit from './ReactQueryEdit'


function Reactquery() {
  // REACT-QUERY: GET //////////////////////////////////////////////////
  // useQuery 인자와 함께, 비동기 함수를 불러옵니다. 
  // 여기서 인자= useQueryKEY 라고 부르는데, 값이 변경될 때 다시 이를 불러주기 위해 설정합니다. 
  // 그런데 이 쿼리키는 고유해야 합니다. 
  const {isLoading, isError, data} = useQuery("todos", getTodos)
  const [inputValue, setInputValue] = useState({
    title:''
  })

  // REACT-QUERY: POST //////////////////////////////////////////////////
  // 상위컴포넌트에서 만든 QueryClientProvider 사용하기 위헤서는 이를 useQueryClient 를 선언해야 합니다. 
  const qureyClient = useQueryClient();
  const mutationadd = useMutation(addTodo, {
    //성공실패시를 설정해야 합니다. 
    // 사용자가 오해하지 않도록 적절항 오류처리를 해주어야 합니다. 
    // try, catch 또는 then, catch
    // 이를 위해서 11 줄에서  {isLoading, isError, data} 를 통해서 제어했습니다. 
    onSuccess: ()=> {
      // 어떤 걸 invalidateQueries 할 것인지
      qureyClient.invalidateQueries('todos') // 
    },
    onError: err => {
      console.log("글을 저장하지 못했습니다.")
    }
     
  })
  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutationadd.mutate(inputValue)
    setInputValue({title:''})
  }
  // REACT-QUERY: POST ⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧

  // REACT-QUERY: DELETE //////////////////////////////////////////////////
  const mutationDelete = useMutation(deleteTodo, {

    onSuccess: ()=> {
      qureyClient.invalidateQueries('todos') // 
    },
    onError: err => {
      console.log("글을 저장하지 못했습니다.")
    }
  })

  const onDeleteHandler = id => {
    mutationDelete.mutate(id)
  }
  // REACT-QUERY: DELETE ⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧

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
      <form onSubmit={onSubmitHandler}>
        <input 
            type="text" 
            placeholder='제목을 입력하세요'
            style={{ width: "300px" }}
            value={inputValue.title}
            onChange={e=> setInputValue({title:e.target.value})}/>
        <button>추가하기</button>
      </form>
      <br />
      {data.map(el => (
        <div key={el.id}>
          <button onClick={()=> onDeleteHandler(el.id)}>삭제하기</button>
          <ReactQueryEdit el={el}/>
        </div>
      ))}
    </div>
  )
}

export default Reactquery; 