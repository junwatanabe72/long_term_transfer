import 'date-fns'
import { Box } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { appTitle } from 'utils/constant/top'
import HowTo from 'components/organisms/HowTo'
import AppTable from 'components/organisms/AppTable'

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
      <img
        width="1"
        height="1"
        src="https://www16.a8.net/0.gif?a8mat=3HC8BL+AHGV2Y+2HOM+BS629"
        alt=""
      ></img>
    </Container>
  )
}
export default TopPage
