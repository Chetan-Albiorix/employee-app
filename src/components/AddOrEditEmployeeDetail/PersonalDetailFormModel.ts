// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: 'PersonalDetailFormModel',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required',
    },
    middleName: {
      name: 'middleName',
      label: 'Middle name*',
      requiredErrorMsg: 'Middle name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required',
    },
  },
}
