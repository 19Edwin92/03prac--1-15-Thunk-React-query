import React from 'react'
import Thunk from '../components/Thunk'
import Reactquery from '../components/Reactquery'

function TDMain() {
  return (
    <div>
      <h1>Thunk와 React-query 비교하기</h1>  
        <hr/>
        <Thunk />
        <hr/>
        <Reactquery />
        <hr/>
    </div>
  )
}

export default TDMain;