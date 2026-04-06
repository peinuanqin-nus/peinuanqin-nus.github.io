<template>
  <div class="project-panel">
    <div class="section-heading">
      <p class="section-eyebrow">Research Portfolio</p>
      <h2>Projects & Publications</h2>
      <p class="section-intro">
        A curated selection of accepted papers and ongoing projects across communication, writing, learning, and social support.
      </p>
    </div>

    <div class="filter-panel">
      <div class="search-wrap">
        <input
            v-model.trim="searchQuery"
            type="text"
            class="search-input"
            placeholder="Search by title, author, venue, abstract, or keyword"
        />
      </div>

      <div class="filter-tags">
        <button
            class="filter-chip"
            :class="{ active: selectedCategories.length === 0 }"
            @click="clearCategories"
        >
          All
        </button>
        <button
            v-for="category in availableCategories"
            :key="category"
            class="filter-chip"
            :class="{ active: selectedCategories.includes(category) }"
            @click="toggleCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <p class="filter-summary">
        Showing {{ filteredFinishedProjects.length + filteredOngoingProjects.length }} of {{ allProjects.length }} projects
      </p>
    </div>

    <div class="project-group">
      <div class="group-header">
        <div>
          <h3>Selected Publications</h3>
          <p>Accepted and published work with links, abstracts, and publication details.</p>
        </div>
        <span class="group-count">{{ filteredFinishedProjects.length }}</span>
      </div>

      <div class="group-card">
        <PublicationRow
            v-for="(project, index) in filteredFinishedProjects"
            :key="`finished-${index}`"
            :project="project"
        />
        <p v-if="filteredFinishedProjects.length === 0" class="empty-state">No publication matches the current search or label filters.</p>
      </div>
    </div>

    <div class="project-group">
      <div class="group-header">
        <div>
          <h3>Ongoing Projects</h3>
          <p>Current systems, interventions, and research questions under active development.</p>
        </div>
        <span class="group-count">{{ filteredOngoingProjects.length }}</span>
      </div>

      <div class="group-card">
        <PublicationRow
            v-for="(project, index) in filteredOngoingProjects"
            :key="`ongoing-${index}`"
            :project="project"
        />
        <p v-if="filteredOngoingProjects.length === 0" class="empty-state">No ongoing project matches the current search or label filters.</p>
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
      searchQuery: "",
      selectedCategories: [],
      availableCategories: [
        "AI for communication",
        "AI for learning",
        "AI for assessment",
        "AI for creation",
        "AI for social good"
      ],
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
  computed: {
    allProjects() {
      return [...this.finishedProjects, ...this.ongoingProjects];
    },
    filteredFinishedProjects() {
      return this.finishedProjects.filter((project) => this.matchesFilters(project));
    },
    filteredOngoingProjects() {
      return this.ongoingProjects.filter((project) => this.matchesFilters(project));
    }
  },
  methods: {
    toggleCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter((item) => item !== category);
        return;
      }
      this.selectedCategories = [...this.selectedCategories, category];
    },
    clearCategories() {
      this.selectedCategories = [];
    },
    matchesFilters(project) {
      const query = this.searchQuery.toLowerCase();
      const haystack = [
        project.title,
        project.short_title,
        project.author,
        project.abstract,
        project.published,
        project.year,
        ...(project.categories || []),
        ...((project.labels || []).map((label) => label.title))
      ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

      const matchesQuery = !query || haystack.includes(query);
      const matchesCategory =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.some((category) => (project.categories || []).includes(category));

      return matchesQuery && matchesCategory;
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

.filter-panel {
  margin-bottom: 34px;
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(20, 92, 82, 0.1);
  border-radius: 22px;
  box-shadow: 0 12px 34px rgba(21, 31, 38, 0.04);
}

.search-wrap {
  margin-bottom: 16px;
}

.search-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgba(20, 92, 82, 0.14);
  border-radius: 14px;
  box-sizing: border-box;
  font: inherit;
  font-size: 15px;
  color: #1f1f1f;
  background: rgba(255, 255, 255, 0.92);
}

.search-input:focus {
  outline: none;
  border-color: rgba(20, 92, 82, 0.35);
  box-shadow: 0 0 0 4px rgba(20, 92, 82, 0.08);
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-chip {
  padding: 8px 14px;
  border: 1px solid rgba(20, 92, 82, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: #34544d;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.18s ease;
}

.filter-chip:hover {
  transform: translateY(-1px);
  border-color: rgba(20, 92, 82, 0.24);
}

.filter-chip.active {
  background: rgba(20, 92, 82, 0.1);
  color: #145c52;
  border-color: rgba(20, 92, 82, 0.22);
}

.filter-summary {
  margin: 14px 0 0;
  font-size: 0.92rem;
  color: #6a6a6a;
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

.empty-state {
  margin: 20px 0;
  color: #727272;
  font-style: italic;
}

@media (max-width: 768px) {
  .project-panel h2 {
    font-size: 1.6rem;
  }

  .filter-panel {
    padding: 16px;
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
