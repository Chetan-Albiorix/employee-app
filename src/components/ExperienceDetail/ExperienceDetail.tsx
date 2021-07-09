import { Grid } from '@material-ui/core'
import React from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'

const ExperienceDetail: React.FC = () => {
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Experience Detail</h2>
          <Grid container>
            <Grid xs={12}> &nbsp;</Grid>
          </Grid>
        </PaperWrapper>
      </StepperContainerWrapper>
    </>
  )
}

export default ExperienceDetail
