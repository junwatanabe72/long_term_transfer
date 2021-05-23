import React from 'react'
import { TableCell } from '@material-ui/core'
import styled from 'styled-components'
import { firstR, lastH, wareki, yearChar } from 'utils/constant/top'

interface Props {
  num: number
  isSelected?: boolean
  value?: string
}

const StyledTableCell = styled(TableCell)<{
  isSelected: Props['isSelected']
}>`
  font-size: 1em;
  max-width: 33vw;
  color: ${(props) =>
    props.isSelected
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
`
const Cell = (value: string, isSelected: boolean) => {
  return (
    <StyledTableCell component="th" align="center" isSelected={isSelected}>
      {value}
    </StyledTableCell>
  )
}

const Cells: React.FC<Props> = ({ num, value = '', isSelected = false }) => {
  const warekiYear = wareki(num)
  return (
    <>
      {Cell(`${num}${yearChar}`, isSelected)}
      {Cell(
        `${warekiYear}
        ${warekiYear === lastH ? `(${firstR})` : ''}`,
        isSelected,
      )}
      {Cell(value, isSelected)}
    </>
  )
}
export default Cells
