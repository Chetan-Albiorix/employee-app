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
import PersonalDetailModal from '../../modals/PersonalDetailModal'
import DatePicker from '../DatePicker/DatePicker'
import FileUpload from '../FileUpload/FileUpload'

interface PersonalDetailProps {
  personalDetailState: PersonalDetailModal
}

const PersonalDetail: React.FC<any> = forwardRef(
  ({ personalDetailState }, ref) => {
    const [
      isCopyToPresentAddress,
      setIsCopyToPresentAddress,
    ] = useState<boolean>(false)

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
      setPersonalDetail(personalDetailTemp)
    }

    const changeCopyToPresentAddress = (
      isChecked: boolean
    ) => {
      if (isChecked) {
        const personalDetailTemp = {
          ...personalDetail,
        }
        personalDetailTemp.permanentAddress =
          personalDetailTemp.presentAddress
        setPersonalDetail(personalDetailTemp)
      }
      setIsCopyToPresentAddress(isChecked)
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
      fileName: string,
      imageSrc: string
    ) => {
      const personalDetailTemp = {
        ...personalDetail,
      }
      personalDetailTemp.image = {
        fileName,
        imageSrc,
      }
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
                    date={new Date()}
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
                          isCopyToPresentAddress
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
  }
)

export default PersonalDetail
