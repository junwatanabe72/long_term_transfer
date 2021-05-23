import 'date-fns'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import TableContents from 'components/organisms/TableContents'
import { TableCell } from '@material-ui/core'
import { arr } from 'utils/constant/top'
import { media } from 'utils/styled/media'

const StyledTableCell = styled(TableCell)`
  font-size: 1.2em;
  max-width: 33vw;
  background-color: ${(props) => props.theme.palette.grey[200]};
`
const StyledTableBody = styled(TableBody)`
  cursor: pointer;
`
const StyledTableContainer = styled(TableContainer)`
  max-height: 70vh;
  border-radius: 6px;
  ${media.phone`
  max-height: 60vh;  
      `}
`

const AppTable = () => {
  const [acquisitionYear, setAcquisitionYear] = React.useState<number>(0)

  const handleChange = (num: number) => {
    setAcquisitionYear(num)
  }
  // const reset = () => {
  //   setAcquisitionYear(0)
  // }
  return (
    <StyledTableContainer>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            {['西暦', '和暦', 'memo'].map((value) => (
              <StyledTableCell key={value} align="center" variant="head">
                {value}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <StyledTableBody>
          {arr.map((year) => (
            <TableContents
              key={year}
              year={year}
              state={acquisitionYear}
              onClick={handleChange}
            />
          ))}
        </StyledTableBody>
      </Table>
    </StyledTableContainer>
  )
}
export default AppTable
