<template>
  <div class="profile-container">
    <el-row class="profile-panel" :gutter="20" justify="center">
      <el-col :span="12" class="left-panel">
<!--        <h2>About Me</h2>-->
        <div v-html="aboutMe" class="about-me"></div>
        <div class="globe-overlay" id="clustr-globe-container"></div>

      </el-col>
      <el-col :span="8" class="right-panel">
        <img :src="profileImage" alt="Profile Picture" class="profile-image" />
<!--        <div style="text-align: left">Contact Me</div>-->
        <div class="social-links">
          <el-row :gutter="10">
            <el-col v-for="(link, index) in socialLinks" :key="index" :span="8" class="contact-item">
              <a :href="link.url" target="_blank">
                <img :src="link.icon" class="icon" :alt="link.name" />
              </a>
            </el-col>
          </el-row>
        </div>

<!--        <div id="globe-container">-->
<!--        </div>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "ProfilePanel",
  mounted() {
    this.getMarkdown();

    // const existing = document.getElementById("globe-container");
    // if (!existing) {
    //   const script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.id = "clstr_globe";
    //   script.src = "//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";
    //   document.getElementById("clustr-globe-container")?.appendChild(script);
    // }

    const existing = document.getElementById("clstr_globe");
    if (!existing) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "clstr_globe";
      script.src = "//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";
      // script.src = "https://clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c";

      document.getElementById("clustr-globe-container")?.appendChild(script);
    }
  },
  data() {
    return {
      profileImage: "/profile.png", // 个人照片链接
      socialLinks: [
        { name: "GitHub", url: "https://github.com/peinuanqin-nus?tab=repositories", icon: "/icons/github.svg" },
        { name: "Google Scholar", url: "https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ&hl=en&oi=ao", icon: "/icons/googlescholar.svg" },
        { name: "Email", url: "mailto:e1322754@u.nus.edu", icon: "/icons/gmail.svg" },
        { name: "Twitter", url: "https://twitter.com/your-twitter", icon: "/icons/twiter.svg" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/peinuan-qin-2759301b3/", icon: "/icons/linkedin.svg" }
      ],
      aboutMe: ""
    };
  },
  methods: {
    getMarkdown() {
      fetch("/aboutme.md")
          .then(response => response.text())
          .then(text => {
            this.aboutMe = marked(text);
          })
          .catch(error => console.error("Error loading markdown:", error));
    }
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: 100vh;*/
}

.profile-panel {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-panel {
  text-align: left;
}

.about-me {
  font-size: 16px;
  line-height: 1.6;
}

.right-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-image {
  width: 200px;
  /*height: 150px;*/
  height: auto;
  /*border-radius: 50%;*/
  margin-bottom: 15px;
}

.social-links {
  margin-top: 15px;
  display: flex;
}

.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
}

/* 新增：地球图容器样式 */
.globe-container {
  margin-top: 20px;
  width: 200px;
  height: 200px;
}

.profile-wrapper {
  position: relative;
  display: inline-block;
}

.globe-overlay {
  position: absolute;
  top: 50px;
  /*right: -110px;*/
  left: -200px;
  width: 200px;
  height: 200px;
  z-index: 10;
}

</style>
