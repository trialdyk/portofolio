// Skills and Tools page configuration

export interface Skill {
  name: string
  indicator: number
  icon?: string // nuxt-icon name for colored logos
  iconColor?: string // brand color for the icon
}

export interface Role {
  title: string
  icon: string
  description: string
  color: string
}

export interface TechCard {
  name: string
  icon: string
  description: string
  gradient: string
  iconBg: string
  iconColor: string
}

export const skillsConfig = {
  meta: {
    title: 'Skills and Tools',
    description: "A look at all the programming languages, libraries, and tools I've worked with.",
    caption: 'Work'
  },

  yearsOfExperience: () => 5, // Started in SMK
  
  roles: [
    {
      title: 'Fullstack Web Developer',
      icon: 'heroicons:globe-alt-20-solid',
      description: 'Building complete web applications from frontend to backend',
      color: 'accent'
    },
    {
      title: 'System Analyst',
      icon: 'heroicons:chart-bar-20-solid',
      description: 'Analyzing and designing system architectures',
      color: 'accent'
    },
    {
      title: 'Mobile Developer',
      icon: 'heroicons:device-phone-mobile-20-solid',
      description: 'Creating cross-platform mobile applications',
      color: 'accent'
    }
  ] as Role[],

  // Featured technologies with colored brand icons
  techCards: [
    {
      name: 'Laravel',
      icon: 'simple-icons:laravel',
      description: 'PHP framework for building elegant web applications with expressive, beautiful syntax.',
      gradient: 'from-red-50 dark:from-red-900/20',
      iconBg: 'bg-red-100 dark:bg-red-900/50',
      iconColor: 'text-[#FF2D20]'
    },
    {
      name: 'Vue.js & Nuxt',
      icon: 'simple-icons:vuedotjs',
      description: 'Progressive JavaScript framework for building modern user interfaces.',
      gradient: 'from-green-50 dark:from-green-900/20',
      iconBg: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-[#4FC08D]'
    },
    {
      name: 'Flutter',
      icon: 'simple-icons:flutter',
      description: 'Google UI toolkit for building beautiful, natively compiled mobile apps.',
      gradient: 'from-sky-50 dark:from-sky-900/20',
      iconBg: 'bg-sky-100 dark:bg-sky-900/50',
      iconColor: 'text-[#02569B]'
    },
    {
      name: 'Golang',
      icon: 'simple-icons:go',
      description: 'Statically typed, compiled language for scalable backend services.',
      gradient: 'from-cyan-50 dark:from-cyan-900/20',
      iconBg: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-[#00ADD8]'
    }
  ] as TechCard[],

  programmingLanguages: [
    { name: 'PHP', indicator: 100, icon: 'simple-icons:php', iconColor: 'text-[#777BB4]' },
    { name: 'JavaScript', indicator: 100, icon: 'simple-icons:javascript', iconColor: 'text-[#F7DF1E]' },
    { name: 'TypeScript', indicator: 90, icon: 'simple-icons:typescript', iconColor: 'text-[#3178C6]' },
    { name: 'Golang', indicator: 75, icon: 'simple-icons:go', iconColor: 'text-[#00ADD8]' },
    { name: 'Dart', indicator: 75, icon: 'simple-icons:dart', iconColor: 'text-[#0175C2]' },
    { name: 'Java', indicator: 50, icon: 'simple-icons:openjdk', iconColor: 'text-[#ED8B00]' },
    { name: 'HTML', indicator: 100, icon: 'simple-icons:html5', iconColor: 'text-[#E34F26]' },
    { name: 'CSS/SCSS', indicator: 100, icon: 'simple-icons:css3', iconColor: 'text-[#1572B6]' },
    { name: 'SQL', indicator: 75, icon: 'simple-icons:mysql', iconColor: 'text-[#4479A1]' },
  ] as Skill[],

  frameworks: [
    { name: 'Laravel', indicator: 100, icon: 'simple-icons:laravel', iconColor: 'text-[#FF2D20]' },
    { name: 'Vue.js', indicator: 100, icon: 'simple-icons:vuedotjs', iconColor: 'text-[#4FC08D]' },
    { name: 'Nuxt.js', indicator: 90, icon: 'simple-icons:nuxtdotjs', iconColor: 'text-[#00DC82]' },
    { name: 'Flutter', indicator: 75, icon: 'simple-icons:flutter', iconColor: 'text-[#02569B]' },
    { name: 'Tailwind CSS', indicator: 100, icon: 'simple-icons:tailwindcss', iconColor: 'text-[#06B6D4]' },
    { name: 'Bootstrap', indicator: 75, icon: 'simple-icons:bootstrap', iconColor: 'text-[#7952B3]' },
    { name: 'React', indicator: 50, icon: 'simple-icons:react', iconColor: 'text-[#61DAFB]' },
    { name: 'Next.js', indicator: 25, icon: 'simple-icons:nextdotjs', iconColor: 'text-slate-900 dark:text-white' },
  ] as Skill[],

  databases: [
    { name: 'MySQL', indicator: 100, icon: 'simple-icons:mysql', iconColor: 'text-[#4479A1]' },
    { name: 'PostgreSQL', indicator: 90, icon: 'simple-icons:postgresql', iconColor: 'text-[#4169E1]' },
    { name: 'Supabase', indicator: 75, icon: 'simple-icons:supabase', iconColor: 'text-[#3FCF8E]' },
    { name: 'MongoDB', indicator: 50, icon: 'simple-icons:mongodb', iconColor: 'text-[#47A248]' },
    { name: 'Redis', indicator: 25, icon: 'simple-icons:redis', iconColor: 'text-[#DC382D]' },
  ] as Skill[],

  tools: [
    { name: 'VS Code', indicator: 100, icon: 'simple-icons:visualstudiocode', iconColor: 'text-[#007ACC]' },
    { name: 'Git', indicator: 100, icon: 'simple-icons:git', iconColor: 'text-[#F05032]' },
    { name: 'GitHub', indicator: 100, icon: 'simple-icons:github', iconColor: 'text-slate-900 dark:text-white' },
    { name: 'Figma', indicator: 90, icon: 'simple-icons:figma', iconColor: 'text-[#F24E1E]' },
    { name: 'Postman', indicator: 90, icon: 'simple-icons:postman', iconColor: 'text-[#FF6C37]' },
    { name: 'Docker', indicator: 50, icon: 'simple-icons:docker', iconColor: 'text-[#2496ED]' },
    { name: 'Linux', indicator: 75, icon: 'simple-icons:linux', iconColor: 'text-[#FCC624]' },
    { name: 'Node.js', indicator: 75, icon: 'simple-icons:nodedotjs', iconColor: 'text-[#339933]' },
  ] as Skill[],
}
