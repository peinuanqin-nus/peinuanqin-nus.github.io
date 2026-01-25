<template>
  <div class="profile-container">
    <el-row class="profile-panel" :gutter="64">
      <!-- Left: About -->
      <el-col :span="15" class="left-panel">
        <!-- Globe as background -->
        <div class="globe-bg" id="clustr-globe-container"></div>

        <div class="about-me" v-html="aboutMe"></div>
      </el-col>

      <!-- Right: Profile -->
      <el-col :span="9" class="right-panel">
        <div class="photo-frame">
          <img
              :src="profileImage"
              alt="Profile Picture"
              class="profile-image"
          />
        </div>

        <div class="social-links">
          <a
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img :src="link.icon" class="icon" :alt="link.name" />
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "ProfilePanel",
  data() {
    return {
      profileImage: "/profile.png",
      socialLinks: [
        {
          name: "GitHub",
          url: "https://github.com/peinuanqin-nus",
          icon: "/icons/github.svg"
        },
        {
          name: "Google Scholar",
          url: "https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ",
          icon: "/icons/googlescholar.svg"
        },
        {
          name: "Email",
          url: "mailto:e1322754@u.nus.edu",
          icon: "/icons/gmail.svg"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/peinuan-qin-2759301b3/",
          icon: "/icons/linkedin.svg"
        }
      ],
      aboutMe: ""
    };
  },
  mounted() {
    this.getMarkdown();
  },
  methods: {
    getMarkdown() {
      fetch("/aboutme.md")
          .then((r) => r.text())
          .then((text) => {
            this.aboutMe = marked(text);
          });
    }
  }
};
</script>

<style scoped>
/* ===== Layout ===== */

.profile-container {
  display: flex;
  justify-content: center;
  /*padding: 90px 32px;*/
  padding: 10px 32px;
}

.profile-panel {
  width: 100%;
  max-width: 1200px;
  align-items: flex-start;
}

/* ===== Left ===== */

.left-panel {
  position: relative;
}

.about-me {
  font-size: 16px;
  line-height: 1.8;
  max-width: 720px;
  position: relative;
  z-index: 1;
}

.about-me h1,
.about-me h2 {
  margin-top: 32px;
  margin-bottom: 12px;
}

.about-me p {
  margin-bottom: 18px;
}

/* ===== Globe (true background) ===== */

.globe-bg {
  position: absolute;
  top: -60px;
  left: -180px;
  width: 260px;
  height: 260px;
  opacity: 0.35;
  pointer-events: none;
  z-index: 0;
}

/* ===== Right ===== */

.right-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 120px;
}

/* Photo frame */
.photo-frame {
  padding: 10px;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 28px;
}

.profile-image {
  width: 240px;
  height: auto;
  display: block;
}

/* ===== Social ===== */

.social-links {
  display: flex;
  gap: 20px;
}

.icon {
  width: 24px;
  height: 24px;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.icon:hover {
  opacity: 1;
}

/* ===== Responsive ===== */

@media (max-width: 1024px) {
  .profile-panel {
    flex-direction: column;
  }

  .right-panel {
    position: static;
    margin-top: 48px;
  }

  .globe-bg {
    display: none;
  }
}
</style>
