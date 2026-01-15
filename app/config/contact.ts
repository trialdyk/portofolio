// Contact page configuration

export interface SocialLink {
  name: string
  url: string
  icon: string
  iconColor?: string
  handle: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  subValue?: string
}

export const contactConfig = {
  meta: {
    title: 'Contact',
    description: "Get in touch with me and let's work together!",
    caption: 'Work'
  },

  name: 'Tri Aldy Kurniawan',
  email: 'trialdykk@gmail.com', // Update with real email

  location: {
    city: 'Malang',
    region: 'Jawa Timur',
    country: 'Indonesia',
    timezone: 'GMT+7',
    flag: '🇮🇩'
  },

  intro: {
    title: "Let's Work Together!",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"
  },

  contactInfo: [
    {
      icon: 'heroicons:map-pin-20-solid',
      label: 'Location',
      value: 'Malang, Jawa Timur',
      subValue: 'Indonesia 🇮🇩'
    },
    {
      icon: 'heroicons:clock-20-solid',
      label: 'Timezone',
      value: 'GMT+7',
      subValue: 'Western Indonesia Time (WIB)'
    },
    {
      icon: 'heroicons:envelope-20-solid',
      label: 'Email',
      value: 'trialdykk@gmail.com',
    }
  ] as ContactInfo[],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/trialdyk',
      icon: 'simple-icons:github',
      iconColor: 'text-slate-900 dark:text-white',
      handle: '@trialdyk'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/trialdyk',
      icon: 'simple-icons:linkedin',
      iconColor: 'text-[#0A66C2]',
      handle: 'Tri Aldy Kurniawan'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/trialdyk',
      icon: 'simple-icons:instagram',
      iconColor: 'text-[#E4405F]',
      handle: '@trialdyk'
    }
  ] as SocialLink[],

  availability: {
    status: 'available', // 'available' | 'busy' | 'unavailable'
    message: 'Currently available for freelance projects and collaboration opportunities.'
  }
}
