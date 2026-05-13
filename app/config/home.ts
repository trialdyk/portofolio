// Home page configuration

export const homeConfig = {
  meta: {
    title: 'Tri Aldy Kurniawan · Fullstack Developer',
    description: 'A Fullstack Developer and Software Engineering student at Politeknik Negeri Malang. Passionate about crafting seamless digital experiences and exploring the intersection of technology and human behavior.'
  },

  hero: {
    greeting: 'hi!',
    availableForWork: true,
    name: {
      first: 'Tri',
      highlighted: 'Aldy'
    },
    titles: [
      'Fullstack Developer',
      'Mobile Developer',
      'System Analyst'
    ],
    tagline: ' who transforms ideas into elegant digital solutions — and loves exploring the fascinating world of psychology.'
  },

  quote: {
    text: 'I build digital products that bridge technology and human experience — crafting solutions that are both technically sound and intuitively designed.',
    author: 'Tri Aldy Kurniawan'
  },

  techStack: [
    { name: 'Laravel', icon: 'simple-icons:laravel', iconColor: 'text-[#FF2D20]' },
    { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs', iconColor: 'text-[#00DC82]' },
    { name: 'Golang', icon: 'skill-icons:golang', iconColor: 'text-[#06B6D4]' },
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql', iconColor: 'text-[#4169E1]' },
    { name: 'Antigravity', icon: 'vscode-icons:file-type-gemini', iconColor: 'text-accent-500' },
  ],

  codeSnippets: [
    {
      filename: 'developer.ts',
      lines: [
        { text: 'const developer = {',    color: 'text-violet-600 dark:text-violet-400' },
        { text: '  name: "Tri Aldy",',    color: 'text-emerald-600 dark:text-green-400' },
        { text: '  role: "Fullstack",',   color: 'text-emerald-600 dark:text-green-400' },
        { text: '  stack: ["Vue","Go"],', color: 'text-amber-600 dark:text-amber-400'   },
        { text: '  coffee: true ☕',      color: 'text-pink-600 dark:text-pink-400'     },
        { text: '};',                     color: 'text-violet-600 dark:text-violet-400' },
      ],
    },
    {
      filename: 'analyst.ts',
      lines: [
        { text: 'class SystemAnalyst {', color: 'text-violet-600 dark:text-violet-400' },
        { text: '  analyze(problem) {',  color: 'text-sky-600 dark:text-sky-400'       },
        { text: '    const solution =',  color: 'text-emerald-600 dark:text-green-400' },
        { text: '      this.solve(p);',  color: 'text-emerald-600 dark:text-green-400' },
        { text: '    return solution;',  color: 'text-amber-600 dark:text-amber-400'   },
        { text: '  }',                   color: 'text-violet-600 dark:text-violet-400' },
      ],
    },
    {
      filename: 'mobile.dart',
      lines: [
        { text: 'class MobileApp {',     color: 'text-violet-600 dark:text-violet-400' },
        { text: '  final platforms = [', color: 'text-sky-600 dark:text-sky-400'       },
        { text: '    "Android",',        color: 'text-emerald-600 dark:text-green-400' },
        { text: '    "iOS",',            color: 'text-emerald-600 dark:text-green-400' },
        { text: '  ];',                  color: 'text-amber-600 dark:text-amber-400'   },
        { text: '}',                     color: 'text-violet-600 dark:text-violet-400' },
      ],
    },
  ],
}
