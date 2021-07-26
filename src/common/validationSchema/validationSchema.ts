import * as Yup from 'yup'
import PersonalDetailFormModel from './EmployeeDetailFormModel'

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
}: any = PersonalDetailFormModel

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(
      `${firstName.requiredErrorMsg}`
    ),
    [middleName.name]: Yup.string().required(
      `${middleName.requiredErrorMsg}`
    ),
    [lastName.name]: Yup.string().required(
      `${lastName.requiredErrorMsg}`
    ),
    [email.name]: Yup.string()
      .email()
      .required(`${email.requiredErrorMsg}`),
    [mobileNumber.name]: Yup.string().required(
      `${mobileNumber.requiredErrorMsg}`
    ),
    [presentAddress.name]: Yup.string().required(
      `${presentAddress.requiredErrorMsg}`
    ),
    [permanentAddress.name]:
      Yup.string().required(
        `${permanentAddress.requiredErrorMsg}`
      ),
  }),
]
