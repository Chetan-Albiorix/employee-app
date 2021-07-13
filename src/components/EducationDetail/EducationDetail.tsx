import { Button, Grid } from '@material-ui/core'
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import {
  ContentRightAlignment,
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
import AddIcon from '@material-ui/icons/Add'
import EducationDetailModal from '../../modals/EducationDetailModal'
import EmployeeTable from '../EditableTable/EmployeeTable'

interface EducationDetailProps {
  educationDetailState: EducationDetailModal[]
  ref: any
}

const EducationDetail: React.FC<EducationDetailProps> =
  forwardRef(({ educationDetailState }, ref) => {
    const educationTableHeader: string[] = [
      'Education Name',
      'University Name',
      'Result',
      'Year Of Passing',
      'Action',
    ]
    const [isEdit, setIsEdit] =
      useState<boolean>(false)

    const [
      isDisableAddEmployeeBtn,
      setIsDisableAddEmployeeBtn,
    ] = useState<boolean>(false)

    const [currentIndex, setCurrentIndex] =
      useState<number>(-1)

    const [
      educationDetailList,
      setEducationDetailList,
    ] = useState<EducationDetailModal[]>(
      educationDetailState
    )

    const addNewEducationDetail = () => {
      const educationDetailListTemp: EducationDetailModal[] =
        [...educationDetailList]
      educationDetailListTemp.push(
        new EducationDetailModal()
      )
      setEducationDetailList(
        educationDetailListTemp
      )
      setCurrentIndex(
        educationDetailListTemp.length - 1
      )
      setIsDisableAddEmployeeBtn(true)
      setIsEdit(true)
    }

    const updateItemDetail = (
      value: string | number,
      index: number,
      propertyName: string
    ) => {
      const educationDetailListTemp: EducationDetailModal[] =
        [...educationDetailList]
      ;(educationDetailListTemp[index] as any)[
        propertyName
      ] = value
      setEducationDetailList(
        educationDetailListTemp
      )
    }

    const deleteEducationDetail = (
      index: number
    ) => {
      const educationDetailListTemp: EducationDetailModal[] =
        [...educationDetailList]
      educationDetailListTemp.splice(index, 1)
      setEducationDetailList(
        educationDetailListTemp
      )
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? 0 : prevIndex - 1
      )
      if (currentIndex === index) {
        setIsEdit(false)
      }
    }

    const saveEducationDetail = (
      index: number
    ) => {
      setIsDisableAddEmployeeBtn(false)
      setIsEdit(false)
      setCurrentIndex(-1)
    }

    const cancelEducationDetail = (
      index: number
    ) => {
      setIsDisableAddEmployeeBtn(false)
      setIsEdit(false)
      setCurrentIndex(-1)
    }

    const editEducationDetail = (
      index: number
    ) => {
      setCurrentIndex(index)
      setIsEdit(true)
    }

    useImperativeHandle(
      ref,
      () => ({
        getEducationDetailState: () => {
          return educationDetailList
        },
      }),
      [educationDetailList]
    )

    return (
      <>
        <StepperContainerWrapper>
          <PaperWrapper>
            <h2>Education Detail</h2>
            <Grid container>
              <ContentRightAlignment xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<AddIcon />}
                  onClick={addNewEducationDetail}
                  disabled={
                    isDisableAddEmployeeBtn &&
                    isEdit
                  }
                >
                  Add Education
                </Button>
              </ContentRightAlignment>
            </Grid>
            <EmployeeTable
              isEdit={isEdit}
              currentIndex={currentIndex}
              tableHeaderItem={
                educationTableHeader
              }
              tableItemList={educationDetailList}
              updateItemDetail={updateItemDetail}
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
  })

export default EducationDetail
