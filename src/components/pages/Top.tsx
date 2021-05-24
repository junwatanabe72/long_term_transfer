import 'date-fns'
import { Box } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { appTitle, ninjaID } from 'utils/constant'
import HowTo from 'components/organisms/HowTo'
import AppTable from 'components/organisms/AppTable'
import AdmaxSwitch from 'components/atoms/Ninja'
// import Ad from '../atoms/Ad'

const TopPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box pt={3}>
        <h1>{appTitle}</h1>
      </Box>
      <Box p={2}>
        <HowTo />
      </Box>
      <AppTable />
      <AdmaxSwitch id={ninjaID} />
      {/* <Ad /> */}
    </Container>
  )
}
export default TopPage
