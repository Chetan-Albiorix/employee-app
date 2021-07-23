import * as Yup from 'yup'
import PersonalDetailFormModel from './PersonalDetailFormModel'

const {
  formField: { firstName, middleName, lastName },
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
  }),
]
