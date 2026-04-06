<template>
  <div class="project-panel">
    <div class="section-heading">
      <p class="section-eyebrow">Research Portfolio</p>
      <h2>Projects & Publications</h2>
      <p class="section-intro">
        A curated selection of accepted papers and ongoing projects across communication, writing, learning, and social support.
      </p>
    </div>

    <div class="project-group">
      <div class="group-header">
        <div>
          <h3>Selected Publications</h3>
          <p>Accepted and published work with links, abstracts, and publication details.</p>
        </div>
        <span class="group-count">{{ finishedProjects.length }}</span>
      </div>

      <div class="group-card">
        <PublicationRow
            v-for="(project, index) in finishedProjects"
            :key="`finished-${index}`"
            :project="project"
        />
      </div>
    </div>

    <div class="project-group">
      <div class="group-header">
        <div>
          <h3>Ongoing Projects</h3>
          <p>Current systems, interventions, and research questions under active development.</p>
        </div>
        <span class="group-count">{{ ongoingProjects.length }}</span>
      </div>

      <div class="group-card">
        <PublicationRow
            v-for="(project, index) in ongoingProjects"
            :key="`ongoing-${index}`"
            :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import PublicationRow from "@/components/PublicationRow";

export default {
  name: "ProjectPanel",
  components: { PublicationRow },
  created() {
    this.loadAllProjects();
  },
  data() {
    return {
      ongoingProjects: [],
      finishedProjects: [],
      projectFolders: [
        "cyberbullying_mitigation",
        "ai_mediated_communication",
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
        "ai_assisted_creation",
        "advancing_communication_between_groups",
        "skill_development",
        "automatic_interview",
        "modeling_human"
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>

<style scoped>
.project-panel {
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

.project-panel h2 {
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

.project-group + .project-group {
  margin-top: 40px;
}

.group-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.group-header h3 {
  margin: 0;
  font-size: 1.4rem;
}

.group-header p {
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

.group-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.96) 100%);
  border: 1px solid rgba(20, 92, 82, 0.1);
  border-radius: 24px;
  padding: 8px 26px;
  box-shadow: 0 16px 40px rgba(21, 31, 38, 0.05);
}

@media (max-width: 768px) {
  .project-panel h2 {
    font-size: 1.6rem;
  }

  .group-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .group-card {
    padding: 4px 18px;
  }
}
</style>
