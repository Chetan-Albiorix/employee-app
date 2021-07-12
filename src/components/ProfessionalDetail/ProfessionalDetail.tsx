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
import FileUpload from '../FileUpload/FileUpload'

const ProfessionalDetail: React.FC = () => {
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Professional Detail</h2>
          <Grid container>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Designation"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Department"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Experience"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Current Location"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Technologies"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                <TextField
                  id="standard-disabled"
                  label="Skills"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box mx={3} my={1}>
                {/* <TextField
                  id="standard-disabled"
                  label="Upload Resume"
                  fullWidth
                /> */}
                <FileUpload label="Resume" />
              </Box>
            </Grid>
          </Grid>
        </PaperWrapper>
      </StepperContainerWrapper>
    </>
  )
}

export default ProfessionalDetail
