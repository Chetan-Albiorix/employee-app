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
import InputField from '../InputField/InputField'

export interface PersonalDetailProps {
  personalDetailState: PersonalDetailModal
  ref: any
  formField: any
}

const PersonalDetail: React.FC<PersonalDetailProps> =
  forwardRef(
    ({ personalDetailState, formField }, ref) => {
      const imageMimeType: string[] = [
        'image/png',
        'image/jpeg',
      ]

      const {
        formField: {
          firstName,
          middleName,
          lastName,
          email,
          mobileNumber,
          presentAddress,
          permanentAddress,
        },
      }: any = { formField: formField }

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
        ;(personalDetailTemp as any)[
          propertyName
        ] = value
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
                    <InputField
                      name={firstName.name}
                      label={firstName.label}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box mx={3} my={1}>
                    <InputField
                      name={middleName.name}
                      label={middleName.label}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box mx={3} my={1}>
                    <InputField
                      name={lastName.name}
                      label={lastName.label}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box mx={3} my={1}>
                    <InputField
                      name={email.name}
                      label={email.label}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box mx={3} my={1}>
                    <InputField
                      name={mobileNumber.name}
                      label={mobileNumber.label}
                      fullWidth
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
                    <InputField
                      name={presentAddress.name}
                      label={presentAddress.label}
                      fullWidth
                      multiline
                      rows={4}
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
                    <InputField
                      name={permanentAddress.name}
                      label={
                        permanentAddress.label
                      }
                      fullWidth
                      multiline
                      rows={4}
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
