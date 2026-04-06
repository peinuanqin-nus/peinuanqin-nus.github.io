<template>
  <el-container>
    <el-header class="fixed-header">
      <div class="nav-bar">
        <div class="brand-block" @click="scrollToSection('profile')">
          <span class="brand-mark">PQ</span>
          <div class="brand-text">
            <span class="title">{{ userName }}</span>
            <span class="subtitle">Human-AI Interaction Research</span>
          </div>
        </div>

        <div class="nav-links">
          <span @click="scrollToSection('profile')">Profile</span>
          <span @click="scrollToSection('recent_news')">Recent News</span>
          <span @click="scrollToSection('projects')">Projects</span>
          <span @click="scrollToSection('collaborators')">Collaborators</span>
        </div>
      </div>
    </el-header>

    <div class="header-spacer"></div>

    <el-main class="main_container">
      <section id="profile" class="page-section profile-section">
        <ProfilePanel />
      </section>

      <section id="recent_news" class="page-section">
        <RecentNews />
      </section>

      <section id="projects" class="page-section">
        <ProjectPanel />
      </section>

      <section id="collaborators" class="page-section">
        <CollaboratorPanel />
      </section>
    </el-main>
  </el-container>
</template>

<script>
import ProfilePanel from "@/components/ProfilePanel";
import RecentNews from "@/components/RecentNews";
import ProjectPanel from "@/components/ProjectPanel";
import CollaboratorPanel from "@/components/CollaboratorPanel";

export default {
  name: "PersonalHomepage",
  components: { CollaboratorPanel, ProjectPanel, RecentNews, ProfilePanel },
  data() {
    return {
      userName: "Qin Peinuan"
    };
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 122;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Spectral', serif;
  background:
      radial-gradient(circle at top left, rgba(210, 227, 215, 0.92) 0%, rgba(245, 238, 224, 0.96) 28%, rgba(251, 249, 244, 0.98) 60%, #ffffff 100%);
  margin: 0;
  color: #1f1f1f;
}

:root {
  --page-max-width: 1200px;
  --page-side-padding: 28px;
  --header-height: 82px;
  --section-gap: 84px;
}

.main_container {
  width: 100%;
  padding: 0 0 72px;
  box-sizing: border-box;
  background: transparent;
}

.header-spacer {
  height: calc(var(--header-height) + 28px);
  flex-shrink: 0;
}

.el-header {
  color: #17322e;
  text-align: left;
  padding: 0;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 999;
  background: rgba(246, 242, 233, 0.88);
  backdrop-filter: blur(18px);
  color: #17322e;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(20, 92, 82, 0.1);
  box-shadow: 0 10px 28px rgba(25, 42, 38, 0.05);
}

.nav-bar {
  width: 100%;
  max-width: var(--page-max-width);
  margin: auto;
  padding: 0 var(--page-side-padding);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-block {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #145c52, #2c796d);
  color: #f8f7f2;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.nav-links span {
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  color: #36554f;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(20, 92, 82, 0.08);
  transition: 0.2s;
  cursor: pointer;
}

.nav-links span:hover {
  color: #145c52;
  background: rgba(20, 92, 82, 0.08);
  transform: translateY(-1px);
}

.title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.02em;
  color: #17322e;
}

.subtitle {
  margin-top: 2px;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7f79;
}

.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.page-section {
  width: 100%;
  padding: 0 var(--page-side-padding);
  box-sizing: border-box;
  margin-bottom: var(--section-gap);
  scroll-margin-top: calc(var(--header-height) + 28px);
}

.profile-section {
  margin-bottom: 64px;
  padding-top: 8px;
}

.page-section:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  :root {
    --page-side-padding: 18px;
    --header-height: 96px;
    --section-gap: 60px;
  }

  .main_container {
    padding-top: 0;
  }

  .header-spacer {
    height: calc(var(--header-height) + 20px);
  }

  .nav-bar {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
  }

  .nav-links span {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
