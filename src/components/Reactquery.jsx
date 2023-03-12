import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function Reactquery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h3>React-query로 중앙상태 제어하기 - AXIOS</h3>
      </div>
    </QueryClientProvider>
  )
}

export default Reactquery