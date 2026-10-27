<template>
  <article class="publication-row">
    <div class="image-wrap">
      <p v-if="venueLabel" class="venue-banner">{{ venueLabel }}</p>
      <picture v-if="project.image">
        <source :srcset="project.image.replace(/\.png$/, '.webp')" type="image/webp" />
        <img :src="project.image" :alt="project.title.trim() + ' research overview'" class="pub-image" width="200" height="132" loading="lazy" />
      </picture>
      <div v-else class="document-preview" aria-hidden="true"><i class="el-icon-document"></i></div>
    </div>
    <div class="pub-meta">
      <h4 class="pub-title">{{ project.title }}</h4>
      <p v-if="project.award" class="pub-award"><span class="award-icon" aria-hidden="true"><i class="el-icon-trophy"></i></span>{{ project.award }}</p>
      <div class="pub-authors" v-html="authorsHtml"></div>
      <div v-if="project.labels && project.labels.length" class="pub-labels">
        <span v-for="(label, index) in project.labels" :key="index" class="project-label">{{ label.title }}</span>
      </div>
      <div class="pub-actions resource-links">
        <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" :aria-label="'Read paper: ' + project.title">Paper <span aria-hidden="true">↗</span></a>
        <a v-else-if="project.arxiv" :href="project.arxiv" target="_blank" rel="noopener noreferrer" :aria-label="'Read on arXiv: ' + project.title">arXiv <span aria-hidden="true">↗</span></a>
        <button class="abstract-button" :aria-expanded="showAbstract ? 'true' : 'false'" :aria-controls="'abstract-' + project.id" @click="showAbstract = !showAbstract">Abstract <span aria-hidden="true">{{ showAbstract ? '−' : '+' }}</span></button>
      </div>
    </div>
    <div v-show="showAbstract" :id="'abstract-' + project.id" class="pub-abstract" v-html="abstractHtml"></div>
  </article>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'PublicationRow',
  props: { project: { type: Object, required: true } },
  data() { return { showAbstract: false }; },
  computed: {
    venueLabel() {
      const year = this.project.year || '';
      const match = year.match(/^(\d{4})\s+(.+)$/);
      return match ? `${match[2]} ${match[1]}` : [this.project.published, year].filter(Boolean).join(' · ');
    },
    authorsHtml() { return marked(this.project.author || ''); },
    abstractHtml() { return marked(this.project.abstract || 'Abstract not available.'); }
  }
};
</script>

<style scoped>
.publication-row { display: grid; grid-template-columns: 144px minmax(0, 1fr); column-gap: 24px; row-gap: 0; padding: 22px 0; }
.publication-row + .publication-row { border-top: 1px solid var(--line); }
.image-wrap { background: var(--image-bg); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; align-self: start; }
.image-wrap picture { display: block; padding: 6px; }
.venue-banner { margin: 0; padding: 8px; border-bottom: 1px solid var(--line); background: var(--surface-soft); text-align: center; font-size: 12px; line-height: 1.4; color: var(--accent); font-weight: 600; }
.pub-image { width: 100%; height: auto; aspect-ratio: 200 / 132; object-fit: contain; }
.document-preview { display: grid; place-items: center; height: 100px; color: var(--muted); font-size: 34px; }
.pub-title { font-size: 17px; font-weight: 500; line-height: 1.5; letter-spacing: -.01em; margin: 0 0 6px; text-wrap: pretty; }
.pub-authors { color: var(--muted); font-size: 14px; line-height: 1.65; }
.pub-authors ::v-deep p { margin: 0; }
.pub-authors ::v-deep strong { color: var(--text); font-weight: 600; }
.pub-authors ::v-deep u { text-decoration: none; }
.pub-award { display: flex; align-items: center; gap: 7px; color: var(--accent); font-size: 13px; font-weight: 500; margin-bottom: 8px; }
.award-icon { display: inline-grid; place-items: center; flex: 0 0 24px; height: 24px; border-radius: 50%; background: var(--surface-soft); border: 1px solid var(--line); color: var(--text); font-size: 15px; }
.pub-labels { display: flex; flex-wrap: wrap; gap: 5px 14px; margin-top: 8px; font-size: 13px; color: var(--muted); }
.project-label { color: var(--accent); font-weight: 500; }
.pub-actions { margin-top: 12px; gap: 8px; }
.abstract-button { border: 1px solid var(--line); padding: 6px 13px; min-height: 36px; border-radius: var(--control-radius); background: var(--surface); color: var(--accent); font-size: var(--control-font-size); line-height: 1.4; font-weight: 500; }
.abstract-button:hover { background: var(--surface-soft); border-color: var(--muted); text-decoration: none; }
.abstract-button span { margin-left: 6px; }
.pub-abstract { grid-column: 2; padding: 14px 18px; border-left: 2px solid var(--accent); margin-top: 12px; background: var(--surface-soft); font-size: 16px; line-height: 1.7; color: var(--muted); overflow-wrap: anywhere; }
.pub-abstract ::v-deep p { margin: 0; }
@media (max-width: 900px) { .publication-row { grid-template-columns: 128px minmax(0, 1fr); column-gap: 20px; } }
@media (max-width: 600px) {
  .publication-row { grid-template-columns: 1fr; gap: 14px; padding: 24px 0; }
  .image-wrap { width: 132px; }
  .pub-title { font-size: 16px; }
  .pub-abstract { grid-column: 1; margin-top: 0; padding: 15px; }
  .abstract-button { min-height: 40px; }
}
</style>
