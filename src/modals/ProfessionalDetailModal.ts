export default class ProfessionalDetailModal {
  designation: string
  department: string
  experience: string
  currentLocation: string
  technologies: string[]
  skills: string[]
  resumeFile: string

  constructor() {
    this.designation = ''
    this.department = ''
    this.experience = ''
    this.currentLocation = ''
    this.technologies = []
    this.skills = []
    this.resumeFile = ''
  }
}
