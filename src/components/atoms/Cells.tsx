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

const StyledTableCell = styled(TableCell)<{
  isSelected: Props['isSelected']
}>`
  font-size: 1em;
  max-width: 33vw;
  color: ${({ isSelected, ...props }) =>
    isSelected
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
  ${media.phone`
  font-size: 0.em;
      `}
`
const Cell = (value: string, isSelected: Props['isSelected']) => {
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
