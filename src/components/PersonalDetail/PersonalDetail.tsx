import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@material-ui/core'
import React, {
  forwardRef,
  useImperativeHandle,
} from 'react'
import { useState } from 'react'
import {
  StepperContainerWrapper,
  PaperWrapper,
} from '../../common/Global.Style'
import { FileModal } from '../../modals/FileModal'
import PersonalDetailModal from '../../modals/PersonalDetailModal'
import DatePicker from '../DatePicker/DatePicker'
import FileUpload from '../FileUpload/FileUpload'

export interface PersonalDetailProps {
  personalDetailState: PersonalDetailModal
  ref: any
}

const PersonalDetail: React.FC<PersonalDetailProps> =
  forwardRef(({ personalDetailState }, ref) => {
    const imageMimeType: string[] = [
      'image/png',
      'image/jpeg',
    ]

    const [personalDetail, setPersonalDetail] =
      useState<PersonalDetailModal>(
        personalDetailState
      )

    const updatePersonalDetail = (
      value: string,
      propertyName: string
    ) => {
      const personalDetailTemp = {
        ...personalDetail,
      }
      ;(personalDetailTemp as any)[propertyName] =
        value
      if (
        personalDetailTemp.isCopyToPresentAddress &&
        propertyName === 'presentAddress'
      ) {
        personalDetailTemp.permanentAddress =
          personalDetailTemp.presentAddress
      }
      setPersonalDetail(personalDetailTemp)
    }

    const changeCopyToPresentAddress = (
      isChecked: boolean
    ) => {
      const personalDetailTemp: PersonalDetailModal =
        {
          ...personalDetail,
        }
      if (isChecked) {
        personalDetailTemp.permanentAddress =
          personalDetailTemp.presentAddress
      }
      personalDetailTemp.isCopyToPresentAddress =
        isChecked
      setPersonalDetail(personalDetailTemp)
    }

    const updateBirthDate = (
      date: Date | null
    ) => {
      const personalDetailTemp = {
        ...personalDetail,
      }
      personalDetailTemp.birthday = date
      setPersonalDetail(personalDetailTemp)
    }

    const updateImage = (
      fileObject: FileModal
    ) => {
      const personalDetailTemp = {
        ...personalDetail,
      }
      personalDetailTemp.image = fileObject
      setPersonalDetail(personalDetailTemp)
    }

    useImperativeHandle(
      ref,
      () => ({
        getPersonalDetailState: () => {
          return personalDetail
        },
      }),
      [personalDetail]
    )

    return (
      <>
        <StepperContainerWrapper>
          <PaperWrapper>
            <h2>Personal Detail</h2>
            <Grid container>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="First Name"
                    value={
                      personalDetail.firstName
                    }
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'firstName'
                      )
                    }
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="Middle Name"
                    value={
                      personalDetail.middleName
                    }
                    fullWidth
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'middleName'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="Last Name"
                    value={
                      personalDetail.lastName
                    }
                    fullWidth
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'lastName'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="Email"
                    value={personalDetail.email}
                    fullWidth
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'email'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    value={
                      personalDetail.mobileNumber
                    }
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'mobileNumber'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={4}>
                <Box mx={3} my={1}>
                  <TextField
                    label="Contact Number"
                    fullWidth
                    value={
                      personalDetail.contactNumber
                    }
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'contactNumber'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <DatePicker
                    date={
                      personalDetail.birthday
                        ? personalDetail.birthday
                        : new Date()
                    }
                    label="Birth Date"
                    disableFuture={true}
                    onDateChanged={(
                      date: Date | null
                    ) => {
                      updateBirthDate(date)
                    }}
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <FileUpload
                    label="Image"
                    fileType="image"
                    fileSupportMsg="Only JPG OR PNG file are allowed."
                    mimeType={imageMimeType}
                    file={personalDetail.image}
                    onChangeFile={updateImage}
                  />
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
                    value={
                      personalDetail.presentAddress
                    }
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'presentAddress'
                      )
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          personalDetail.isCopyToPresentAddress
                        }
                        onChange={(event) =>
                          changeCopyToPresentAddress(
                            event.target.checked
                          )
                        }
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
                    value={
                      personalDetail.permanentAddress
                    }
                    onChange={(event) =>
                      updatePersonalDetail(
                        event.target.value,
                        'permanentAddress'
                      )
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </PaperWrapper>
        </StepperContainerWrapper>
      </>
    )
  })

export default PersonalDetail
