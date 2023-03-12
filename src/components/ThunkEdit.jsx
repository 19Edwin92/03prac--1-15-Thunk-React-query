import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { __getTodos, __updateTodos } from '../modulues/todosSliceT';

function ThunkEdit({el}) {
  const [edit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState({
    title:""
  })

  const dispatch = useDispatch();
  const onEidtTodoshandler = async (id, {title})=> {
    // console.log(id, title)
    await dispatch(__updateTodos([id, title]))
    await dispatch(__getTodos());
    setInputValue({
      title:""
    })
  }

  return (
    <>
      <button onClick={()=> setEdit(!edit)}>{edit ? "확인하기" : "수정하기"}</button>
      {edit ? (<form
                  style={{display:'inline-block'}}
                  onSubmit={(e)=> {
                    e.preventDefault();
                    onEidtTodoshandler(el.id, inputValue)}}>
                  <input
                    type="text"
                    value={inputValue.title}
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

export default ThunkEdit