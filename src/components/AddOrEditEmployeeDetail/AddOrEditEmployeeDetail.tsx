import React, { useRef, useState } from 'react'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PersonalDetail from '../PersonalDetail/PersonalDetail'
import ProfessionalDetail from '../ProfessionalDetail/ProfessionalDetail'
import BankDetail from '../BankDetail/BankDetail'
import EducationDetail from '../EducationDetail/EducationDetail'
import ExperienceDetail from '../ExperienceDetail/ExperienceDetail'
import CurrentOrganizationDetail from '../CurrentOrganizationDetail/CurrentOrganizationDetail'
import {
  StepperContainer,
  StepperContainerFooter,
  StepperContentWrapper,
  StepperStyle,
} from './AddOrEditEmployeeDetail.Style'
import { Box } from '@material-ui/core'
import EmployeeDetailModal from '../../modals/EmployeeDetailModal'
import CustomSnackbar from '../CustomSnackbar/CustomSnackbar'

const AddOrEditEmployeeDetail: React.FC = () => {
  const personalDetailRef = useRef()
  const bankDetailRef = useRef()
  const professionalDetailRef = useRef()
  const educationDetailRef = useRef()
  const experienceDetailRef = useRef()
  const currentOrganizationDetailRef = useRef()

  const [activeStep, setActiveStep] =
    React.useState(5)

  const [employeeDetail, setEmployeeDetail] =
    useState<EmployeeDetailModal>(
      new EmployeeDetailModal()
    )

  const [isShownSnackbar, setIsShownSnackbar] =
    useState<boolean>(false)

  const setValueInLocalStorage = (
    employeeDetail: EmployeeDetailModal
  ) => {
    localStorage.setItem(
      'employeeDetail',
      JSON.stringify(employeeDetail)
    )
  }

  const handleNext = () => {
    const employeeDetailTemp = {
      ...employeeDetail,
    }
    switch (activeStep) {
      case 0:
        if (personalDetailRef) {
          employeeDetailTemp.personalDetail = (
            personalDetailRef!.current! as any
          ).getPersonalDetailState()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 1:
        if (bankDetailRef) {
          employeeDetailTemp.bankDetail = (
            bankDetailRef!.current! as any
          ).getBankDetailState()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 2:
        if (professionalDetailRef) {
          employeeDetailTemp.professionalDetail =
            (
              professionalDetailRef!
                .current! as any
            ).getProfessionalDetailState()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 3:
        if (educationDetailRef) {
          employeeDetailTemp.educationDetail = (
            educationDetailRef!.current! as any
          ).getEducationDetailState()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 4:
        if (experienceDetailRef) {
          employeeDetailTemp.experienceDetail = (
            experienceDetailRef!.current! as any
          ).getExperienceDetail()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 5:
        if (currentOrganizationDetailRef) {
          employeeDetailTemp.currentOrganizationDetail =
            (
              currentOrganizationDetailRef!
                .current! as any
            ).getCurrentOrganizationDetailState()
          setValueInLocalStorage(
            employeeDetailTemp
          )
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      default:
        break
    }
    if (activeStep + 1 === steps.length) {
      setIsShownSnackbar(true)
      setTimeout(() => {
        handleReset()
      }, 3000)
    }
    setActiveStep(
      (prevActiveStep) => prevActiveStep + 1
    )
  }

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => prevActiveStep - 1
    )
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const getSteps = () => {
    return [
      'Personal Detail',
      'Bank Detail',
      'Professional Detail',
      'Education Detail',
      'Experience Detail',
      'Current Organization Detail',
    ]
  }
  const steps = getSteps()

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalDetail
            personalDetailState={
              employeeDetail.personalDetail
            }
            ref={personalDetailRef}
          />
        )
      case 1:
        return (
          <BankDetail
            bankDetailState={
              employeeDetail.bankDetail
            }
            ref={bankDetailRef}
          />
        )
      case 2:
        return (
          <ProfessionalDetail
            professionalDetailState={
              employeeDetail.professionalDetail
            }
            ref={professionalDetailRef}
          />
        )
      case 3:
        return (
          <EducationDetail
            educationDetailState={
              employeeDetail.educationDetail
            }
            ref={educationDetailRef}
          />
        )
      case 4:
        return (
          <ExperienceDetail
            experienceDetailState={
              employeeDetail.experienceDetail
            }
            ref={experienceDetailRef}
          />
        )
      case 5:
        return (
          <CurrentOrganizationDetail
            currentOrganizationDetailState={
              employeeDetail.currentOrganizationDetail
            }
            ref={currentOrganizationDetailRef}
          />
        )
      default:
        return 'Unknown stepIndex'
    }
  }

  return (
    <StepperContainer fluid spacing={1}>
      <StepperStyle
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StepperStyle>
      <div>
        <>
          <StepperContentWrapper xs={12}>
            <Typography>
              {getStepContent(activeStep)}
            </Typography>
          </StepperContentWrapper>
          <StepperContainerFooter>
            <Box component="span" m={1}>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                color="secondary"
                size="large"
              >
                Back
              </Button>
            </Box>
            <Box component="span" m={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                size="large"
              >
                {activeStep === steps.length - 1
                  ? 'Finish'
                  : 'Next'}
              </Button>
            </Box>
          </StepperContainerFooter>
        </>
      </div>
      {isShownSnackbar && (
        <CustomSnackbar
          message="Employee Details Saved Successfully"
          handleClose={setIsShownSnackbar}
        />
      )}
    </StepperContainer>
  )
}

export default AddOrEditEmployeeDetail
