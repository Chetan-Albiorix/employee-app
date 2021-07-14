import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
import MultiSelect, {
  ListItem,
} from '../MultiSelect/MultiSelect'
import {
  ExperienceTextFieldWrapper,
  ExperienceTextLabel,
  FormControlWrapper,
} from './ProfessionalDetail.Style'
import { useEffect } from 'react'

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

      const [experienceYear, setExperienceYear] =
        useState<number>(0)

      const [
        experienceMonth,
        setExperienceMonth,
      ] = useState<number>(0)

      const yearsList: number[] = [
        ...Array(15).keys(),
      ]

      // for create 1 to 12 list record array
      const monthsList: number[] = [
        ...Array(11).keys(),
      ].map((x) => x + 1)

      const skillsList: ListItem[] = [
        {
          id: 1,
          value: 'Java',
        },
        {
          id: 2,
          value: 'Python',
        },
        {
          id: 2,
          value: 'ASP.NET',
        },
      ]

      const [
        professionalDetail,
        setProfessionalDetail,
      ] = useState<ProfessionalDetailModal>(
        professionalDetailState
      )

      const updateProfessionalDetail = (
        value: string | string[],
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

      useEffect(() => {
        const professionalDetailTemp = {
          ...professionalDetail,
        }
        let experience =
          experienceYear + '.' + experienceMonth

        professionalDetailTemp.experience =
          Number(experience)
        setProfessionalDetail(
          professionalDetailTemp
        )
        // call only experience Year or Month changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [experienceYear, experienceMonth])

      // set experience in selection dropdown
      useEffect(() => {
        if (
          professionalDetail &&
          professionalDetail.experience > 0
        ) {
          setExperienceYear(
            Number(
              professionalDetail.experience
                .toString()
                .split('.')[0]
            )
          )
          setExperienceMonth(
            Number(
              professionalDetail.experience
                .toString()
                .split('.')[1]
            )
          )
        }
        // call only first time when component is load
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

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
                    <ExperienceTextFieldWrapper>
                      <ExperienceTextLabel>
                        Experience:
                      </ExperienceTextLabel>
                    </ExperienceTextFieldWrapper>
                    <ExperienceTextFieldWrapper>
                      <FormControlWrapper>
                        <InputLabel id="demo-simple-select-label">
                          Years
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={experienceYear}
                          onChange={(event) =>
                            setExperienceYear(
                              event.target
                                .value as number
                            )
                          }
                          fullWidth
                        >
                          {yearsList.map(
                            (value) => {
                              return (
                                <MenuItem
                                  value={value}
                                >
                                  {value} Years
                                </MenuItem>
                              )
                            }
                          )}
                        </Select>
                      </FormControlWrapper>
                    </ExperienceTextFieldWrapper>
                    <ExperienceTextFieldWrapper>
                      <FormControlWrapper>
                        <InputLabel id="demo-simple-select-label">
                          Months
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={experienceMonth}
                          onChange={(event) =>
                            setExperienceMonth(
                              event.target
                                .value as number
                            )
                          }
                          fullWidth
                        >
                          {monthsList.map(
                            (value) => {
                              return (
                                <MenuItem
                                  key={value}
                                  value={value}
                                >
                                  {value} Month
                                </MenuItem>
                              )
                            }
                          )}
                        </Select>
                      </FormControlWrapper>
                    </ExperienceTextFieldWrapper>
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
                    <MultiSelect
                      label="Skills"
                      placeHolder="Skills"
                      optionsList={skillsList}
                      selectedOptions={
                        professionalDetail.skills
                      }
                      updateSelectedOption={(
                        selectedOptions: string[]
                      ) => {
                        updateProfessionalDetail(
                          selectedOptions,
                          'skills'
                        )
                      }}
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <FileUpload
                      label="Resume"
                      fileType="pdf"
                      fileSupportMsg="Only PDF file are allowed."
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
