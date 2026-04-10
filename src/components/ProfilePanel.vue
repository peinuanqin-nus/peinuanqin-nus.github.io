<template>
  <div class="profile-container">
    <el-row class="profile-panel" :gutter="64">
      <el-col :xs="24" :sm="24" :md="15" class="left-panel">
        <div class="globe-bg" id="clustr-globe-container"></div>

        <div class="about-me" v-html="aboutMe"></div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="9" class="right-panel">
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
      profileImage: "/profile_official.png",
      // profileImage: "/profile_official_blue.jpg",
      // profileImage: "/profile_official_green.png",
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
  padding: 4px 18px;
}

.profile-panel {
  width: 100%;
  max-width: 1120px;
  align-items: flex-start;
}

/* ===== Left ===== */

.left-panel {
  position: relative;
}

.about-me {
  font-size: 15px;
  line-height: 1.72;
  max-width: 680px;
  position: relative;
  z-index: 1;
}

.about-me h1,
.about-me h2 {
  margin-top: 26px;
  margin-bottom: 10px;
}

.about-me p {
  margin-bottom: 14px;
}

/* ===== Globe (true background) ===== */

.globe-bg {
  position: absolute;
  top: -60px;
  left: -180px;
  width: 220px;
  height: 220px;
  opacity: 0.28;
  pointer-events: none;
  z-index: 0;
}

/* ===== Right ===== */

.right-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 106px;
}

/* Photo frame */
.photo-frame {
  padding: 8px;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

.profile-image {
  width: 210px;
  height: 210px;
  object-fit: cover;
  object-position: center center;
  border-radius: 16px;
  display: block;
}

/* ===== Social ===== */

.social-links {
  display: flex;
  gap: 16px;
}

.icon {
  width: 20px;
  height: 20px;
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
    margin-top: 34px;
  }

  .globe-bg {
    display: none;
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 0;
  }

  .profile-panel {
    display: block;
  }

  .about-me {
    max-width: 100%;
    font-size: 14px;
    line-height: 1.68;
  }

  .about-me h1,
  .about-me h2 {
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .photo-frame {
    width: 128px;
    max-width: none;
    margin: 0;
    flex-shrink: 0;
  }

  .profile-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .right-panel {
    align-items: flex-start;
    flex-direction: row;
    gap: 14px;
    margin-top: 24px;
  }

  .social-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 14px;
    align-content: start;
  }

  .icon {
    width: 18px;
    height: 18px;
  }
}
</style>
