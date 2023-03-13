import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { patchTodo } from '../modulues/todosSliceQ';
import { __getTodos, __updateTodos } from '../modulues/todosSliceT';

function ReactQueryEdit({el}) {
  const [edit, setEdit] = useState(false)
  const [{title}, setInputValue] = useState({
    title:""
  })

  // REACT-QUERY: PATCH //////////////////////////////////////////////////
  const qureyClient = useQueryClient();
  const mutationPatch = useMutation(patchTodo, {

    onSuccess: ()=> {
      qureyClient.invalidateQueries('todos') // 
    },
    onError: err => {
      console.log("글을 저장하지 못했습니다.")
    }
  })
  const onEdithandler = e => {
    e.preventDefault();
    mutationPatch.mutate([el.id, title])
    setInputValue({title:''})
    setEdit(!edit)
  }


  return (
    <>
      <button onClick={()=> setEdit(!edit)}>{edit ? "확인하기" : "수정하기"}</button>
      {edit ? (<form
                  style={{display:'inline-block'}}
                  onSubmit={onEdithandler}>
                  <input
                    type="text"
                    value={title}
                    onChange={e =>
                      setInputValue({
                        title: e.target.value
                      })} />
               </form>
            ): 
            <> {el.id} : {el.title}</>}
    </>
  )
}

export default ReactQueryEdit;