import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import { appTitle, ninjaID } from 'utils/constant'
import HowTo from 'components/organisms/top/HowTo'
import AppTable from 'components/organisms/top/AppTable'
import AdmaxSwitch from 'components/templetes/Ninja'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const TopPage: React.FC = () => {
  return (
    <StyledContainer>
      <Box pt={3}>
        <h1>{appTitle}</h1>
      </Box>
      <Box p={2}>
        <HowTo />
      </Box>
      <AppTable />
      <Box mt={2}>
        <AdmaxSwitch id={ninjaID} />
      </Box>
    </StyledContainer>
  )
}
export default TopPage
