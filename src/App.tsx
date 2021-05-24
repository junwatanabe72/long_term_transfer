import React from 'react'
import styled from 'styled-components'
import Top from 'components/pages/Top'

const ReactApp = styled.div`
  text-align: center;
  // height: 100vh;
`
const App: React.FC = () => {
  return (
    <ReactApp>
      <Top />
    </ReactApp>
  )
}

export default App
