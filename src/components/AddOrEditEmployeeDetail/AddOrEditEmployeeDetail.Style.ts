import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import Stepper from '@material-ui/core/Stepper'

export const StepperContainer: any = styled(Grid)`
  border: 0px solid silver;
`

export const StepperStyle: any = styled(Stepper)`
  padding: 20px 0px 0px 0px !important;
  background-color: Snow !important;
`

export const StepperContainerFooter: any = styled.div`
  text-align: right;
  padding-right: 1%;
`

export const StepperContentWrapper: any = styled(
  Grid
)`
  border: 1px solid Snow;
  height: 450px;
  border: 1px solid white;
  // overflow: auto;
`
