<template>
  <div class="portfolio">
    <button class="skip-link" @click="scrollToSection('profile')">Skip to content</button>
    <header class="site-header">
      <div class="nav-bar page-width">
        <button class="brand" aria-label="Peinuan Qin, back to profile" @click="scrollToSection('profile')">
          <span>Qin Peinuan</span>
        </button>
        <nav aria-label="Main navigation">
          <button
              v-for="section in sections"
              :key="section.id"
              :aria-current="activeSection === section.id ? 'location' : null"
              @click="scrollToSection(section.id)"
          >{{ section.label }}</button>
        </nav>
      </div>
    </header>

    <main class="page-width">
      <section id="profile" class="profile-section" aria-label="Profile" tabindex="-1">
        <ProfilePanel />
      </section>
      <section id="projects" class="page-section" aria-label="Projects" tabindex="-1">
        <ProjectPanel />
      </section>
      <section id="recent_news" v-reveal class="page-section" aria-label="Recent News" tabindex="-1">
        <RecentNews />
      </section>
      <section id="collaborators" v-reveal class="page-section" aria-label="Collaborators" tabindex="-1">
        <CollaboratorPanel />
      </section>
    </main>
    <footer class="site-footer page-width">
      <span>Peinuan Qin</span>
      <span>Human-AI Interaction Research</span>
      <button class="text-button" @click="scrollToSection('profile')">Back to top <span aria-hidden="true">↑</span></button>
    </footer>
  </div>
</template>

<script>
import ProfilePanel from '@/components/ProfilePanel';
import RecentNews from '@/components/RecentNews';
import ProjectPanel from '@/components/ProjectPanel';
import CollaboratorPanel from '@/components/CollaboratorPanel';
import reveal from '@/directives/reveal';

export default {
  name: 'PersonalHomepage',
  components: { CollaboratorPanel, ProjectPanel, RecentNews, ProfilePanel },
  directives: { reveal },
  data() {
    return {
      activeSection: 'profile',
      sections: [
        { id: 'profile', label: 'Profile' },
        { id: 'projects', label: 'Projects' },
        { id: 'recent_news', label: 'Recent News' },
        { id: 'collaborators', label: 'Collaborators' }
      ]
    };
  },
  mounted() {
    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) this.activeSection = entry.target.id;
      });
    }, { rootMargin: '-110px 0px -60% 0px' });
    this.sections.forEach(({ id }) => this.sectionObserver.observe(document.getElementById(id)));
  },
  beforeDestroy() {
    if (this.sectionObserver) this.sectionObserver.disconnect();
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (!section) return;
      this.activeSection = id;
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }
};
</script>

<style src="@/assets/portfolio.css"></style>
