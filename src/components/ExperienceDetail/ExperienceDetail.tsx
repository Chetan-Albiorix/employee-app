import React, { useState } from 'react'
import {
  ContentRightAlignment,
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
import AddIcon from '@material-ui/icons/Add'
import EmployeeTable from '../EditableTable/EmployeeTable'
import { Button, Grid } from '@material-ui/core'
import ExperienceDetailModal from '../../modals/ExperienceDetailModal'

const ExperienceDetail: React.FC = () => {
  const experienceTableHeader: string[] = [
    'Company Name',
    'Position',
    'Total Year',
    'Last Ctc',
    'Action',
  ]
  const [isEdit, setIsEdit] =
    useState<boolean>(false)

  const [
    isDisableAddExperienceBtn,
    setDisableAddExperienceBtn,
  ] = useState<boolean>(false)

  const [currentIndex, setCurrentIndex] =
    useState<number>(-1)

  const [
    experienceDetailList,
    setExperienceDetailList,
  ] = useState<ExperienceDetailModal[]>([])

  const addNewExperienceDetail = () => {
    const educationDetailListTemp: ExperienceDetailModal[] =
      [...experienceDetailList]
    educationDetailListTemp.push(
      new ExperienceDetailModal()
    )
    setExperienceDetailList(
      educationDetailListTemp
    )
    setCurrentIndex(
      educationDetailListTemp.length - 1
    )
    setDisableAddExperienceBtn(true)
    setIsEdit(true)
  }

  const updateEducationDetail = (
    value: string | number,
    index: number,
    propertyName: string
  ) => {
    const educationDetailListTemp: ExperienceDetailModal[] =
      [...experienceDetailList]
    ;(educationDetailListTemp[index] as any)[
      propertyName
    ] = value
    setExperienceDetailList(
      educationDetailListTemp
    )
  }

  const deleteEducationDetail = (
    index: number
  ) => {
    const educationDetailListTemp: ExperienceDetailModal[] =
      [...experienceDetailList]
    educationDetailListTemp.splice(index, 1)
    setExperienceDetailList(
      educationDetailListTemp
    )
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    )
    if (currentIndex === index) {
      setIsEdit(false)
    }
  }

  const saveEducationDetail = (index: number) => {
    setDisableAddExperienceBtn(false)
    setIsEdit(false)
    setCurrentIndex(-1)
  }

  const cancelEducationDetail = (
    index: number
  ) => {
    setDisableAddExperienceBtn(false)
    setIsEdit(false)
    setCurrentIndex(-1)
  }

  const editEducationDetail = (index: number) => {
    setCurrentIndex(index)
    setIsEdit(true)
  }
  return (
    <>
      <StepperContainerWrapper>
        <PaperWrapper>
          <h2>Experience Detail</h2>
          <Grid container>
            <ContentRightAlignment xs={12}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddIcon />}
                onClick={addNewExperienceDetail}
                disabled={
                  isDisableAddExperienceBtn &&
                  isEdit
                }
              >
                Add Experience
              </Button>
            </ContentRightAlignment>
          </Grid>
          <EmployeeTable
            isEdit={isEdit}
            currentIndex={currentIndex}
            tableHeaderItem={
              experienceTableHeader
            }
            tableItemList={experienceDetailList}
            updateEducationDetail={
              updateEducationDetail
            }
            saveEducationDetail={
              saveEducationDetail
            }
            cancelEducationDetail={
              cancelEducationDetail
            }
            editEducationDetail={
              editEducationDetail
            }
            deleteEducationDetail={
              deleteEducationDetail
            }
          />
        </PaperWrapper>
      </StepperContainerWrapper>
    </>
  )
}

export default ExperienceDetail
