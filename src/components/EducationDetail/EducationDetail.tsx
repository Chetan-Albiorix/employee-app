import { Grid } from '@material-ui/core'
import React from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
// import AddIcon from '@material-ui/icons/Add'

const EducationDetail: React.FC = () => {
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Education Detail</h2>
          <Grid container>
            <Grid xs={12}>
              {/* <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddIcon />}
              >
                Add Education
              </Button> */}
            </Grid>
          </Grid>
        </PaperWrapper>
      </StepperContainerWrapper>
    </>
  )
}

export default EducationDetail
