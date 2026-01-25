<template>
  <div class="collaborator-panel">
    <h2>Collaborators</h2>

    <!-- ✅ Faculty Collaborators -->
    <div class="group-block">
      <h3 class="group-title">Faculty Collaborators</h3>

      <el-row :gutter="20">
        <el-col
            v-for="(person, index) in facultyCollaborators"
            :key="'faculty-' + index"
            :span="8"
        >
          <div class="collaborator-card">
            <img :src="person.avatar" class="avatar" />

            <div class="info">
              <a :href="person.link" target="_blank" class="name">
                {{ person.name }}
              </a>
              <div class="role">{{ person.role }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- ✅ PhD Collaborators -->
    <div class="group-block">
<!--      <h3 class="group-title">Research Peers (PhD Collaborators)</h3>-->
      <h3 class="group-title">Research Peers</h3>
      <el-row :gutter="20">
        <el-col
            v-for="(person, index) in phdCollaborators"
            :key="'phd-' + index"
            :span="8"
        >
          <div class="collaborator-card">
            <img :src="person.avatar" class="avatar" />

            <div class="info">
              <a :href="person.link" target="_blank" class="name">
                {{ person.name }}
              </a>
              <div class="role">{{ person.role }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


    <!-- ✅ Students Mentored -->
    <div class="group-block">
      <h3 class="group-title">Students Mentored</h3>

      <el-row :gutter="20">
        <el-col
            v-for="(person, index) in mentoredStudents"
            :key="'student-' + index"
            :span="8"
        >
          <div class="collaborator-card">
            <img :src="person.avatar" class="avatar" />

            <div class="info">
              <a :href="person.link" target="_blank" class="name">
                {{ person.name }}
              </a>
              <div class="role">{{ person.role }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "CollaboratorPanel",
  data() {
    return {
      /* ✅ Faculty Collaborators */
      facultyCollaborators: [
        {
          name: "Yi-Chieh Lee",
          role: "Assistant Professor, NUS Computing",
          avatar: "/collaborators/EJ.png",
          link: "https://www.comp.nus.edu.sg/cs/people/yclee/",
        },
        {
          name: "Naomi Yamashita",
          role: "Senior Researcher, NTT Japan",
          avatar: "/collaborators/naomi.png",
          link: "http://naomi-yamashita.net/",
        },
        {
          name: "Chi-Lan Yang",
          role: "Assistant Professor, University of Tokyo",
          avatar: "/collaborators/chilan.png",
          link: "https://www.chilanyang.space/",
        },
        {
          name: "Jane E",
          role: "Assistant Professor, NUS Computing",
          avatar: "/collaborators/janee.png",
          link: "https://ejane.me/",
        },
        {
          name: "Jungup Lee",
          role: "Assistant Professor, NUS Social Work",
          avatar: "/collaborators/junguplee.png",
          link: "https://junguplee.com/",
        },
        {
          name: "Renwen Zhang",
          role: "Assistant Professor, NUS CNM",
          avatar: "/collaborators/renwenzhang.png",
          link: "https://renwenzhang.com/",
        },
        {
          name: "Xiangmin Fan",
          role: "Researcher, CAS Institute of Software",
          avatar: "/collaborators/xiangminfan.png",
          link: "https://lcs.ios.ac.cn/~xiangmin/",
        },
      ],

      /* ✅ Research Peers */
      phdCollaborators: [
        {
          name: "Zicheng Zhu",
          role: "Postdoctoral Researcher, NUS Computing",
          avatar: "/collaborators/zichengzhu.png",
          link: "https://www.zicheng-zhu.com/",
        },
        {
          name: "Nattapat Boonprakong",
          role: "Postdoctoral Researcher, NUS Computing",
          avatar: "/collaborators/nat.png",
          link: "https://nattapatb.github.io/",
        },
        {
          name: "Jingshu Li",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/jingshu.png",
          link: "https://jasonleejsl.github.io/",
        },
        {
          name: "Han Meng",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/hanmeng.png",
          link: "https://hanmeng2004.github.io/",
        },
        {
          name: "Yugin Tan",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/yugin.png",
          link: "https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334",
        },
        {
          name: "Yan Liu",
          role: "PhD Candidate, NUS Information System and Analytic",
          avatar: "/collaborators/jiayizhu.png",
          link: "",
        },
        {
          name: "Yitian Yang",
          role: "PhD Student, NUS Computing",
          avatar: "/collaborators/yitian.png",
          link: "https://yitian.super.site/",
        },
        {
          name: "Junti Zhang",
          role: "PhD Student, NUS Computing",
          avatar: "/collaborators/junti.png",
          link: "https://junti.space/",
        },
        {
          name: "Ann Chen",
          role: "AI PM & Researcher @ MIT & Harvard",
          avatar: "/collaborators/ann.png",
          link: "https://www.linkedin.com/in/annyuanchen/",
        },
      ],


      /* ✅ Students Mentored */
      mentoredStudents: [
        {
          name: "Jingzhu Chen",
          role: "Undergraduate student, Computer Science, Tongji University",
          avatar: "/collaborators/jingzhuchen.png",
          link: "https://www.linkedin.com/in/jingzhu-chen-4b193b35a/",
        },
        {
          name: "Justin Peng",
          role: "Software Engineer @ Quantedge",
          avatar: "/collaborators/justin.png",
          link: "https://www.linkedin.com/in/justin-peng/details/education/",
        },
        {
          name: "Jiting Cheng",
          role: "PhD student, University of Sydney",
          avatar: "/collaborators/jiting.png",
          link: "",
        },
        {
          name: "Kaijun Wang",
          role: "Undergraduate student, Computer Science, Shanghai Jiao Tong University",
          avatar: "/collaborators/kaijunwang.png",
          link: "https://www.linkedin.com/in/kaijun-jackie-wang-8622a1287/?originalSubdomain=sg",
        },
        {
          name: "Jiayi Zhu",
          role: "Undergraduate student, Yale-NUS",
          avatar: "/collaborators/jiayizhu.png",
          link: "jiayizhu@u.yale-nus.edu.sg",
        },


      ],


    };
  },
};
</script>

<style scoped>
.collaborator-panel {
  width: 75%;
  margin: 0 auto;
  padding-top: 30px;
}

/* ✅ Group */
.group-block {
  margin-top: 50px;
}

/* ✅ Group Title */
.group-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  border-left: 4px solid #409eff;
  padding-left: 12px;
  color: #222;
}

/* ✅ Placeholder */
.placeholder-note {
  font-size: 14px;
  color: #888;
  margin-left: 14px;
}

/* ✅ Card */
.collaborator-card {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-top: 18px;
  border-radius: 14px;
  background: #fafafa;
  transition: 0.25s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.collaborator-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

/* ✅ Avatar */
.avatar {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
}

/* ✅ Name */
.name {
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: #333;
}

.name:hover {
  color: #409eff;
}

/* ✅ Role */
.role {
  font-size: 13px;
  color: #666;
  margin-top: 4px;
}
</style>

<!--<template>-->
<!--  <div class="collaborator-panel">-->
<!--    <h2>Collaborators</h2>-->
<!--    <el-row :gutter="20" justify="center">-->
<!--      <el-col-->
<!--          v-for="(person, index) in collaborators"-->
<!--          :key="index"-->
<!--          :span="8"-->
<!--          class="collaborator-col"-->
<!--      >-->
<!--        <div class="collaborator-card">-->
<!--          <img :src="person.avatar" alt="Avatar" class="avatar" />-->
<!--          <div class="info">-->
<!--            <a :href="person.link" target="_blank" class="name">{{ person.name }}</a>-->
<!--            <div class="role">{{ person.role }}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "CollaboratorPanel",-->
<!--  data() {-->
<!--    return {-->
<!--      collaborators: [-->
<!--        {-->
<!--          name: "Yi-Chieh Lee",-->
<!--          role: "Assistant Professor, NUS Computing",-->
<!--          avatar: "/collaborators/EJ.png",-->
<!--          link: "https://www.comp.nus.edu.sg/cs/people/yclee/",-->
<!--        },-->
<!--        {-->
<!--          name: "Naomi Yamashita",-->
<!--          role: "Senior Researcher, NTT Japan",-->
<!--          avatar: "/collaborators/naomi.png",-->
<!--          link: "http://naomi-yamashita.net/",-->
<!--        },-->
<!--        {-->
<!--          name: "Chi-Lan Yang",-->
<!--          role: "Assistant Professor, University of Tokyo",-->
<!--          avatar: "/collaborators/chilan.png",-->
<!--          link: "https://www.chilanyang.space/",-->
<!--        },-->
<!--        {-->
<!--          name: "Jane E",-->
<!--          role: "Assistant Professor, NUS Computing",-->
<!--          avatar: "/collaborators/janee.png",-->
<!--          link: "https://ejane.me/",-->
<!--        },-->
<!--        {-->
<!--          name: "Jungup Lee",-->
<!--          role: "Assistant Professor, NUS Social Work",-->
<!--          avatar: "/collaborators/junguplee.png",-->
<!--          link: "https://junguplee.com/",-->
<!--        },-->
<!--        {-->
<!--          name: "Renwen Zhang",-->
<!--          role: "Assistant Professor, NUS CNM",-->
<!--          avatar: "/collaborators/renwenzhang.png",-->
<!--          link: "https://renwenzhang.com/",-->
<!--        },-->
<!--        {-->
<!--          name: "Xiangmin Fan",-->
<!--          role: "Researcher, CAS Institute of Software",-->
<!--          avatar: "/collaborators/xiangminfan.png",-->
<!--          link: "https://lcs.ios.ac.cn/~xiangmin/",-->
<!--        },-->

<!--        {-->
<!--          name: "Zicheng Zhu",-->
<!--          role: "PostDoc, NUS School of Computing",-->
<!--          avatar: "/collaborators/zichengzhu.png",-->
<!--          link: "https://www.zicheng-zhu.com/",-->
<!--        },-->

<!--        {-->
<!--          name: "Jingshu Li",-->
<!--          role: "PhD candidate, NUS School of Computing",-->
<!--          avatar: "/collaborators/jingshu.png",-->
<!--          link: "https://jasonleejsl.github.io/",-->
<!--        },-->
<!--        {-->
<!--          name: "Han Meng",-->
<!--          role: "PhD candidate, NUS School of Computing",-->
<!--          avatar: "/collaborators/hanmeng.png",-->
<!--          link: "https://hanmeng2004.github.io/",-->
<!--        },-->

<!--        {-->
<!--          name: "Yitian Yang",-->
<!--          role: "PhD student, NUS School of Computing",-->
<!--          avatar: "/collaborators/yitian.png",-->
<!--          link: "https://yitian.super.site/",-->
<!--        },-->
<!--        {-->
<!--          name: "Junti Zhang",-->
<!--          role: "PhD student, NUS School of Computing",-->
<!--          avatar: "/collaborators/junti.png",-->
<!--          link: "https://junti.space/",-->
<!--        },-->
<!--        {-->
<!--          name: "Yugin Tan",-->
<!--          role: "PhD candidate, NUS School of Computing",-->
<!--          avatar: "/collaborators/yugin.png",-->
<!--          link: "https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334",-->
<!--        },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->



<!--.collaborator-panel {-->
<!--  width: 75%;-->
<!--  margin: 0px auto;-->
<!--  /*margin-top: 40px;*/-->
<!--  padding-top: 20px;-->
<!--  /*border-top: 1px solid #eee;*/-->
<!--}-->

<!--.collaborator-card {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  margin-top: 30px;-->
<!--  padding: 10px;-->
<!--  border-radius: 12px;-->
<!--  background: #fafafa;-->
<!--  transition: 0.2s ease;-->
<!--  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);-->
<!--}-->

<!--.collaborator-card:hover {-->
<!--  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--.avatar {-->
<!--  width: 60px;-->
<!--  height: 60px;-->
<!--  border-radius: 50%;-->
<!--  object-fit: cover;-->
<!--  margin-right: 15px;-->
<!--}-->

<!--.name {-->
<!--  font-weight: bold;-->
<!--  color: #333;-->
<!--  text-decoration: none;-->
<!--}-->

<!--.role {-->
<!--  font-size: 13px;-->
<!--  color: #666;-->
<!--}-->
<!--</style>-->
