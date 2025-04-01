<!-- Project Panel -->
<template>
  <div class="project-panel">
<!--    <h2>Projects</h2>-->
    <h2>Ongoing Projects</h2>
    <div v-html="ongoingIntro" class="markdown-body project-intro"></div>
<!--    <p class="section-description">-->
<!--      These ongoing projects reflect my current research interests, including AI-assisted creation, language learning support for non-native speakers, and enhancing human-AI communication. Each project explores a unique aspect of how technology can augment human expression, collaboration, and understanding.-->
<!--    </p>-->
    <el-row :gutter="20" justify="center">
<!--      <el-col v-for="(project, index) in projects" :key="index" :span="8">-->
      <el-col v-for="(project, index) in ongoingProjects" :key="index" :span="8">
        <ProjectCard :project="project" :index="index" @click.native="openDrawer(project)"/>
      </el-col>
    </el-row>


    <h2>Finished Projects</h2>
    <el-row :gutter="20" justify="center">
      <el-col v-for="(project, index) in finishedProjects" :key="index" :span="8">
        <ProjectCard :project="project" :index="index" @click.native="openDrawer(project)"/>
      </el-col>
    </el-row>

<!--    <el-dialog-->
<!--        :visible.sync="drawerVisible"-->
<!--        :title="selectedProject?.title || 'Project Detail'"-->
<!--        width="60%"-->
<!--        class="project-dialog"-->
<!--        :close-on-click-modal="false"-->
<!--    >-->
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
<!--          <div><span class="label">📚 Source:</span>-->
<!--            <el-tag v-for="(s, i) in toArray(selectedProject?.source)" :key="i" type="info">{{ s }}</el-tag>-->
<!--          </div>-->
<!--          <div><span class="label">📚 Title:</span>-->
<!--            &lt;!&ndash;            {{ selectedProject.author || 'Unknown' }}&ndash;&gt;-->
<!--            <span v-html="selectedProject.title" class="markdown-inline"></span>-->
<!--          </div>-->
          <div><span class="label">✍️ Author:</span>
<!--            {{ selectedProject.author || 'Unknown' }}-->
            <span v-html="selectedProject.author" class="markdown-inline"></span>
          </div>

          <div><span class="label">🔗 Paper URL:</span>
<!--            <a v-if="selectedProject.url" :href="selectedProject.url" target="_blank">{{ selectedProject.url }}</a>-->
            <span v-if="selectedProject.url" v-html="selectedProject.url" class="markdown-inline"></span>
            <span v-else>...</span>
          </div>

          <div><span class="label">🌟 Status:</span>
<!--            <el-tag-->
<!--                v-for="(tag, index) in selectedProject.status"-->
<!--                :key="index"-->
<!--                type="success"-->
<!--                closable-->
<!--                @close="removeTag(index)"-->
<!--            >{{ tag }}</el-tag>-->
            <el-tag
                v-for="(tag, index) in selectedProject.status"
                :key="index"
                :type="tagColorMap[tag] || 'info'"
            >{{ tag }}</el-tag>
<!--            <el-input-->
<!--                v-model="newTag"-->
<!--                size="small"-->
<!--                placeholder="Add status"-->
<!--                @keyup.enter="addTag"-->
<!--                style="width: 120px; margin-left: 10px;"-->
<!--            />-->
          </div>
          <div v-if="selectedProject.published"><span class="label">🏛️ Published:</span>
            <span style="font-weight: bolder">{{selectedProject.published}}</span>
          </div>

<!--          <div><span class="label">📅 Year:</span> {{ selectedProject.year }}</div>-->
        </div>

        <hr />

        <div v-html="markdownContent" class="markdown-body"></div>
      </div>
    </el-dialog>






  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import {marked} from "marked";

export default {
  name: "ProjectPanel",
  components: { ProjectCard },
  created() {
    this.loadAllProjects();
  },
  data() {
    return {
      // projects: [
      //   { title: "Writing Retrieval System", labels: ["HCI", "AI"], year: 2025, image: "/projects/AI-assisted writing.png" },
      //   { title: "Interactive Paper Track System", labels: ["Visualization", "AI"], year: 2024, image: "/projects/cyberbullying.png" },
      //   { title: "PDF Reader with ChatPDF", labels: ["AI", "UX"], year: 2024, image: "/projects/NNS.png" },
      //   { title: "PDF Reader with ChatPDF", labels: ["AI", "UX"], year: 2024, image: "/projects/NNS.png" }
      // ],
      ongoingProjects: [],
//       ongoingIntro: marked(`
// I'm currently focusing on several **AI + HCI** topics, such as:
//
// - ✍️ *AI-assisted creation* — studying how AI can support and co-create with humans.
// - 🧠 *Language learning & communication support* — especially for **non-native speakers** (NNS).
// - 🤝 *Human-AI interaction* — exploring timing, involvement, and feedback in collaborative writing.
//
// These projects reflect my broader interests in augmenting human cognition and expression with intelligent systems.
// `),

  //     ongoingIntro: marked(`
  // We are currently exploring four ongoing directions that bridge **AI and HCI**:
  //
  //     - **AI-assisted creation**: We investigate how co-creation tools can improve writing quality and efficiency while maintaining user agency, focusing on literature review and academic writing support.
  //     - **AI-mediated communication**: We design systems that reduce language barriers in multilingual teams, especially by empowering non-native speakers (NNS) in real-time conversations with native speakers (NS).
  //     - **Cyberbullying intervention**: We build LLM-driven tools that help online bystanders overcome psychological and expressive barriers, encouraging direct and confident responses to bullying behavior.
  //     - **Language learning support**: We study how LLMs can act as adaptive partners in learning, enabling NNS to develop sustainable writing and speaking practices across diverse learning scenarios.
  //  Across these projects, we aim to enhance creativity, inclusion, and learning by carefully designing **human-centered AI systems**.`),

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
        "ai_assisted_creation",
          "ai_mediated_communication",
          "timing_matters",
          "speaking_support_for_NNS",
          "language_learning_support",
          "cyberbullying_mitigation",

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
      // this.projects = loadedProjects
      // this.ongoingProjects = loadedProjects
      //     .filter((p) => p !== null)
      //     .sort((a, b) => b.year - a.year); // 降序排序

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
  width: 60%;
  margin: 20px auto;
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
