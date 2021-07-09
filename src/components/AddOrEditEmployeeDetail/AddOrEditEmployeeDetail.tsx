import React from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
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
} from './AddOrEditEmployeeDetail.Style'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

function getSteps() {
  return [
    'Personal Detail',
    'Bank Detail',
    'Professional Detail',
    'Education Detail',
    'Experience Detail',
    'Current Organization Detail',
  ]
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetail />
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

const AddOrEditEmployeeDetail: React.FC = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] =
    React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
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

  return (
    <StepperContainer fluid spacing={1}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              className={classes.instructions}
            >
              All steps completed
            </Typography>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <StepperContentWrapper xs={12}>
            <Typography
              className={classes.instructions}
            >
              <h2>
                {getStepContent(activeStep)}
              </h2>
            </Typography>
            <StepperContainerFooter>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1
                  ? 'Finish'
                  : 'Next'}
              </Button>
            </StepperContainerFooter>
          </StepperContentWrapper>
        )}
      </div>
    </StepperContainer>
  )
}

export default AddOrEditEmployeeDetail
