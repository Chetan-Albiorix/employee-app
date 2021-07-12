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

const BankDetail: React.FC = () => {
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Bank Detail</h2>
          <Grid container>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Bank Name"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Account Name"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Bank Account Number"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="IFSC Code"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Aadhaar Card Number"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="PAN CARD Number"
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

export default BankDetail
