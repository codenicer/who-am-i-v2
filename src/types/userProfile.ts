import { Experience, Project, SocialLink } from '.'

export interface UserProfile {
  firstName: string
  lastName: string
  profession: string
  professionAlias: string
  professionDescription: string

  aboutMe: {
    main: string
    secondary: string
  }
  skills: Skill[]
  experiences: Experience[]
  socialLinks: SocialLink[]
  projects: Project[]
}

export interface Skill {
  name: string
  icon?: string
}
