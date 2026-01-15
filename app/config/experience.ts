// Experience page configuration

export interface TimelineItem {
  company: string
  role: string
  period: string
  periodStart: string
  periodEnd: string
  description: string
  tasks: string[]
  type: 'freelance' | 'fulltime' | 'education' | 'internship'
}

export const experienceConfig = {
  meta: {
    title: 'Experience',
    description: 'My journey from vocational school, internship, to freelance and university.',
    caption: 'Work'
  },

  timeline: [
    {
      company: 'Freelance',
      role: 'System Analyst',
      period: 'Des 2025 - Present',
      periodStart: '2025-12',
      periodEnd: 'present',
      description: 'Working as a freelance System Analyst for various enterprise projects.',
      tasks: [
        'Analyzing business requirements and translating them into technical specifications.',
        'Creating system documentation and business process flows.',
        'Collaborating with development teams for solution implementation.'
      ],
      type: 'freelance'
    },
    {
      company: 'Freelance Projects',
      role: 'Fullstack Developer',
      period: 'Jul 2024 - Present',
      periodStart: '2024-07',
      periodEnd: 'present',
      description: 'Working on various freelance projects while pursuing my degree using Laravel, Inertia.js, Nuxt.js, and Golang.',
      tasks: [
        'E-Rapor SMA Trensains Tebuireng — Digital report card system for high school.',
        'LMS & Tryout ASN Indonesia — Learning platform and examination system for civil servant candidates.',
        'TOEFL Test ASN — Integrated English proficiency testing system.',
        'Boarding School Management — Integrated system with mobile app and PPOB payment gateway.',
        'E-Course Platform — Online learning website similar to Udemy with complete features.',
        'Tech Stack: Laravel, Inertia.js, Nuxt.js, Golang'
      ],
      type: 'freelance'
    },
    {
      company: 'PT Hummatech Indonesia',
      role: 'Fullstack Developer & Project Manager',
      period: 'Jan 2024 - Jun 2024',
      periodStart: '2024-01',
      periodEnd: '2024-06',
      description: 'Worked full-time after completing internship. Led development teams while building enterprise systems using Laravel, Vue.js, and Nuxt.js.',
      tasks: [
        'Led development teams as Project Manager while actively coding.',
        'Continued development of School Management System with new features.',
        'Developed Tracer Study System for alumni tracking and career monitoring.',
        'Built SIPJAKI — Construction Services Information System for transparency and business networking.',
        'Tech Stack: Laravel, JavaScript, Vue.js, Nuxt.js'
      ],
      type: 'fulltime'
    }
  ] as TimelineItem[],

  education: [
    {
      company: 'Politeknik Negeri Malang',
      role: 'D4 Informatics Engineering',
      period: 'Jul 2024 - Present',
      periodStart: '2024-07',
      periodEnd: 'present',
      description: 'Pursuing applied bachelor degree in Informatics Engineering.',
      tasks: [
        'Learning advanced software development concepts.',
        'Focusing on web and mobile development technologies.',
        'Actively working on freelance projects while studying.'
      ],
      type: 'education'
    },
    {
      company: 'SMKN 1 Kepanjen',
      role: 'Software Engineering',
      period: '2021 - 2024',
      periodStart: '2021',
      periodEnd: '2024',
      description: 'Graduated from Software Engineering major with focus on software development.',
      tasks: [
        'Learned programming fundamentals: HTML, CSS, JavaScript, PHP.',
        'Developed various web applications as school projects.',
        'Completed 1-year internship program at PT Hummatech Indonesia.'
      ],
      type: 'education'
    }
  ] as TimelineItem[],

  internship: [
    {
      company: 'PT Hummatech Indonesia',
      role: 'Fullstack Developer Intern & Project Manager',
      period: 'Jan 2023 - Dec 2023',
      periodStart: '2023-01',
      periodEnd: '2023-12',
      description: '1-year internship (Grade 11 Semester 2 - Grade 12). Built large-scale enterprise systems using Laravel, Vue.js, and Nuxt.js while also managing project teams.',
      tasks: [
        'Built comprehensive School Management System (SMS) from scratch.',
        'Developed Attendance, Curriculum, and Data Management modules.',
        'Built integrated LMS, Online Examination, and E-Report Card systems.',
        'Managed project timelines and coordinated with development teams.',
        'Tech Stack: Laravel, JavaScript, Vue.js, Nuxt.js'
      ],
      type: 'internship'
    }
  ] as TimelineItem[],
}
