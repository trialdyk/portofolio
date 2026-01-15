<script setup lang="ts">
import clsx from 'clsx'
import { contactConfig } from '~/config/contact'

interface FooterLinkItem {
  title: string
  href: string
  label?: 'new' | 'soon'
  isInternal?: boolean
}

interface FooterGroup {
  title: string
  links: FooterLinkItem[]
}

const footerGroups: FooterGroup[] = [
  {
    title: 'Work',
    links: [
      { title: 'Skills and Tools', href: '/skills-and-tools' },
      { title: 'Experience', href: '/experience' },
      { title: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Learn',
    links: [
      { title: 'Blog', href: '/blog', label: 'soon' },
      { title: 'T.I.L', href: '/today-i-learned', label: 'soon' },
    ]
  },
  {
    title: 'This Site',
    links: [
      { title: 'Source Code', href: 'https://github.com/trialdyk/portofolio', isInternal: false },
    ]
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    :class="clsx(
      'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
      'dark:border-divider-dark dark:text-slate-200'
    )"
  >
    <div :class="clsx('content-wrapper')">
      <div :class="clsx('py-10 font-semibold')">
        <div :class="clsx('flex flex-col-reverse gap-16', 'lg:flex-row')">
          <!-- Left Section - About Me -->
          <div :class="clsx('flex-1')">
            <div :class="clsx('max-w-[348px]')">
              <div
                :class="clsx(
                  'mb-3 text-[13px] text-slate-600',
                  'dark:text-slate-400'
                )"
              >
                About Me
              </div>
              <p :class="clsx('mb-4 font-normal leading-relaxed')">
                I'm {{ contactConfig.name.split(' ')[2] || contactConfig.name.split(' ')[0] }}, a <strong>fullstack developer</strong> based in {{ contactConfig.location.city }}, {{ contactConfig.location.country }}.
              </p>
              <ul :class="clsx('-ml-2 flex gap-1')">
                <li v-for="social in contactConfig.socialLinks" :key="social.name">
                  <a
                    :href="social.url"
                    target="_blank"
                    rel="noreferrer nofollow"
                    :class="clsx('flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors')"
                    :aria-label="`My ${social.name} profile`"
                    :title="`My ${social.name} profile`"
                  >
                    <Icon :name="social.icon" class="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Section - Links -->
          <div
            :class="clsx(
              '-mx-2 flex flex-1 flex-col gap-8',
              'sm:flex-row sm:gap-16 lg:mx-0'
            )"
          >
            <div :class="clsx('flex', 'sm:gap-16')">
              <!-- Work -->
              <div :class="clsx('flex-1')">
                <div
                  :class="clsx(
                    'mb-2 px-2 text-[13px] text-slate-600',
                    'dark:text-slate-400'
                  )"
                >
                  Work
                </div>
                <ul :class="clsx('flex flex-col')">
                  <li v-for="link in footerGroups[0].links" :key="link.href">
                    <template v-if="link.label === 'soon'">
                      <span :class="clsx('footer-link footer-link--soon')">
                        {{ link.title }}
                        <span :class="clsx('footer-link__label')">{{ link.label }}</span>
                      </span>
                    </template>
                    <template v-else>
                      <NuxtLink :to="link.href" :class="clsx('footer-link')">
                        {{ link.title }}
                        <span v-if="link.label" :class="clsx('footer-link__label')">{{ link.label }}</span>
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
              </div>

              <!-- Learn -->
              <div :class="clsx('flex-1')">
                <div
                  :class="clsx(
                    'mb-2 px-2 text-[13px] text-slate-600',
                    'dark:text-slate-400'
                  )"
                >
                  Learn
                </div>
                <ul :class="clsx('flex flex-col')">
                  <li v-for="link in footerGroups[1].links" :key="link.href">
                    <template v-if="link.label === 'soon'">
                      <span :class="clsx('footer-link footer-link--soon')">
                        {{ link.title }}
                        <span :class="clsx('footer-link__label')">{{ link.label }}</span>
                      </span>
                    </template>
                    <template v-else>
                      <NuxtLink :to="link.href" :class="clsx('footer-link')">
                        {{ link.title }}
                        <span v-if="link.label" :class="clsx('footer-link__label')">{{ link.label }}</span>
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
              </div>
            </div>

            <div :class="clsx('flex', 'sm:gap-16')">
              <!-- This Site -->
              <div :class="clsx('flex-1')">
                <div
                  :class="clsx(
                    'mb-2 px-2 text-[13px] text-slate-600',
                    'dark:text-slate-400'
                  )"
                >
                  This Site
                </div>
                <ul :class="clsx('flex flex-col')">
                  <li v-for="link in footerGroups[2].links" :key="link.href">
                    <template v-if="link.isInternal === false">
                      <a
                        :href="link.href"
                        target="_blank"
                        rel="noreferrer nofollow"
                        :class="clsx('footer-link')"
                      >
                        {{ link.title }}
                        <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="h-3.5 w-3.5" />
                      </a>
                    </template>
                    <template v-else>
                      <NuxtLink :to="link.href" :class="clsx('footer-link')">
                        {{ link.title }}
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        :class="clsx(
          'border-divider-light flex justify-between border-t py-6 text-xs',
          'dark:border-divider-dark'
        )"
      >
        <div :class="clsx('font-semibold')">
          © {{ currentYear }}, {{ contactConfig.name }}
        </div>
        <div :class="clsx('text-slate-500', 'dark:text-slate-400')">
          Made with ❤️ in {{ contactConfig.location.city }}, {{ contactConfig.location.country }}
        </div>
      </div>
    </div>
  </footer>
</template>
