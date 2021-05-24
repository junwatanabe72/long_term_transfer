import { TableRow } from '@material-ui/core'
import Cells from 'components/atoms/Cells'
import React from 'react'
import styled from 'styled-components'
import {
  acYear,
  longTerm,
  longTermYears,
  overTerm,
  overTermYears,
  shortTerm,
} from 'utils/constant'

interface Props {
  year: number
  state: number
  onClick: (num: number) => void
}

const TargetRow = styled(TableRow)`
  background-color: ${(props) => props.theme.palette.secondary.light};
`
const ShortTermRow = styled(TableRow)`
  background-color: ${(props) => props.theme.palette.warning.light};
`
const LongTermRow = styled(TableRow)`
  background-color: ${(props) => props.theme.palette.success.light};
`
const OverTermRow = styled(TableRow)`
  background-color: ${(props) => props.theme.palette.success.main};
`

const createYearCell = (
  num: number,
  state: number,
  onClick: (num: number) => void,
) => {
  const longTermPeriod = state + longTermYears
  const overTenTimes = longTermPeriod + overTermYears
  if (state === 0) {
    return (
      <TableRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} />
      </TableRow>
    )
  }
  if (state > num) {
    return (
      <TableRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} />
      </TableRow>
    )
  }
  if (state === num) {
    return (
      <TargetRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} value={acYear} isSelected={true} />
      </TargetRow>
    )
  }
  if (state < num && num < longTermPeriod) {
    return (
      <ShortTermRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} value={shortTerm} />
      </ShortTermRow>
    )
  }
  if (num >= longTermPeriod && num < overTenTimes) {
    return (
      <LongTermRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} value={longTerm} />
      </LongTermRow>
    )
  }
  if (num >= overTenTimes) {
    return (
      <OverTermRow
        onClick={() => {
          onClick(num)
        }}
      >
        <Cells num={num} value={overTerm} />
      </OverTermRow>
    )
  }
  return (
    <TableRow
      onClick={() => {
        onClick(num)
      }}
    >
      <Cells num={num} />
    </TableRow>
  )
}

const TableContents: React.FC<Props> = ({ year, state, onClick }) => {
  return createYearCell(year, state, onClick)
}
export default TableContents
