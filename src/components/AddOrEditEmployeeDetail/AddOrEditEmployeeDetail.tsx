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
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'
import {
  AddNewEmployeeDetailApi,
  UpdateEmployeeDetailApi,
} from '../../api/EmployeeController'
import Spinner from '../Spinner/Spinner'
import validationSchema from '../../common/validationSchema/validationSchema'
import formInitialValues from '../../common/validationSchema/formInitialValues'
import { Formik, Form } from 'formik'
import PersonalDetailFormModel from '../../common/validationSchema/EmployeeDetailFormModel'

const AddOrEditEmployeeDetail: React.FC = (
  props: any
) => {
  const { formId, formField } =
    PersonalDetailFormModel

  const personalDetailRef = useRef()
  const bankDetailRef = useRef()
  const professionalDetailRef = useRef()
  const educationDetailRef = useRef()
  const experienceDetailRef = useRef()
  const currentOrganizationDetailRef = useRef()

  const [activeStep, setActiveStep] =
    React.useState(0)

  // get employee id from url
  const { id }: any = useParams()
  // get value of employee detail
  const { state } = props.location

  const [employeeDetail, setEmployeeDetail] =
    useState<EmployeeDetailModal>(
      id && state
        ? state[0]
        : new EmployeeDetailModal()
    )

  const [isShownSnackbar, setIsShownSnackbar] =
    useState<boolean>(false)

  const [responseMessage, setResponseMessage] =
    useState<string>('')

  const [isLoading, setIsLoading] =
    useState<boolean>(false)

  const currentValidationSchema =
    validationSchema[activeStep]

  const _handleSubmit = (
    values: any,
    actions: any
  ) => {
    // setActiveStep(
    //   (prevActiveStep) => prevActiveStep + 1
    // )
    handleNext()
    actions.setTouched({})
    actions.setSubmitting(false)
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
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 1:
        if (bankDetailRef) {
          employeeDetailTemp.bankDetail = (
            bankDetailRef!.current! as any
          ).getBankDetailState()
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
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 3:
        if (educationDetailRef) {
          employeeDetailTemp.educationDetail = (
            educationDetailRef!.current! as any
          ).getEducationDetailState()
          setEmployeeDetail(employeeDetailTemp)
        }
        break
      case 4:
        if (experienceDetailRef) {
          employeeDetailTemp.experienceDetail = (
            experienceDetailRef!.current! as any
          ).getExperienceDetail()
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
          setEmployeeDetail(employeeDetailTemp)
          if (id) {
            updateEmployeeDetailApi(
              employeeDetailTemp
            )
          } else {
            addNewEmployeeDetailApi(
              employeeDetailTemp
            )
          }
        }
        break
      default:
        break
    }
    if (activeStep + 1 !== steps.length) {
      setActiveStep(
        (prevActiveStep) => prevActiveStep + 1
      )
    }
  }

  const addNewEmployeeDetailApi = (
    employeeDetail: EmployeeDetailModal
  ) => {
    setIsLoading(true)
    let message = ''
    AddNewEmployeeDetailApi(employeeDetail)
      .then((res) => {
        if (res.data) {
          message =
            'Employee detail added successfully'
          props.history.push('/')
        } else {
          message = 'Something went to wrong'
        }
        setIsLoading(false)
        setResponseMessage(message)
        setIsShownSnackbar(true)
      })
      .catch((error) => {
        setResponseMessage(
          error.response.data.message
        )
        setIsShownSnackbar(true)
        setIsLoading(false)
      })
  }

  const updateEmployeeDetailApi = (
    employeeDetail: EmployeeDetailModal
  ) => {
    setIsLoading(true)
    let message = ''
    UpdateEmployeeDetailApi(id, employeeDetail)
      .then((res) => {
        if (res.data) {
          message =
            'Employee details updated successfully'
          props.history.push('/')
        } else {
          message = 'Something went to wrong'
        }
        setIsLoading(false)
        setResponseMessage(message)
        setIsShownSnackbar(true)
      })
      .catch((error) => {
        setResponseMessage(
          error.response.data.message
        )
        setIsShownSnackbar(true)
        setIsLoading(false)
      })
  }

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => prevActiveStep - 1
    )
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

  const backToEmployeeList = () => {
    props.history.push('/')
  }

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalDetail
            personalDetailState={
              employeeDetail.personalDetail
            }
            ref={personalDetailRef}
            formField={formField}
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
          <Formik
            initialValues={formInitialValues}
            validationSchema={
              currentValidationSchema
            }
            onSubmit={(value, action) => {
              _handleSubmit(value, action)
            }}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                <StepperContentWrapper xs={12}>
                  <Typography>
                    {getStepContent(activeStep)}
                  </Typography>
                </StepperContentWrapper>
                <StepperContainerFooter>
                  <div className="left-align">
                    <Box component="span" m={1}>
                      <Button
                        variant="contained"
                        onClick={
                          backToEmployeeList
                        }
                        color="primary"
                        size="large"
                      >
                        Back to List
                      </Button>
                    </Box>
                  </div>
                  <div className="right-align">
                    <Box component="span" m={1}>
                      <Button
                        variant="contained"
                        disabled={
                          activeStep === 0
                        }
                        onClick={handleBack}
                        size="large"
                      >
                        Back
                      </Button>
                    </Box>
                    <Box component="span" m={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                      >
                        {activeStep ===
                        steps.length - 1
                          ? 'Finish'
                          : 'Next'}
                      </Button>
                    </Box>
                  </div>
                </StepperContainerFooter>
              </Form>
            )}
          </Formik>
        </>
      </div>
      {isLoading && <Spinner />}
      {isShownSnackbar && (
        <CustomSnackbar
          message={responseMessage}
          handleClose={setIsShownSnackbar}
        />
      )}
    </StepperContainer>
  )
}

export default withRouter(AddOrEditEmployeeDetail)
