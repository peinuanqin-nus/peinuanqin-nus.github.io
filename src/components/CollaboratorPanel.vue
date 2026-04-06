<template>
  <div class="collaborator-panel">
    <div class="section-heading">
      <p class="section-eyebrow">Research Network</p>
      <h2>Collaborators</h2>
      <p class="section-intro">
        Ongoing collaborations across academia, industry, and student mentorship that shape the research community around this work.
      </p>
    </div>

    <div
        v-for="group in collaboratorGroups"
        :key="group.title"
        class="group-block"
    >
      <div class="group-header">
        <div>
          <h3 class="group-title">{{ group.title }}</h3>
          <p class="group-description">{{ group.description }}</p>
        </div>
        <span class="group-count">{{ group.people.length }}</span>
      </div>

      <div class="group-shell">
        <el-row :gutter="20">
          <el-col
              v-for="(person, index) in group.people"
              :key="`${group.title}-${index}`"
              :xs="24"
              :sm="12"
              :lg="8"
          >
            <component
                :is="person.link ? 'a' : 'div'"
                :href="person.link || null"
                :target="person.link ? '_blank' : null"
                :rel="person.link ? 'noopener noreferrer' : null"
                class="collaborator-card"
            >
              <img :src="person.avatar" class="avatar" :alt="person.name" />

              <div class="info">
                <p class="name">{{ person.name }}</p>
                <p class="role">{{ person.role }}</p>
              </div>

              <span class="card-arrow">{{ person.link ? "Visit" : "Profile" }}</span>
            </component>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollaboratorPanel",
  data() {
    return {
      facultyCollaborators: [
        {
          name: "Yi-Chieh Lee",
          role: "Assistant Professor, NUS Computing",
          avatar: "/collaborators/EJ.png",
          link: "https://www.comp.nus.edu.sg/cs/people/yclee/"
        },
        {
          name: "Naomi Yamashita",
          role: "Senior Researcher, NTT Japan",
          avatar: "/collaborators/naomi.png",
          link: "http://naomi-yamashita.net/"
        },
        {
          name: "Chi-Lan Yang",
          role: "Assistant Professor, University of Tokyo",
          avatar: "/collaborators/chilan.png",
          link: "https://www.chilanyang.space/"
        },
        {
          name: "Jane E",
          role: "Assistant Professor, NUS Computing",
          avatar: "/collaborators/janee.png",
          link: "https://ejane.me/"
        },
        {
          name: "Jungup Lee",
          role: "Assistant Professor, NUS Social Work",
          avatar: "/collaborators/junguplee.png",
          link: "https://junguplee.com/"
        },
        {
          name: "Renwen Zhang",
          role: "Assistant Professor, NUS CNM",
          avatar: "/collaborators/renwenzhang.png",
          link: "https://renwenzhang.com/"
        },
        {
          name: "Xiangmin Fan",
          role: "Researcher, CAS Institute of Software",
          avatar: "/collaborators/xiangminfan.png",
          link: "https://lcs.ios.ac.cn/~xiangmin/"
        }
      ],
      phdCollaborators: [
        {
          name: "Zicheng Zhu",
          role: "Postdoctoral Researcher, NUS Computing",
          avatar: "/collaborators/zichengzhu.png",
          link: "https://www.zicheng-zhu.com/"
        },
        {
          name: "Nattapat Boonprakong",
          role: "Postdoctoral Researcher, NUS Computing",
          avatar: "/collaborators/nat.png",
          link: "https://nattapatb.github.io/"
        },
        {
          name: "Jingshu Li",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/jingshu.png",
          link: "https://jasonleejsl.github.io/"
        },
        {
          name: "Han Meng",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/hanmeng.png",
          link: "https://hanmeng2004.github.io/"
        },
        {
          name: "Yugin Tan",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/yugin.png",
          link: "https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334"
        },
        {
          name: "Yan Liu",
          role: "PhD Candidate, NUS Information System and Analytic",
          avatar: "/collaborators/jiayizhu.png",
          link: ""
        },
        {
          name: "Yitian Yang",
          role: "PhD Student, NUS Computing",
          avatar: "/collaborators/yitian.png",
          link: "https://yitian.super.site/"
        },
        {
          name: "Junti Zhang",
          role: "PhD Student, NUS Computing",
          avatar: "/collaborators/junti.png",
          link: "https://junti.space/"
        },
        {
          name: "Ann Chen",
          role: "AI PM & Researcher @ MIT & Harvard",
          avatar: "/collaborators/ann.png",
          link: "https://www.linkedin.com/in/annyuanchen/"
        },
        {
          name: "Yulu Pi",
          role: "Postdoctoral Research Associate @ University of Duisburg-Essen",
          avatar: "/collaborators/yulu.png",
          link: "https://nikipi.github.io/"
        }
      ],
      mentoredStudents: [
        {
          name: "Jingzhu Chen",
          role: "Undergraduate Student, Computer Science, Tongji University",
          avatar: "/collaborators/jingzhuchen.png",
          link: "https://www.linkedin.com/in/jingzhu-chen-4b193b35a/"
        },
        {
          name: "Justin Peng",
          role: "Software Engineer @ Quantedge",
          avatar: "/collaborators/justin.png",
          link: "https://www.linkedin.com/in/justin-peng/details/education/"
        },
        {
          name: "Jiting Cheng",
          role: "PhD Student, University of Sydney",
          avatar: "/collaborators/jiting.png",
          link: ""
        },
        {
          name: "Kaijun Wang",
          role: "Undergraduate Student, Computer Science, Shanghai Jiao Tong University",
          avatar: "/collaborators/kaijunwang.png",
          link: "https://www.linkedin.com/in/kaijun-jackie-wang-8622a1287/?originalSubdomain=sg"
        },
        {
          name: "Jiayi Zhu",
          role: "Undergraduate Student, Yale-NUS",
          avatar: "/collaborators/jiayizhu.png",
          link: "mailto:jiayizhu@u.yale-nus.edu.sg"
        }
      ]
    };
  },
  computed: {
    collaboratorGroups() {
      return [
        {
          title: "Faculty Collaborators",
          description: "Faculty and senior researchers whose perspectives shape the broader research agenda.",
          people: this.facultyCollaborators
        },
        {
          title: "Research Peers",
          description: "PhD students, postdocs, and interdisciplinary peers collaborating across active projects.",
          people: this.phdCollaborators
        },
        {
          title: "Students Mentored",
          description: "Students I have supported through research mentorship, collaboration, and project guidance.",
          people: this.mentoredStudents
        }
      ];
    }
  }
};
</script>

<style scoped>
.collaborator-panel {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  color: #222;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-eyebrow {
  margin: 0 0 12px;
  font-size: 0.86rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #145c52;
  font-weight: 700;
}

.collaborator-panel h2 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.15;
}

.section-intro {
  margin: 14px 0 0;
  font-size: 1rem;
  line-height: 1.8;
  color: #5b5b5b;
}

.group-block + .group-block {
  margin-top: 42px;
}

.group-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.group-title {
  margin: 0;
  font-size: 1.4rem;
}

.group-description {
  margin: 6px 0 0;
  color: #686868;
  line-height: 1.6;
}

.group-count {
  flex-shrink: 0;
  min-width: 44px;
  height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 92, 82, 0.08);
  color: #145c52;
  font-size: 1rem;
  font-weight: 700;
}

.group-shell {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.96) 100%);
  border: 1px solid rgba(20, 92, 82, 0.1);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 16px 40px rgba(21, 31, 38, 0.05);
}

.collaborator-card {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 108px;
  padding: 18px;
  margin-top: 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(20, 92, 82, 0.08);
  box-shadow: 0 8px 24px rgba(18, 31, 27, 0.05);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.collaborator-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(18, 31, 27, 0.09);
  background: rgba(255, 255, 255, 0.95);
}

.avatar {
  width: 76px;
  height: 76px;
  border-radius: 22px;
  object-fit: cover;
  flex-shrink: 0;
}

.info {
  flex: 1;
  min-width: 0;
}

.name {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #213532;
}

.role {
  margin: 8px 0 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #5f6e69;
}

.card-arrow {
  flex-shrink: 0;
  color: #145c52;
  font-size: 0.83rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .collaborator-panel h2 {
    font-size: 1.6rem;
  }

  .group-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .group-shell {
    padding: 14px;
  }

  .collaborator-card {
    margin-top: 14px;
    padding: 16px;
  }

  .avatar {
    width: 68px;
    height: 68px;
    border-radius: 18px;
  }
}
</style>
