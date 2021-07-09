import {
  Box,
  Grid,
  TextField,
} from '@material-ui/core'
import React from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'

const CurrentOrganizationDetail: React.FC =
  () => {
    return (
      <>
        <StepperContainerWrapper>
          <PaperWrapper>
            <h2>Current Organization Detail</h2>
            <Grid container>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Joining Date"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Next Appraisal Date"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Current CTC"
                    fullWidth
                  />
                </Box>
              </Grid>
            </Grid>
          </PaperWrapper>
        </StepperContainerWrapper>
      </>
    )
  }

export default CurrentOrganizationDetail
