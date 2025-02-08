import { Experience, PersonalContext, Project, SocialLink } from '.'

export interface UserProfile {
  firstName: string
  lastName: string
  profession: string
  professionAlias: string
  professionDescription: string
  email: string

  aboutMe: {
    text: string
    space: boolean
  }[]
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  socialLinks: SocialLink[]
  personalContext: PersonalContext
}

export interface Skill {
  name: string
  icon?: string
}
