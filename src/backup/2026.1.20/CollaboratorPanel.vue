<template>
  <div class="collaborator-panel">
    <h2>Collaborators</h2>
    <el-row :gutter="20" justify="center">
      <el-col
          v-for="(person, index) in collaborators"
          :key="index"
          :span="8"
          class="collaborator-col"
      >
        <div class="collaborator-card">
          <img :src="person.avatar" alt="Avatar" class="avatar" />
          <div class="info">
            <a :href="person.link" target="_blank" class="name">{{ person.name }}</a>
            <div class="role">{{ person.role }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CollaboratorPanel",
  data() {
    return {
      collaborators: [
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

        {
          name: "Zicheng Zhu",
          role: "PostDoc, NUS School of Computing",
          avatar: "/collaborators/zichengzhu.png",
          link: "https://www.zicheng-zhu.com/",
        },

        {
          name: "Jingshu Li",
          role: "PhD candidate, NUS School of Computing",
          avatar: "/collaborators/jingshu.png",
          link: "https://jasonleejsl.github.io/",
        },
        {
          name: "Han Meng",
          role: "PhD candidate, NUS School of Computing",
          avatar: "/collaborators/hanmeng.png",
          link: "https://hanmeng2004.github.io/",
        },

        {
          name: "Yitian Yang",
          role: "PhD student, NUS School of Computing",
          avatar: "/collaborators/yitian.png",
          link: "https://yitian.super.site/",
        },
        {
          name: "Junti Zhang",
          role: "PhD student, NUS School of Computing",
          avatar: "/collaborators/junti.png",
          link: "https://junti.space/",
        },
        {
          name: "Yugin Tan",
          role: "PhD candidate, NUS School of Computing",
          avatar: "/collaborators/yugin.png",
          link: "https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334",
        },
      ],
    };
  },
};
</script>

<style scoped>



.collaborator-panel {
  width: 80%;
  margin: 40px auto;
  /*margin-top: 40px;*/
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.collaborator-card {
  display: flex;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
  border-radius: 12px;
  background: #fafafa;
  transition: 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.collaborator-card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.name {
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.role {
  font-size: 13px;
  color: #666;
}
</style>
