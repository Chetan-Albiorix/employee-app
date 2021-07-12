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

const AddOrEditEmployeeDetail: React.FC = () => {
  const personalDetailRef = useRef()
  const [activeStep, setActiveStep] =
    React.useState(0)

  const [employeeDetail, setEmployeeDetail] =
    useState<EmployeeDetailModal>(
      new EmployeeDetailModal()
    )

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (personalDetailRef) {
          const employeeDetailTemp = {
            ...employeeDetail,
          }
          // need to fix this
          employeeDetailTemp.personalDetail = (
            personalDetailRef!.current! as any
          ).getPersonalDetailState()
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      default:
        break
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
        return <BankDetail />
      case 2:
        return <ProfessionalDetail />
      case 3:
        return <EducationDetail />
      case 4:
        return <ExperienceDetail />
      case 5:
        return <CurrentOrganizationDetail />
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
        {activeStep === steps.length ? (
          <div>
            <Typography>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
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
        )}
      </div>
    </StepperContainer>
  )
}

export default AddOrEditEmployeeDetail
