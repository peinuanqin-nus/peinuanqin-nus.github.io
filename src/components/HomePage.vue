<template>
  <el-container>
<!--    <el-header>-->
<!--      <span class="title">{{userName}}</span>-->
<!--    </el-header>-->
    <el-header class="fixed-header">
      <div class="nav-bar">
        <span class="title">{{ userName }}</span>

        <div class="nav-links">
          <span @click="scrollToSection('profile')">Profile</span>
          <span @click="scrollToSection('recent_news')">Recent News</span>
          <span @click="scrollToSection('projects')">Projects</span>
          <span @click="scrollToSection('collaborators')">Collaborators</span>
        </div>
      </div>
    </el-header>

<!--    <el-main class="main_container">-->
<!--      <ProfilePanel></ProfilePanel>-->
<!--      <RecentNews></RecentNews>-->
<!--      <ProjectPanel></ProjectPanel>-->
<!--      <CollaboratorPanel></CollaboratorPanel>-->
<!--    </el-main>-->
    <el-main class="main_container">
      <div id="profile">
        <ProfilePanel />
      </div>

      <div id="recent_news">
        <RecentNews />
      </div>

      <div id="projects">
        <ProjectPanel />
      </div>

      <div id="collaborators">
        <CollaboratorPanel />
      </div>
    </el-main>

    <!--    <el-footer>-->
<!--      <p class="footer">© 2025 Qin Peinuan | Built with Vue & Element UI</p>-->
<!--    </el-footer>-->
  </el-container>
</template>

<script>
import ProfilePanel from "@/components/ProfilePanel";
import RecentNews from "@/components/RecentNews";
import ProjectPanel from "@/components/ProjectPanel";
import CollaboratorPanel from "@/components/CollaboratorPanel";
export default {
  name: "PersonalHomepage",
  components: {CollaboratorPanel, ProjectPanel, RecentNews, ProfilePanel},
  data(){
    return{
      userName: "Qin Peinuan"
    }
  },

  methods:{
    // scrollToSection(id) {
    //   const el = document.getElementById(id);
    //   if (el) {
    //     el.scrollIntoView({
    //       behavior: "smooth",
    //       block: "start"
    //     });
    //   }
    // }
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            80; // header height

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    },

  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;700&display=swap');

body {
  font-family: 'Spectral', serif;
  background-color: #f5f5f5;
  margin: 0;
}

/*.main_container{*/
/*  display: flex;*/
/*  align-items: center;*/
/*  align-content: center;*/
/*  justify-items: center;*/
/*  justify-content: center;*/
/*}*/

.main_container{
  background: white;
}

.el-header {
  background-color: #333;
  /*background-color: whitesmoke;*/
  color: white;
  /*text-align: center;*/
  text-align: left;
  padding: 20px;
  align-content:  center;

}


.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;

  background-color: #333;
  color: white;

  display: flex;
  align-items: center;
}


.nav-bar {
  width: 100%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links span {
  margin-left: 22px;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.85;
  transition: 0.2s;
}

.nav-links span:hover {
  opacity: 1;
  text-decoration: underline;
}

.main_container {
  /*margin-top: 50px;*/
  padding-top: 90px; /* 给 header 留空间 */
  background: white;
}


.title {
  /*font-size: 2.5rem;*/
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  /*align-content: flex-start;*/
}

.el-main {
  margin-top: 60px;  /* header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}


.footer {
  text-align: center;
  color: #777;
  padding: 10px;
}
</style>
