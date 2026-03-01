<!-- Project Panel -->
<template>
  <div class="project-panel">
    <h2>Selected Publications</h2>
    <PublicationRow
        v-for="(project, index) in finishedProjects"
        :key="index"
        :project="project"
        @click="openDrawer(project)"
    />

    <h2>Ongoing Projects</h2>
    <PublicationRow
        v-for="(project, index) in ongoingProjects"
        :key="index"
        :project="project"
        @click="openDrawer(project)"
    />
    <el-dialog
        :visible.sync="drawerVisible"
        title=""
        width="60%"
        class="project-dialog"
        :close-on-click-modal="false"
    >
      <div class="dialog-content">
        <h1 class="project-title">{{ selectedProject.title }}</h1>



        <div class="info-grid">
          <div><span class="label">✍️ Author:</span>
            <span v-html="selectedProject.author" class="markdown-inline"></span>
          </div>

          <div><span class="label">🔗 Paper URL:</span>
            <span v-if="selectedProject.url" v-html="selectedProject.url" class="markdown-inline"></span>
            <span v-else>...</span>
          </div>

          <div><span class="label">🌟 Status:</span>
            <el-tag
                v-for="(tag, index) in selectedProject.status"
                :key="index"
                :type="tagColorMap[tag] || 'info'"
            >{{ tag }}</el-tag>
          </div>
          <div v-if="selectedProject.published"><span class="label">🏛️ Published:</span>
            <span style="font-weight: bolder">{{selectedProject.published}}</span>
          </div>
        </div>

        <hr />

        <div v-html="markdownContent" class="markdown-body"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import ProjectCard from "@/components/ProjectCard";
import {marked} from "marked";
import PublicationRow from "@/components/PublicationRow";

export default {
  name: "ProjectPanel",
  components: {
    // ProjectCard,
    PublicationRow },
  created() {
    this.loadAllProjects();
  },
  data() {
    return {
      ongoingProjects: [],
      ongoingIntro: marked(`
We are currently investigating how **human-centered AI** can support expression, communication, and learning across diverse contexts.
Our ongoing projects span several interrelated directions:
- **AI-assisted creation** — exploring how intelligent systems can augment, rather than replace, human agency in creative practices.
- **AI-mediated communication** — designing tools that facilitate mutual understanding across linguistic and cultural boundaries.
- **Supportive social interventions** — leveraging AI to empower users in responding to challenging social dynamics, such as online hostility.
- **Language learning with AI** — examining how LLMs can act as adaptive and context-aware partners in the development of communicative competence.

Together, these efforts aim to uncover design principles for building **co-creative, empowering, and inclusive AI systems**.
`),

      finishedProjects:[],

      projectFolders: [
        "AI_personalization",
        "chatlearn",
        "QualCausal",
        "ConvScale",
        "Branchat",
        "timing_matters",
        "AISA",
        "Stigma",
        "VR",
          "Gait",


        "cyberbullying_mitigation",
        "ai_mediated_communication",

        "ai_assisted_creation",
          "advancing_communication_between_groups",
          "skill_development",
        "automatic_interview",
        "modeling_human",


        // "literature_review_tool",
        // "nns_ns_communication"
      ],

      drawerVisible: false,
      selectedProject: {},
      newTag: "",
      markdownContent: "",


      tagColorMap: {
        "🕒 Ongoing": 'warning',
        "🟢 Accept": 'success'
      }
    };
  },

  methods:{
    openDrawer(project) {
      console.log("Clicked project:", project);
      this.selectedProject = { ...project }; // 深拷贝避免副作用
      this.markdownContent = marked(project.content || "No content available.");
      this.selectedProject.author = marked(project.author || "Unknown");
      this.selectedProject.url = marked(project.url || "...");
      this.drawerVisible = true;
    },
    addTag() {
      const tag = this.newTag.trim();
      if (tag && !this.selectedProject.status.includes(tag)) {
        this.selectedProject.status.push(tag);
      }
      this.newTag = "";
    },
    removeTag(index) {
      this.selectedProject.status.splice(index, 1);
    },

    async loadAllProjects() {
      const loadedProjects = await Promise.all(
          this.projectFolders.map((folder) => this.loadProject(folder))
      );

      const validProjects = loadedProjects.filter((p) => p !== null);

      this.ongoingProjects = validProjects
          .filter((p) => p.status && p.status[0] === "🕒 Ongoing")
          .sort((a, b) => b.year - a.year);

      this.finishedProjects = validProjects
          .filter((p) => !p.status || p.status[0] !== "🕒 Ongoing")
          .sort((a, b) => b.year - a.year);
    },

    async loadProject(folder) {
      try {
        const metaRes = await fetch(`/projects/${folder}/meta.json`);
        const meta = await metaRes.json();

        const descRes = await fetch(`/projects/${folder}/description.md`);
        const descText = await descRes.text();
        const content = marked(descText);

        return { ...meta, content };
      } catch (error) {
        console.error(`Error loading project from folder "${folder}":`, error);
        return null;
      }
    },

    // 👇 加上这个方法！
    toArray(input) {
      if (!input) return [];
      if (Array.isArray(input)) return input;
      return [String(input)];
    }



  }
};
</script>

<style scoped>
.project-panel {
  width: 75%;
  margin: 0px auto;
  padding: 20px;
  /*background-color: white;*/
  /*background-color: white;*/
  border-radius: 10px;
  /*box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);*/
  /*text-align: center;*/
}


.drawer-header {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.status-tags {
  margin-top: 10px;
}

.markdown-body {
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.8;
}


.project-detail-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.project-card {
  width: 100%;
  border-radius: 16px;
  font-size: 14px;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

.label {
  font-weight: 500;
  margin-right: 5px;
}



.project-dialog ::v-deep .el-dialog {
  border-radius: 16px;
  padding: 20px;
}

.project-detail-container {
  padding: 0;
  display: flex;
  justify-content: center;
}

.project-card {
  width: 100%;
  border-radius: 16px;
  font-size: 14px;
}








.project-dialog ::v-deep .el-dialog {
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.dialog-content {
  font-size: 14px;
  line-height: 1.8;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

.label {
  font-weight: 500;
  margin-right: 5px;
}

.markdown-body {
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.8;
}


.markdown-inline :deep(p) {
  display: inline;
  margin: 0;
  padding: 0;
}


::v-deep(.el-tag) {
  border-radius: 12px !important; /* 想多大就多大 */
  /*padding: 3px 10px; !* 可选：更紧凑些 *!*/
}


.section-description {
  font-size: 14px;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
}

.project-intro {
  margin-bottom: 20px;
  text-align: left;
}



</style>
