<!-- Project Panel -->
<template>
  <div class="project-panel">
    <h2>Projects</h2>
    <el-row :gutter="20" justify="center">
<!--      <el-col v-for="(project, index) in projects" :key="index" :span="8">-->
      <el-col v-for="(project, index) in projects" :key="index" :span="8">
        <ProjectCard :project="project" :index="index" @click.native="openDrawer(project)"/>
      </el-col>
    </el-row>

    <!-- Drawer for project details -->
<!--    <el-drawer-->
<!--        v-model="drawerVisible"-->
<!--        :title="selectedProject?.title || 'Project Detail'"-->
<!--        direction="rtl"-->
<!--        size="40%"-->
<!--        append-to-body-->
<!--    >-->


<!--    <el-drawer-->
<!--        :visible="drawerVisible"-->
<!--        :title="selectedProject?.title || 'Project Detail'"-->
<!--        direction="rtl"-->
<!--        size="40%"-->
<!--        @close="drawerVisible = false"-->
<!--    >-->
<!--      <div class="drawer-header">-->
<!--        <p><strong>Year:</strong> {{ selectedProject.year }}</p>-->
<!--        <p><strong>Author:</strong> {{ selectedProject.author || 'Unknown' }}</p>-->
<!--        <p><strong>Source:</strong> {{ selectedProject.source || 'N/A' }}</p>-->
<!--        <p v-if="selectedProject.url"><strong>Paper URL:</strong> <a :href="selectedProject.url" target="_blank">{{ selectedProject.url }}</a></p>-->

<!--        <div class="status-tags">-->
<!--          <strong>Status:</strong>-->
<!--          <el-tag-->
<!--              v-for="(tag, index) in selectedProject.status"-->
<!--              :key="index"-->
<!--              closable-->
<!--              @close="removeTag(index)"-->
<!--          >{{ tag }}</el-tag>-->
<!--          <el-input-->
<!--              v-model="newTag"-->
<!--              size="small"-->
<!--              placeholder="Add status"-->
<!--              @keyup.enter="addTag"-->
<!--              style="width: 120px; margin-top: 5px;"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->

<!--      <div v-html="markdownContent" class="markdown-body"></div>-->
<!--    </el-drawer>-->


<!--    <el-drawer-->
<!--        :visible="drawerVisible"-->
<!--        title="null"-->
<!--        direction="rtl"-->
<!--        size="60%"-->
<!--        custom-class="project-drawer"-->
<!--        @close="drawerVisible=false"-->
<!--    >-->
<!--      <div class="project-detail-container">-->
<!--        <el-card shadow="always" class="project-card">-->
<!--          <h2 class="project-title">{{ selectedProject.title }}</h2>-->

<!--          <div class="info-grid">-->
<!--&lt;!&ndash;            <div><span class="label">📚 Source:</span> <el-tag v-for="(s, i) in toArray(selectedProject.source)" :key="i" type="info">{{ s }}</el-tag></div>&ndash;&gt;-->
<!--            <div><span class="label">📚 Source:</span> <el-tag v-for="(s, i) in toArray(selectedProject?.source)"-->
<!--                                                              :key="i" type="info">{{ s }}</el-tag></div>-->

<!--            <div><span class="label">✍️ Author:</span> {{ selectedProject.author || 'Unknown' }}</div>-->
<!--            <div><span class="label">🔗 Paper URL:</span>-->
<!--              <a v-if="selectedProject.url" :href="selectedProject.url" target="_blank">{{ selectedProject.url }}</a>-->
<!--              <span v-else>空白</span>-->
<!--            </div>-->
<!--            <div><span class="label">🌟 Status:</span>-->
<!--              <el-tag-->
<!--                  v-for="(tag, index) in selectedProject.status"-->
<!--                  :key="index"-->
<!--                  type="success"-->
<!--                  closable-->
<!--                  @close="removeTag(index)"-->
<!--              >{{ tag }}</el-tag>-->
<!--              <el-input-->
<!--                  v-model="newTag"-->
<!--                  size="small"-->
<!--                  placeholder="Add status"-->
<!--                  @keyup.enter="addTag"-->
<!--                  style="width: 120px; margin-left: 10px;"-->
<!--              />-->
<!--            </div>-->
<!--            <div><span class="label">📅 Year:</span> {{ selectedProject.year }}</div>-->
<!--          </div>-->

<!--          <hr />-->

<!--          <div v-html="markdownContent" class="markdown-body"></div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--    </el-drawer>-->


<!--    <el-dialog-->
<!--        :visible.sync="drawerVisible"-->
<!--        :title="selectedProject?.title || 'Project Detail'"-->
<!--        width="60%"-->
<!--        class="project-dialog"-->
<!--        :close-on-click-modal="false"-->
<!--    >-->
<!--      <div class="project-detail-container">-->
<!--        <el-card shadow="always" class="project-card">-->
<!--          <h2 class="project-title">{{ selectedProject.title }}</h2>-->

<!--          <div class="info-grid">-->
<!--            <div><span class="label">📚 Source:</span>-->
<!--              <el-tag v-for="(s, i) in toArray(selectedProject?.source)" :key="i" type="info">{{ s }}</el-tag>-->
<!--            </div>-->

<!--            <div><span class="label">✍️ Author:</span> {{ selectedProject.author || 'Unknown' }}</div>-->
<!--            <div><span class="label">🔗 Paper URL:</span>-->
<!--              <a v-if="selectedProject.url" :href="selectedProject.url" target="_blank">{{ selectedProject.url }}</a>-->
<!--              <span v-else>空白</span>-->
<!--            </div>-->

<!--            <div><span class="label">🌟 Status:</span>-->
<!--              <el-tag-->
<!--                  v-for="(tag, index) in selectedProject.status"-->
<!--                  :key="index"-->
<!--                  type="success"-->
<!--                  closable-->
<!--                  @close="removeTag(index)"-->
<!--              >{{ tag }}</el-tag>-->
<!--              <el-input-->
<!--                  v-model="newTag"-->
<!--                  size="small"-->
<!--                  placeholder="Add status"-->
<!--                  @keyup.enter="addTag"-->
<!--                  style="width: 120px; margin-left: 10px;"-->
<!--              />-->
<!--            </div>-->

<!--            <div><span class="label">📅 Year:</span> {{ selectedProject.year }}</div>-->
<!--          </div>-->

<!--          <hr />-->

<!--          <div v-html="markdownContent" class="markdown-body"></div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--    </el-dialog>-->


    <el-dialog
        :visible.sync="drawerVisible"
        :title="selectedProject?.title || 'Project Detail'"
        width="60%"
        class="project-dialog"
        :close-on-click-modal="false"
    >
      <div class="dialog-content">
        <h2 class="project-title">{{ selectedProject.title }}</h2>

        <div class="info-grid">
          <div><span class="label">📚 Source:</span>
            <el-tag v-for="(s, i) in toArray(selectedProject?.source)" :key="i" type="info">{{ s }}</el-tag>
          </div>

          <div><span class="label">✍️ Author:</span> {{ selectedProject.author || 'Unknown' }}</div>

          <div><span class="label">🔗 Paper URL:</span>
            <a v-if="selectedProject.url" :href="selectedProject.url" target="_blank">{{ selectedProject.url }}</a>
            <span v-else>空白</span>
          </div>

          <div><span class="label">🌟 Status:</span>
            <el-tag
                v-for="(tag, index) in selectedProject.status"
                :key="index"
                type="success"
                closable
                @close="removeTag(index)"
            >{{ tag }}</el-tag>
            <el-input
                v-model="newTag"
                size="small"
                placeholder="Add status"
                @keyup.enter="addTag"
                style="width: 120px; margin-left: 10px;"
            />
          </div>

          <div><span class="label">📅 Year:</span> {{ selectedProject.year }}</div>
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
      projects: [],

      projectFolders: [
        "ai_assisted_creation",
        // "literature_review_tool",
        // "nns_ns_communication"
      ],

      drawerVisible: false,
      selectedProject: {},
      newTag: "",
      markdownContent: ""
    };
  },

  methods:{
    openDrawer(project) {
      console.log("Clicked project:", project);
      this.selectedProject = { ...project }; // 深拷贝避免副作用
      this.markdownContent = marked(project.content || "No content available.");
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

      this.projects = loadedProjects
          .filter((p) => p !== null)
          .sort((a, b) => b.year - a.year); // 降序排序
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


</style>
