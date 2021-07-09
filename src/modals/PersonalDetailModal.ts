export default class PersonalDetailModal {
  firstName: string
  middleName: string
  lastName: string
  mobileNumber: string
  contactNumber: string
  email: string
  birthday: Date | null
  presentAddress: string
  PermanentAddress: string
  image: string

  constructor() {
    this.firstName = ''
    this.middleName = ''
    this.lastName = ''
    this.mobileNumber = ''
    this.contactNumber = ''
    this.email = ''
    this.birthday = null
    this.presentAddress = ''
    this.PermanentAddress = ''
    this.image = ''
  }
}
