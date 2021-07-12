import {
  Grid,
  Paper,
  TableContainer,
} from '@material-ui/core'
import styled from 'styled-components'

export const StepperContainerWrapper: any = styled.div`
  margin: 15px;
  border: 0px solid white;
`
export const PaperWrapper: any = styled(Paper)`
  position: 'relative';
  margin-left: 3%;
  margin-right: 3%;
  width: 95%;
  padding-bottom: 10px;
`

export const ContentRightAlignment: any = styled(
  Grid
)`
  text-align: right;
  padding-right: 1%;
`

export const TableWrapper: any = styled(Grid)`
  padding: 1%;
`
export const TableHeadWrapper: any = styled(
  TableContainer
)`
  box-shadow: 0px;
`
