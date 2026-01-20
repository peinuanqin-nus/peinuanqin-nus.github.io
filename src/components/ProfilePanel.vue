<!--<template>-->
<!--  <div class="profile-container">-->
<!--&lt;!&ndash;    <el-row class="profile-panel" :gutter="20" justify="center">&ndash;&gt;-->
<!--    <el-row class="profile-panel" :gutter="24" justify="center">-->
<!--&lt;!&ndash;      <el-col :span="12" class="left-panel">&ndash;&gt;-->
<!--      <el-col :span="14" class="left-panel">-->
<!--&lt;!&ndash;        <h2>About Me</h2>&ndash;&gt;-->
<!--        <div v-html="aboutMe" class="about-me"></div>-->
<!--        <div class="globe-overlay" id="clustr-globe-container"></div>-->

<!--      </el-col>-->
<!--      <el-col :span="8" class="right-panel">-->
<!--        <img :src="profileImage" alt="Profile Picture" class="profile-image" />-->
<!--&lt;!&ndash;        <div style="text-align: left">Contact Me</div>&ndash;&gt;-->
<!--        <div class="social-links">-->
<!--          <el-row :gutter="10">-->
<!--            <el-col v-for="(link, index) in socialLinks" :key="index" :span="8" class="contact-item">-->
<!--              <a :href="link.url" target="_blank">-->
<!--                <img :src="link.icon" class="icon" :alt="link.name" />-->
<!--              </a>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </div>-->

<!--&lt;!&ndash;        <div id="globe-container">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { marked } from "marked";-->
<!--export default {-->
<!--  name: "ProfilePanel",-->
<!--  mounted() {-->
<!--    this.getMarkdown();-->

<!--    // const existing = document.getElementById("globe-container");-->
<!--    // if (!existing) {-->
<!--    //   const script = document.createElement("script");-->
<!--    //   script.type = "text/javascript";-->
<!--    //   script.id = "clstr_globe";-->
<!--    //   script.src = "//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";-->
<!--    //   document.getElementById("clustr-globe-container")?.appendChild(script);-->
<!--    // }-->

<!--    const existing = document.getElementById("clstr_globe");-->
<!--    if (!existing) {-->
<!--      const script = document.createElement("script");-->
<!--      script.type = "text/javascript";-->
<!--      script.id = "clstr_globe";-->
<!--      script.src = "//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";-->
<!--      // script.src = "https://clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";-->

<!--      document.getElementById("clustr-globe-container")?.appendChild(script);-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      profileImage: "/profile.png", // 个人照片链接-->
<!--      socialLinks: [-->
<!--        { name: "GitHub", url: "https://github.com/peinuanqin-nus?tab=repositories", icon: "/icons/github.svg" },-->
<!--        { name: "Google Scholar", url: "https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ&hl=en&oi=ao", icon: "/icons/googlescholar.svg" },-->
<!--        { name: "Email", url: "mailto:e1322754@u.nus.edu", icon: "/icons/gmail.svg" },-->
<!--        { name: "Twitter", url: "https://twitter.com/your-twitter", icon: "/icons/twiter.svg" },-->
<!--        { name: "LinkedIn", url: "https://www.linkedin.com/in/peinuan-qin-2759301b3/", icon: "/icons/linkedin.svg" }-->
<!--      ],-->
<!--      aboutMe: ""-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    getMarkdown() {-->
<!--      fetch("/aboutme.md")-->
<!--          .then(response => response.text())-->
<!--          .then(text => {-->
<!--            this.aboutMe = marked(text);-->
<!--          })-->
<!--          .catch(error => console.error("Error loading markdown:", error));-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.profile-container {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  /*height: 100vh;*/-->
<!--}-->

<!--.profile-panel {-->
<!--  width: 50%;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.left-panel {-->
<!--  text-align: left;-->
<!--}-->

<!--.about-me {-->
<!--  font-size: 16px;-->
<!--  line-height: 1.6;-->
<!--}-->

<!--.right-panel {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  text-align: center;-->
<!--}-->

<!--.profile-image {-->
<!--  width: 200px;-->
<!--  /*height: 150px;*/-->
<!--  height: auto;-->
<!--  /*border-radius: 50%;*/-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--.social-links {-->
<!--  margin-top: 15px;-->
<!--  display: flex;-->
<!--}-->

<!--.contact-item {-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->

<!--.icon {-->
<!--  width: 24px;-->
<!--  height: 24px;-->
<!--}-->

<!--/* 新增：地球图容器样式 */-->
<!--.globe-container {-->
<!--  margin-top: 20px;-->
<!--  width: 200px;-->
<!--  height: 200px;-->
<!--}-->

<!--.profile-wrapper {-->
<!--  position: relative;-->
<!--  display: inline-block;-->
<!--}-->

<!--.globe-overlay {-->
<!--  position: absolute;-->
<!--  top: 50px;-->
<!--  /*right: -110px;*/-->
<!--  left: -200px;-->
<!--  width: 200px;-->
<!--  height: 200px;-->
<!--  z-index: 10;-->
<!--}-->

<!--</style>-->



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

    // const existing = document.getElementById("clstr_globe");
    // if (!existing) {
    //   const script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.id = "clstr_globe";
    //   script.src =
    //       "//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";
    //   document
    //       .getElementById("clustr-globe-container")
    //       ?.appendChild(script);
    // }
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
