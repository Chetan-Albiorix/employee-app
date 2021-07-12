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
import DatePicker from '../DatePicker/DatePicker'

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
                  <DatePicker
                    date={new Date()}
                    label="Joining Date"
                    disableFuture={true}
                    onDateChanged={() => {}}
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <DatePicker
                    date={new Date()}
                    label="Next Appraisal Date"
                    disableFuture={false}
                    onDateChanged={() => {}}
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
