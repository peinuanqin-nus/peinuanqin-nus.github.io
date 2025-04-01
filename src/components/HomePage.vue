<template>
  <el-container>
    <el-header>
<!--      <h2 class="title">Qin Peinuan</h2>-->
      <span class="title">{{userName}}</span>
    </el-header>
    <el-main class="main_container">
      <ProfilePanel></ProfilePanel>
      <RecentNews></RecentNews>
      <ProjectPanel></ProjectPanel>
      <CollaboratorPanel></CollaboratorPanel>
    </el-main>

<!--    <el-main>-->
<!--      <el-card class="intro-card">-->
<!--        <h2>About Me</h2>-->
<!--        <p>I am a CS PhD student at NUS, focusing on HCI and AI-assisted writing.</p>-->
<!--      </el-card>-->
<!--      <el-row :gutter="20">-->
<!--        <el-col :span="12">-->
<!--          <el-card class="section-card">-->
<!--            <h3>Projects</h3>-->
<!--            <ul>-->
<!--              <li>Writing Retrieval System</li>-->
<!--              <li>Interactive Paper Track System</li>-->
<!--              <li>PDF Reader with ChatPDF</li>-->
<!--            </ul>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--        <el-col :span="12">-->
<!--          <el-card class="section-card">-->
<!--            <h3>Publications</h3>-->
<!--            <ul>-->
<!--              <li>ACM CHI Paper on AI-Assisted Writing</li>-->
<!--              <li>Upcoming UIST Submission</li>-->
<!--            </ul>-->
<!--          </el-card>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </el-main>-->
    <el-footer>
      <p class="footer">© 2025 Qin Peinuan | Built with Vue & Element UI</p>
    </el-footer>
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

.el-header {
  background-color: #333;
  /*background-color: whitesmoke;*/
  color: white;
  /*text-align: center;*/
  text-align: left;
  padding: 20px;
  align-content:  center;

}

.title {
  /*font-size: 2.5rem;*/
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  /*align-content: flex-start;*/
}

.el-main {
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
