<script setup lang="ts">
import { computed } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
import { siteContent, siteSourceUrl, type Locale } from '~/data/site'

const props = defineProps<{
  locale: Locale
}>()

const content = computed(() => siteContent[props.locale])
const siteUrl = String(useRuntimeConfig().public.siteUrl).replace(/\/$/, '')
const absoluteUrl = (path: string) => `${siteUrl}${path}`

useHead(() => ({
  htmlAttrs: {
    lang: props.locale,
  },
  title: content.value.meta.title,
  meta: [
    { name: 'description', content: content.value.meta.description },
    { property: 'og:title', content: content.value.meta.title },
    { property: 'og:description', content: content.value.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: absoluteUrl(content.value.path) },
    { name: 'twitter:card', content: 'summary' },
  ],
  link: [
    { rel: 'canonical', href: absoluteUrl(content.value.path) },
    { rel: 'alternate', hreflang: 'ru', href: absoluteUrl('/') },
    { rel: 'alternate', hreflang: 'en', href: absoluteUrl('/en/') },
    { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl('/') },
  ],
}))
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <NuxtLink
        class="language-link"
        :to="content.alternate.path"
        :hreflang="content.alternate.locale"
      >
        <span aria-hidden="true">$</span> lang {{ content.alternate.label }}
      </NuxtLink>
    </header>

    <main class="site-main">
      <section class="hero-section">
        <p class="section-prompt" aria-hidden="true">$ whoami</p>
        <h1>{{ content.name }}</h1>
        <p class="summary">{{ content.summary }}</p>
      </section>

      <section aria-labelledby="current-role-heading">
        <h2 id="current-role-heading" class="section-prompt">$ current-role</h2>
        <p class="role">{{ content.role }}</p>
        <p class="company-line">
          {{ content.companyPrefix }}
          <a :href="content.company.url" target="_blank" rel="noopener noreferrer">
            {{ content.company.name }}
          </a>
        </p>
      </section>

      <section aria-labelledby="interests-heading">
        <h2 id="interests-heading" class="section-prompt">$ interests</h2>
        <ul class="interest-list">
          <li v-for="interest in content.interests" :key="interest">{{ interest }}</li>
        </ul>
      </section>

      <section aria-labelledby="contacts-heading">
        <h2 id="contacts-heading" class="section-prompt">$ contacts</h2>
        <ul class="contact-list">
          <li v-for="contact in content.contacts" :key="contact.label">
            <span class="contact-label">{{ contact.label }}</span>
            <a
              :href="contact.href"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener noreferrer' : undefined"
            >
              <span aria-hidden="true">→ </span>{{ contact.value }}
            </a>
          </li>
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <a :href="siteSourceUrl" target="_blank" rel="noopener noreferrer">
        {{ content.sourceLabel }}
      </a>
    </footer>
  </div>
</template>
