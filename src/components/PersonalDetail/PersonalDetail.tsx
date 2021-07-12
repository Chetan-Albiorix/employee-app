import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@material-ui/core'
import React from 'react'
import {
  StepperContainerWrapper,
  PaperWrapper,
} from '../../common/Global.Style'
import DatePicker from '../DatePicker/DatePicker'
import FileUpload from '../FileUpload/FileUpload'

const PersonalDetail: React.FC = () => {
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Personal Detail</h2>
          <Grid container>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="First Name"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Middle Name"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Last Name"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Email"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Mobile Number"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Contact Number"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <DatePicker
                  date={new Date()}
                  label="Birth Date"
                  disableFuture={true}
                  onDateChanged={() => {}}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <FileUpload label="Image" />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-multiline-static"
                  label="Present Address"
                  multiline
                  rows={4}
                  fullWidth
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      onChange={() => {}}
                      name="copyAddress"
                      color="primary"
                    />
                  }
                  label="Copy to permanent address"
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-multiline-static"
                  label="Permanent Address"
                  multiline
                  rows={4}
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

export default PersonalDetail
