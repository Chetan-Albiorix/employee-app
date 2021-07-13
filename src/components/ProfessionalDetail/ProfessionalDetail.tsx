import {
  Box,
  Grid,
  TextField,
} from '@material-ui/core'
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
import FileUpload from '../FileUpload/FileUpload'
import ProfessionalDetailModal from '../../modals/ProfessionalDetailModal'
import { FileModal } from '../../modals/FileModal'

interface ProfessionalDetailProps {
  professionalDetailState: ProfessionalDetailModal
  ref: any
}

const ProfessionalDetail: React.FC<ProfessionalDetailProps> =
  forwardRef(
    ({ professionalDetailState }, ref) => {
      const pdfMimeType: string[] = [
        'application/pdf',
      ]

      const [
        professionalDetail,
        setProfessionalDetail,
      ] = useState<ProfessionalDetailModal>(
        professionalDetailState
      )

      const updateProfessionalDetail = (
        value: string,
        propertyName: string
      ) => {
        const professionalDetailTemp = {
          ...professionalDetail,
        }
        ;(professionalDetailTemp as any)[
          propertyName
        ] = value
        setProfessionalDetail(
          professionalDetailTemp
        )
      }

      const updateResume = (
        fileObject: FileModal
      ) => {
        const professionalDetailTemp = {
          ...professionalDetail,
        }
        professionalDetailTemp.resumeFile =
          fileObject
        setProfessionalDetail(
          professionalDetailTemp
        )
      }

      useImperativeHandle(
        ref,
        () => ({
          getProfessionalDetailState: () => {
            return professionalDetail
          },
        }),
        [professionalDetail]
      )

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
                      value={
                        professionalDetail.designation
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'designation'
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Department"
                      fullWidth
                      value={
                        professionalDetail.department
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'department'
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Experience"
                      fullWidth
                      value={
                        professionalDetail.experience
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'experience'
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Current Location"
                      fullWidth
                      value={
                        professionalDetail.currentLocation
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'currentLocation'
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Technologies"
                      fullWidth
                      value={
                        professionalDetail.technologies
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'technologies'
                        )
                      }
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Skills"
                      fullWidth
                      value={
                        professionalDetail.skills
                      }
                      onChange={(event) =>
                        updateProfessionalDetail(
                          event.target.value,
                          'skills'
                        )
                      }
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
                    <FileUpload
                      label="Resume"
                      mimeType={pdfMimeType}
                      file={
                        professionalDetail.resumeFile
                      }
                      onChangeFile={updateResume}
                    />
                  </Box>
                </Grid>
              </Grid>
            </PaperWrapper>
          </StepperContainerWrapper>
        </>
      )
    }
  )

export default ProfessionalDetail
