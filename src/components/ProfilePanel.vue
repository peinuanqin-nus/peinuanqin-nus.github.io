<template>
  <div class="profile">
    <div class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Human-AI Interaction Research</p>
        <h1 class="research-statement">Designing AI that supports how people <strong><span class="keyword-blue">communicate</span>, <span class="keyword-green">learn</span>, <span class="keyword-black">and</span> <span class="keyword-red">create.</span></strong></h1>
        <div class="profile-meta">
          <p class="affiliation">PhD Candidate · National University of Singapore</p>
          <div class="social-links" aria-label="Social and contact links">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="link.name" :title="link.name">
              <img :src="link.icon" width="18" height="18" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="portrait">
        <img src="/images/peinuan-960.webp" srcset="/images/peinuan-480.webp 480w, /images/peinuan-960.webp 960w" sizes="(max-width: 600px) 80px, (max-width: 900px) 132px, 150px" width="960" height="1302" alt="Peinuan Qin standing on a city street, with the original streetscape in the background" fetchpriority="high" />
      </div>
    </div>
    <details class="about-disclosure">
      <summary>More about me <span class="disclosure-arrow el-icon-arrow-down" aria-hidden="true"></span></summary>
      <div class="about-content">
        <div v-if="aboutMe" class="about-me" v-html="aboutMe"></div>
        <p v-else-if="loadError" role="alert">The biography couldn't be loaded. <button class="text-button" @click="getMarkdown">Try again</button></p>
        <p v-else role="status">Loading biography…</p>
      </div>
    </details>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'ProfilePanel',
  data() {
    return {
      socialLinks: [
        { name: 'Google Scholar', url: 'https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ', icon: '/icons/googlescholar.svg' },
        { name: 'GitHub', url: 'https://github.com/peinuanqin-nus', icon: '/icons/github.svg' },
        { name: 'Email', url: 'mailto:e1322754@u.nus.edu', icon: '/icons/gmail.svg' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/peinuan-qin-2759301b3/', icon: '/icons/linkedin.svg' }
      ],
      aboutMe: '',
      loadError: false
    };
  },
  mounted() { this.getMarkdown(); },
  methods: {
    async getMarkdown() {
      this.loadError = false;
      try {
        const response = await fetch('/aboutme.md');
        if (!response.ok) throw new Error('Biography unavailable');
        this.aboutMe = marked(await response.text());
      } catch (error) {
        this.loadError = true;
      }
    }
  }
};
</script>

<style scoped>
.profile { padding-top: 36px; margin-bottom: var(--section-gap); }
.hero { display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 32px; align-items: center; }
.hero-copy { min-width: 0; grid-column: 2; grid-row: 1; }
.eyebrow { margin-bottom: 12px; }
.research-statement { max-width: 760px; font-family: var(--font-display); font-size: clamp(28px, 2.5vw, 32px); line-height: 1.35; letter-spacing: -.015em; font-weight: 400; margin: 0 0 16px; text-wrap: balance; }
.research-statement strong { font-weight: 500; color: var(--text); }
.keyword-blue { color: var(--google-blue); }
.keyword-green { color: var(--google-green); }
.keyword-red { color: var(--google-red); }
.keyword-black { color: var(--text); }
.profile-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 20px; }
.affiliation { margin: 0; color: var(--muted); font-size: 14px; font-weight: 400; }
.social-links { display: flex; gap: 6px; }
.social-links a { display: grid; place-items: center; width: 40px; height: 40px; border-radius: var(--control-radius); }
.social-links a:hover { background: var(--surface-soft); transform: translateY(-2px); }
.social-links img { opacity: .82; }
.portrait { grid-column: 1; grid-row: 1; border-radius: var(--radius); overflow: hidden; aspect-ratio: 5 / 6; background: var(--surface-soft); }
.portrait img { width: 100%; height: 100%; object-fit: cover; }
.about-disclosure { margin-top: 28px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: transparent; }
summary { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 52px; padding: 12px 0; cursor: pointer; list-style: none; font-size: 14px; font-weight: 500; color: var(--text); }
summary::-webkit-details-marker { display: none; }
summary:focus-visible { outline-offset: -3px; }
.disclosure-arrow { color: var(--muted); font-size: 14px; }
details[open] .disclosure-arrow { transform: rotate(180deg); }
.about-content { max-width: 76ch; padding: 4px 0 20px; font-size: 16px; line-height: 1.7; }
.about-me ::v-deep p { margin-bottom: 18px; }
.about-me ::v-deep a { text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 3px; }
.about-me ::v-deep p:last-child { margin-bottom: 0; }
@media (prefers-reduced-motion: no-preference) { .disclosure-arrow { transition: transform .2s ease; } }
@media (max-width: 900px) {
  .profile { padding-top: 32px; }
  .hero { grid-template-columns: 132px minmax(0, 1fr); gap: 26px; }
  .research-statement { font-size: 28px; }
}
@media (max-width: 600px) {
  .profile { padding-top: 24px; }
  .hero { grid-template-columns: 80px minmax(0, 1fr); gap: 0 18px; align-items: start; }
  .hero-copy, .profile-meta { display: contents; }
  .eyebrow { grid-column: 2; grid-row: 1; align-self: end; font-size: 10px; margin-bottom: 6px; }
  .affiliation { grid-column: 2; grid-row: 2; font-size: 13px; line-height: 1.6; }
  .research-statement { grid-column: 1 / -1; grid-row: 3; font-size: 26px; margin: 24px 0 16px; }
  .social-links { grid-column: 1 / -1; grid-row: 4; gap: 4px; }
  .social-links a { width: 36px; height: 40px; }
  .portrait { grid-column: 1; grid-row: 1 / 3; width: 80px; max-width: 100%; }
  .about-disclosure { margin-top: 24px; }
}
</style>
