export type Locale = 'ru' | 'en'

export interface ContactLink {
  label: string
  value: string
  href: string
  external: boolean
}

export interface SiteContent {
  path: '/' | '/en/'
  meta: {
    title: string
    description: string
  }
  alternate: {
    locale: Locale
    label: string
    path: '/' | '/en/'
  }
  name: string
  role: string
  summary: string
  companyPrefix: string
  company: {
    name: string
    url: string
  }
  interests: string[]
  contacts: ContactLink[]
  sourceLabel: string
}

export const siteSourceUrl = 'https://github.com/13VF/curly-barnacle'

export const siteContent: Record<Locale, SiteContent> = {
  ru: {
    path: '/',
    meta: {
      title: 'Рами Оста — Тимлид',
      description: 'Вибекоднутый сайт-визитка.',
    },
    alternate: {
      locale: 'en',
      label: 'en',
      path: '/en/',
    },
    name: 'Рами Оста',
    role: 'Тимлид',
    summary:
      'Работаю руководителем группы в бигтех e-commerce, опыт в IT >10 лет, люблю фронтенд/процессы/коммуникации и прозрачность.',
    companyPrefix: 'Сейчас работаю в',
    company: {
      name: 'Ozon Tech',
      url: 'https://ozon.tech/',
    },
    interests: ['Videogames + Streaming', 'GYM + Bycicle', 'Ножи + Походы', 'Грибы и растения'],
    contacts: [
      {
        label: 'email',
        value: 'TODO',
        href: 'mailto:TODO',
        external: false,
      },
      {
        label: 'github',
        value: '13VF',
        href: 'https://github.com/13VF',
        external: true,
      },
      {
        label: 'linkedin',
        value: 'TODO',
        href: 'TODO',
        external: true,
      },
    ],
    sourceLabel: 'исходный код → github',
  },
  en: {
    path: '/en/',
    meta: {
      title: 'Rami Osta — Team Lead',
      description: 'A vibe-coded personal card site.',
    },
    alternate: {
      locale: 'ru',
      label: 'ru',
      path: '/',
    },
    name: 'Rami Osta',
    role: 'Team Lead',
    summary:
      'I lead a team at a big-tech e-commerce company, have over 10 years of IT experience, and love frontend, processes, communication, and transparency.',
    companyPrefix: 'I currently work at',
    company: {
      name: 'Ozon Tech',
      url: 'https://ozon.tech/',
    },
    interests: [
      'Video games + streaming',
      'Gym + cycling',
      'Knives + hiking',
      'Mushrooms and plants',
    ],
    contacts: [
      {
        label: 'email',
        value: 'TODO',
        href: 'mailto:TODO',
        external: false,
      },
      {
        label: 'github',
        value: '13VF',
        href: 'https://github.com/13VF',
        external: true,
      },
      {
        label: 'linkedin',
        value: 'TODO',
        href: 'TODO',
        external: true,
      },
    ],
    sourceLabel: 'source → github',
  },
}
