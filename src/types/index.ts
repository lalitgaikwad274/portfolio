import { LucideIcon } from 'lucide-react'

export interface SkillItem {
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

export interface ProjectItem {
  n: string
  type: string
  title: string
  desc: string
  stack: string[]
  icon: LucideIcon
  tone: 'violet' | 'lime' | 'blue'
  link: string
}

export interface ExperienceItem {
  date: string
  title: string
  company: string
  text: string
}

export interface StatItem {
  value: string
  suffix?: string
  label: string
}

export interface NavItem {
  label: string
  href: string
}
