<template>
  <el-row class="profile-panel" :gutter="20">
    <el-col :span="8" class="left-panel">
      <el-card class="profile-card">
        <img :src="profileImage" alt="Profile Picture" class="profile-image" />
<!--        <hr>-->
        <div class="divider"></div>
        <div class="contact-info">
          <el-row :gutter="10">
            <el-col v-for="(link, index) in socialLinks" :key="index" :span="8" class="contact-item">
              <a :href="link.url" target="_blank">
                <img :src="link.icon" class="icon" :alt="link.name" />
              </a>
            </el-col>
          </el-row>
        </div>
<!--        <div class="contact-info">-->
<!--          <p><el-icon><el-icon-user /></el-icon> {{ userName }}</p>-->
<!--          <p>-->
<!--            <el-icon><el-icon-message /></el-icon>-->
<!--            <a :href="'mailto:' + email">{{ email }}</a>-->
<!--          </p>-->
<!--          <p>-->
<!--            <el-icon><el-icon-link /></el-icon>-->
<!--            <a :href="googleScholar" target="_blank">Google Scholar</a>-->
<!--          </p>-->
<!--        </div>-->
      </el-card>
    </el-col>
    <el-col :span="16" class="right-panel">
      <el-card class="intro-card">
        <h2>About Me</h2>
        <div v-html="aboutMe"></div>
<!--        <p>I am a CS PhD student at NUS, focusing on HCI and AI-assisted writing.</p>-->
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {marked} from "marked"
export default {
  name: "ProfilePanel",
  mounted() {
    this.getMarkdown()
  },

  data() {
    return {
      userName: "Qin Peinuan",
      profileImage: "/profile.png", // 换成你的照片链接
      email: "qinpeinuan@example.com", // 你的邮箱
      googleScholar: "https://scholar.google.com/citations?user=your-id", // 你的 Google Scholar 链接
      socialLinks: [
        { name: "GitHub", url: "https://github.com/peinuanqin-nus?tab=repositories", icon: "/icons/github.svg" },
        { name: "Google Scholar", url: "https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ&hl=en&oi=ao", icon: "/icons/googlescholar.svg" },
        { name: "Email", url: "mailto:e1322754@u.nus.edu", icon: "/icons/gmail.svg" },
        { name: "Twitter", url: "https://twitter.com/your-twitter", icon: "/icons/twiter.svg" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/peinuan-qin-2759301b3/", icon: "/icons/linkedin.svg" }
      ],
      aboutMe: ``,
    };
  },

  methods:{
    getMarkdown(){
      fetch("/aboutme.md")
          .then(response => response.text())
          .then(text => {
            this.aboutMe = marked(text);
          })
          .catch(error => console.error("Error loading markdown:", error));
    }
  },



};
</script>

<style scoped>
.profile-panel {
  margin: 20px 0;
}

.left-panel {
  display: flex;
  justify-content: center;
}

.profile-card {
  text-align: center;
  padding: 20px;
}



/*.profile-image {*/
/*  !*width: 100px;*!*/
/*  !*height: 100px;*!*/
/*  !*width: 100px;*!*/
/*  !*height: 200px;*!*/
/*  border-radius: 50%;*/
/*  margin-bottom: 15px;*/
/*}*/

.profile-image {
  width: 100%;
  max-width: 150px;
  height: auto;
  /*border-radius: 50%;*/
  margin-bottom: 15px;
}
.contact-info p {
  margin: 5px 0;
  font-size: 14px;
}

.contact-item {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  text-align: center;
  padding-top: 15px;
}

/*.contact-info a {*/
/*  text-decoration: none;*/
/*  color: #409eff;*/
/*}*/


.contact-item a {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #409eff;
}

.contact-item a:hover {
  opacity: 0.8;
}

.icon {
  width: 24px;
  height: 24px;
}

.right-panel .intro-card {
  padding: 20px;
  background-color: white;
  max-width: 600px;
  /*  text-align: center;*/
  /*  padding: 20px;*/
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Spectral', serif;
}

.divider {
  width: 80%; /* 控制宽度 */
  height: 1px; /* 细线 */
  background-color: #ddd; /* 浅色 */
  margin: 10px auto; /* 上下留白 */
}

/*markdown settings*/
.intro-card h1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.intro-card p {
  font-size: 14px;
  line-height: 1.5;
}

.intro-card ul {
  padding-left: 20px;
}

.intro-card li {
  margin-bottom: 5px;
}


::v-deep .el-card .is-always-shadow{
  /*border: none !important;*/
  box-shadow: none;
}

</style>
