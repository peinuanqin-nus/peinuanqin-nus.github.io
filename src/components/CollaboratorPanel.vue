<template>
  <div class="collaborator-panel">
    <div class="section-heading">
      <h2>Collaborators</h2>
    </div>
    <div v-for="group in collaboratorGroups" :key="group.title" class="collaborator-group">
      <div class="group-heading">
        <h3>{{ group.title }}</h3>
        <p>{{ group.description }}</p>
      </div>
      <div class="people-grid">
        <component v-for="person in group.people" :key="person.name" :is="person.link ? 'a' : 'div'" :href="person.link || null" :target="person.link ? '_blank' : null" :rel="person.link ? 'noopener noreferrer' : null" class="person">
          <span class="avatar-frame">
            <img :src="person.avatar" width="56" height="56" alt="" loading="lazy" class="avatar" :class="[person.avatarClass, { 'avatar-top': person.avatarPosition === 'top' }]" />
          </span>
          <div class="person-info">
            <p class="person-name">{{ person.name }}<span v-if="person.link" class="person-arrow" aria-hidden="true">↗</span></p>
            <p class="person-role">{{ person.role }}</p>
          </div>
        </component>
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
        },
        {
          name: "Jat Singh",
          role: "Research Professor, Department of Computer Science and Technology, University of Cambridge",
          avatar: "/collaborators/jat.png",
          link: "https://www.cst.cam.ac.uk/people/js573#:~:text=Prof%20Jat%20Singh,technology%20and%20law%20%26%20society."
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
          name: "Zifei (FeiFei) Han",
          role: "PhD Student, NUS Computing",
          avatar: "/collaborators/feifei.png",
          avatarPosition: "top",
          link: "https://hanzifeifei.com/"
        },
        {
          name: "Yugin Tan",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/yugin.png",
          link: "https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334"
        },
        {
          name: "Tianqi Song",
          role: "PhD Candidate, NUS Computing",
          avatar: "/collaborators/tianqi.png",
          link: "https://hollysong.site/"
        },
        {
          name: "Yan Liu",
          role: "PhD Candidate, NUS Information System and Analytic",
          avatar: "/collaborators/jiayizhu.png",
          link: ""
        },
        {
          name: "Liuqi",
          role: "PhD Candidate, Zhejiang University",
          avatar: "/collaborators/liuqi.png",
          link: "http://www.idi.zju.edu.cn/member/4108.html"
        },
        {
          name: "Yitian Yang",
          role: "PhD Candidate, NUS Computing",
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
          name: "Zhixing Liu",
          role: "Research collaborator, NUS Computing",
          avatar: "/collaborators/zhixing-cscw.jpeg",
          avatarClass: "avatar-zhixing",
          link: ""
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
          avatar: "/collaborators/jiting-cscw.jpeg",
          avatarClass: "avatar-jiting",
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
.collaborator-panel { border-top: 1px solid var(--line); padding-top: 40px; }
.collaborator-group + .collaborator-group { margin-top: 40px; }
.group-heading { margin-bottom: 24px; }
h3 { margin-bottom: 7px; }
.group-heading > p { color: var(--muted); font-size: 15px; margin: 0; max-width: 66ch; }
.people-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.person { display: flex; align-items: flex-start; gap: 14px; padding: 18px; color: var(--text); text-decoration: none; border: 1px solid #ededed; border-radius: var(--radius); background: #fafafa; }
.avatar-frame { display: block; width: 56px; height: 56px; border-radius: 50%; overflow: hidden; flex-shrink: 0; background: #eeeeee; }
.avatar { width: 100%; height: 100%; object-fit: cover; }
.avatar-top { object-position: center 24%; }
/* Match the portrait crops on the CSCW presentation's author slide. */
.avatar-jiting { transform: scale(2.173913); transform-origin: 50% 25.925926%; }
.avatar-zhixing { transform: scale(1.5625); transform-origin: 50% 4.166667%; }
.person-info { min-width: 0; }
.person-name { font-family: var(--font-display); font-size: 16px; font-weight: 500; margin: 0 0 4px; line-height: 1.4; }
.person-arrow { display: inline-block; margin-left: 7px; color: var(--muted); font-size: 12px; }
.person-role { font-size: 14px; line-height: 1.65; color: var(--muted); margin: 0; }
a.person:hover .person-name { color: var(--accent); }
a.person:hover .person-arrow { color: var(--accent); }
a.person:hover { background: var(--surface); border-color: #dcdcdc; }
@media (max-width: 900px) { .people-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) {
  .collaborator-panel { padding-top: 32px; }
  .people-grid { grid-template-columns: 1fr; gap: 12px; }
  .person { gap: 16px; }
}
</style>
