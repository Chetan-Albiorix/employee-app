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
  educationDetail: EducationDetailModal
  experienceDetail: ExperienceDetailModal
  currentOrganizationDetail: CurrentOrganizationDetailModal

  constructor() {
    this.id = ''
    this.personalDetail =
      new PersonalDetailModal()
    this.bankDetail = new BankDetailModal()
    this.professionalDetail =
      new ProfessionalDetailModal()
    this.educationDetail =
      new EducationDetailModal()
    this.experienceDetail =
      new ExperienceDetailModal()
    this.currentOrganizationDetail =
      new CurrentOrganizationDetailModal()
  }
}
