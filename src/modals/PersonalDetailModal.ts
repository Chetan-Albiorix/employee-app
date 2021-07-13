import { FileModal } from './FileModal'

export default class PersonalDetailModal {
  firstName: string
  middleName: string
  lastName: string
  mobileNumber: string
  contactNumber: string
  email: string
  birthday: Date | null
  presentAddress: string
  permanentAddress: string
  image: FileModal
  isCopyToPresentAddress?: boolean

  constructor() {
    this.firstName = ''
    this.middleName = ''
    this.lastName = ''
    this.mobileNumber = ''
    this.contactNumber = ''
    this.email = ''
    this.birthday = null
    this.presentAddress = ''
    this.permanentAddress = ''
    this.image = new FileModal()
    this.isCopyToPresentAddress = false
  }
}
