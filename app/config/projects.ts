// Projects page configuration

export interface Project {
  title: string
  description: string
  image?: string      // Optional: path to image e.g. '/assets/images/projects/project-name.png'
  technologies: string[]
  type: 'freelance' | 'fulltime' | 'internship' | 'personal'
  category: string
  link?: string       // Optional: live website URL e.g. 'https://example.com'
  github?: string     // Optional: github repo URL
}

export const projectsConfig = {
  meta: {
    title: 'Projects',
    description: 'A collection of projects I have worked on throughout my career.',
    caption: 'Work'
  },

  projects: [
    // Internship Projects - Hummatech
    {
      title: 'MiSchool',
      description: 'Comprehensive school management platform with attendance, curriculum, student/teacher data management, LMS, online examination, and digital report cards.',
      technologies: ['Laravel', 'Vue.js', 'Nuxt.js', 'JavaScript', 'MySQL'],
      type: 'internship',
      category: 'Web Application',
      // image: '/assets/images/projects/mischool.png',
      // link: 'https://mischool.id',
    },
    {
      title: 'SIPJAKI',
      description: 'Construction Services Information System for transparency and business networking in the construction industry. Managed by national, provincial, and city construction supervisors.',
      technologies: ['Laravel', 'JavaScript', 'MySQL'],
      type: 'fulltime',
      category: 'Government System',
      // image: '/assets/images/projects/sipjaki.png',
      link: 'https://sipjaki.pasuruankab.com',
    },
    {
      title: 'Tracer Study System',
      description: 'Alumni tracking and career monitoring system for educational institutions.',
      technologies: ['Laravel', 'JavaScript', 'MySQL'],
      type: 'fulltime',
      category: 'Web Application',
      // image: '/assets/images/projects/tracer-study.png',
      // link: 'https://example.com',
    },

    // Freelance Projects
    {
      title: 'E-Rapor SMA Trensains Tebuireng',
      description: 'Digital report card system for high school with grade management and parent portal.',
      technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'MySQL'],
      type: 'freelance',
      category: 'Education',
      // image: '/assets/images/projects/e-rapor.png',
      // link: 'https://example.com',
    },
    {
      title: 'LMS & Tryout ASN Indonesia',
      description: 'Learning management system and examination platform for civil servant candidates with comprehensive test features.',
      technologies: ['Laravel', 'JavaScript', 'MySQL'],
      type: 'freelance',
      category: 'Education',
      // image: '/assets/images/projects/lms-asn.png',
      link: 'https://asn-indonesia.com',
    },
    {
      title: 'TOEFL Test ASN',
      description: 'Integrated English proficiency testing system for government civil servant assessment.',
      technologies: ['Laravel', 'JavaScript', 'MySQL'],
      type: 'freelance',
      category: 'Education',
      // image: '/assets/images/projects/toefl-asn.png',
      link: 'https://asn-indonesia.com',
    },
    {
      title: 'Boarding School Management',
      description: 'Integrated boarding school management system with mobile app and PPOB payment gateway for comprehensive school operations.',
      technologies: ['Laravel', 'Vue', 'Inertia.js', 'Flutter', 'MySQL'],
      type: 'freelance',
      category: 'Education',
      // image: '/assets/images/projects/boarding-school.png',
      // link: 'https://example.com',
    },
    {
      title: 'E-Course Platform',
      description: 'Online learning website similar to Udemy with course creation, video streaming, and payment integration.',
      technologies: ['Next.js', 'Golang', 'PostgreSQL'],
      type: 'freelance',
      category: 'E-Learning',
      // image: '/assets/images/projects/e-course.png',
      // link: 'https://example.com',
    }
  ] as Project[]
}
