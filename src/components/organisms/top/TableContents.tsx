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
const TARGET = 'target'
type RowTypes = typeof TARGET | 'plain' | 'shortTerm' | 'longTerm' | 'overTerm'
const getType = (state: number, num: number): RowTypes => {
  const longTermPeriod = state + longTermYears
  const overTenTimes = longTermPeriod + overTermYears
  if (state === num) {
    return TARGET
  }
  if (state === 0 || num < state) {
    return 'plain'
  }
  if (num < longTermPeriod) {
    return 'shortTerm'
  }
  if (num < overTenTimes) {
    return 'longTerm'
  }
  return 'overTerm'
}
const values = {
  target: acYear,
  plain: '',
  shortTerm,
  longTerm,
  overTerm,
}
const components = {
  target: TargetRow,
  plain: TableRow,
  shortTerm: ShortTermRow,
  longTerm: LongTermRow,
  overTerm: OverTermRow,
}

const TableContents: React.FC<Props> = ({ year, state, onClick }) => {
  const _onClick = () => onClick(year)
  const type = getType(state, year)
  const isSelected = type === TARGET
  const value = values[type as RowTypes]
  const Component = components[type as RowTypes]
  return (
    <Component onClick={_onClick}>
      <Cells num={year} value={value} isSelected={isSelected} />
    </Component>
  )
}
export default TableContents
