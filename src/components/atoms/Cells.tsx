import React from 'react'
import { TableCell } from '@material-ui/core'
import styled from 'styled-components'
import { firstR, lastH, wareki, yearChar } from 'utils/constant'
import { media } from 'utils/styled/media'

interface Props {
  num: number
  isSelected?: boolean
  value?: string
}

const StyledTableCell = styled(TableCell)`
  font-size: 1em;
  max-width: 33vw;
  color: ${(props) => props.theme.palette.common.white};
  ${media.phone`
  font-size: 0.em;
      `}
`

const ExtendedStyledTableCell = styled(StyledTableCell)`
  color: ${(props) => props.theme.palette.common.black};
`

const Cell = (value: string, isSelected: Props['isSelected']) => {
  return (
    <>
      {isSelected ? (
        <StyledTableCell component="th" align="center">
          {value}
        </StyledTableCell>
      ) : (
        <ExtendedStyledTableCell component="th" align="center">
          {value}
        </ExtendedStyledTableCell>
      )}
    </>
  )
}

const Cells: React.FC<Props> = ({ num, value = '', isSelected = false }) => {
  const warekiYear = wareki(num)
  const seirekiText = `${num}${yearChar}`
  const warekiText = `${warekiYear}${warekiYear === lastH ? `(${firstR})` : ''}`
  const other = value
  return (
    <>
      {Cell(seirekiText, isSelected)}
      {Cell(warekiText, isSelected)}
      {Cell(other, isSelected)}
    </>
  )
}
export default Cells
