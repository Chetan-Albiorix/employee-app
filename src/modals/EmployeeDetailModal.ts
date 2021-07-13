import { v4 as uuidv4 } from 'uuid'
import BankDetailModal from './BankDetailModal'
import CurrentOrganizationDetailModal from './CurrentOrganizationDetailModal'
import EducationDetailModal from './EducationDetailModal'
import ExperienceDetailModal from './ExperienceDetailModal'
import PersonalDetailModal from './PersonalDetailModal'
import ProfessionalDetailModal from './ProfessionalDetailModal'

export default class EmployeeDetailModal {
  id: string
  personalDetail: PersonalDetailModal
  bankDetail: BankDetailModal
  professionalDetail: ProfessionalDetailModal
  educationDetail: EducationDetailModal[]
  experienceDetail: ExperienceDetailModal[]
  currentOrganizationDetail: CurrentOrganizationDetailModal

  constructor() {
    this.id = uuidv4()
    this.personalDetail =
      new PersonalDetailModal()
    this.bankDetail = new BankDetailModal()
    this.professionalDetail =
      new ProfessionalDetailModal()
    this.educationDetail = []
    this.experienceDetail = []
    this.currentOrganizationDetail =
      new CurrentOrganizationDetailModal()
  }
}
