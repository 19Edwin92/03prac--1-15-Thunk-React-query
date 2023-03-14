import React from 'react'
import Thunk from '../components/Thunk'
import { QueryClient, QueryClientProvider } from 'react-query'
import Reactquery from '../components/Reactquery'

const queryClient = new QueryClient()
// https://sso-feeling.tistory.com/738 ////////////////////////////////////////////////
// QueryClient() 는 하나의 컴포넌트만 감싸야 한다. 그렇지 않으면 동작하지 않는다. 

function TDMain() {
  // 하위 컴포넌트에서 값이 변경되었을 때 하위컴포넌트가 리렌더링되도록 
  
  return (
    <div>
      <h1>Thunk와 React-query 비교하기</h1>  
        <hr/>
        <Thunk />
        <hr/>
        <QueryClientProvider client={queryClient}>
           <Reactquery />
        </QueryClientProvider>
        <hr/>
    </div>
  )
}

export default TDMain;