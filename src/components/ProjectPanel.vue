<template>
  <div class="project-panel" :aria-busy="isLoading ? 'true' : 'false'">
    <div v-if="isLoading" class="loading-research" role="status">
      <h2>Publications &amp; Projects</h2>
      <p>Loading research…</p>
      <div class="research-skeleton" aria-hidden="true"></div>
    </div>
    <template v-else>
      <div v-if="failedProjects.length" class="status-message" role="alert">
        <p>{{ allProjects.length ? 'Some projects could not be loaded. Available projects are shown below.' : 'Research could not be loaded. Please try again.' }}</p>
        <button class="text-button" @click="loadAllProjects">Retry loading</button>
      </div>
      <div v-if="allProjects.length" class="publication-library">
        <div class="section-heading">
          <h2>Publications &amp; Projects</h2>
        </div>
        <div class="filter-panel">
          <div class="filter-toolbar">
            <label for="research-search" class="search-label">Find research</label>
            <div class="search-field">
              <span class="el-icon-search" aria-hidden="true"></span>
              <input id="research-search" v-model.trim="searchQuery" type="search" class="search-input" placeholder="Search title, author, venue, or keyword" />
            </div>
            <details ref="categoryMenu" class="category-menu" @keydown.esc.prevent.stop="closeCategoryMenu">
              <summary ref="categoryToggle" class="filter-toggle" :class="{ active: selectedCategories.length > 0 }">
                Research area <span v-if="selectedCategories.length" class="filter-count">{{ selectedCategories.length }}</span>
                <span class="filter-arrow el-icon-arrow-down" aria-hidden="true"></span>
              </summary>
              <div class="filter-options" role="group" aria-label="Filter by research area">
                <label v-for="category in availableCategories" :key="category" class="filter-option">
                  <input v-model="selectedCategories" type="checkbox" :value="category" />
                  <span>{{ category }}</span>
                </label>
                <button class="clear-filter-button" @click="clearCategories">Clear selection</button>
              </div>
            </details>
          </div>
        </div>

        <div class="project-group">
          <h3 class="group-title">Selected Publications <span>{{ filteredFinishedProjects.length }}</span></h3>
          <PublicationRow v-for="project in filteredFinishedProjects" :key="project.id" :project="project" />
          <p v-if="!filteredFinishedProjects.length" class="empty-state">No publication matches the current search or label filters.</p>
        </div>
        <div class="project-group">
          <h3 class="group-title">Ongoing Projects <span>{{ filteredOngoingProjects.length }}</span></h3>
          <PublicationRow v-for="project in filteredOngoingProjects" :key="project.id" :project="project" />
          <p v-if="!filteredOngoingProjects.length" class="empty-state">No ongoing project matches the current search or label filters.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import PublicationRow from "@/components/PublicationRow";

export default {
  name: "ProjectPanel",
  components: { PublicationRow },
  created() {
    this.loadAllProjects();
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  data() {
    return {
      searchQuery: "",
      isLoading: true,
      failedProjects: [],
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
        "cscw_doctoral_consortium",
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
    handleOutsideClick(event) {
      const menu = this.$refs.categoryMenu;
      if (menu && menu.open && !menu.contains(event.target)) menu.open = false;
    },
    closeCategoryMenu() {
      this.$refs.categoryMenu.open = false;
      this.$refs.categoryToggle.focus();
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
      this.isLoading = true;
      this.failedProjects = [];
      const loadedProjects = await Promise.all(
          this.projectFolders.map((folder) => this.loadProject(folder))
      );

      const validProjects = loadedProjects.filter((p) => p !== null);

      this.ongoingProjects = validProjects
          .filter((p) => p.status && p.status[0] === "🕒 Ongoing")
          .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));

      this.finishedProjects = validProjects
          .filter((p) => !p.status || p.status[0] !== "🕒 Ongoing")
          .sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
      this.isLoading = false;
    },
    async loadProject(folder) {
      try {
        const metaRes = await fetch(`/projects/${folder}/meta.json`);
        if (!metaRes.ok) throw new Error(`Project unavailable: ${folder}`);
        const meta = await metaRes.json();
        return { ...meta, id: folder };
      } catch (error) {
        this.failedProjects.push(folder);
        return null;
      }
    }
  }
};
</script>

<style scoped>
.loading-research { min-height: 420px; }
.loading-research p { color: var(--muted); }
.research-skeleton { height: 260px; border-radius: var(--radius); background: var(--surface-soft); }
.status-message { margin-bottom: 32px; }
.status-message p { margin-bottom: 4px; }
.filter-panel { margin-bottom: 28px; }
.filter-toolbar { display: flex; align-items: flex-start; gap: 12px; }
.search-label { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.search-field { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; padding: 0 18px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface-soft); }
.search-field > span { color: var(--muted); font-size: 17px; }
.search-field:focus-within { border-color: var(--accent); background: var(--surface); box-shadow: 0 0 0 3px rgba(0, 0, 0, .06); }
.search-input { width: 100%; min-width: 0; height: 44px; padding: 0; border: 0; background: transparent; color: var(--text); font-size: 15px; }
.search-input:focus-visible { outline: none; }
.search-input::-webkit-search-cancel-button { cursor: pointer; filter: grayscale(1); opacity: .7; }
.search-input::placeholder { color: var(--muted); opacity: 1; }
.category-menu { position: relative; flex-shrink: 0; }
.filter-toggle { display: flex; align-items: center; gap: 10px; min-height: 46px; padding: 10px 16px; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--accent); list-style: none; cursor: pointer; font-size: var(--control-font-size); line-height: 1.4; font-weight: 500; }
.filter-toggle::-webkit-details-marker { display: none; }
.filter-toggle:hover { border-color: var(--muted); }
.filter-toggle.active { color: var(--button-text); background: var(--button-bg); border-color: var(--button-bg); }
.filter-count { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding-inline: 5px; border-radius: var(--control-radius); background: var(--surface-soft); color: var(--text); font-size: 11px; }
.filter-arrow { font-size: 12px; }
.category-menu[open] .filter-arrow { transform: rotate(180deg); }
.filter-options { position: absolute; top: calc(100% + 8px); right: 0; z-index: 5; width: 264px; padding: 10px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: 0 8px 24px rgba(34, 34, 34, .08); }
.filter-option { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 6px 10px; border-radius: 8px; color: var(--text); font-size: 14px; cursor: pointer; }
.filter-option:hover { background: var(--surface-soft); }
.filter-option input { width: 16px; height: 16px; margin: 0; flex-shrink: 0; accent-color: var(--accent); cursor: pointer; }
.clear-filter-button { width: 100%; min-height: 36px; margin-top: 6px; padding: 8px 10px; border: 0; border-top: 1px solid var(--line); background: transparent; color: var(--muted); text-align: left; font-size: var(--control-font-size); line-height: 1.4; }
.clear-filter-button:hover { color: var(--text); }
@media (prefers-reduced-motion: no-preference) { .filter-arrow { transition: transform .2s ease; } }
.project-group + .project-group { margin-top: 48px; }
.group-title { display: flex; align-items: baseline; gap: 12px; border-bottom: 1px solid var(--line); padding-bottom: 14px; margin-bottom: 0; }
.group-title span { color: var(--muted); font-family: var(--font-body); font-size: 13px; font-weight: 400; }
.empty-state { padding: 28px 0; color: var(--muted); font-size: 16px; }
@media (max-width: 600px) {
  .filter-toolbar { flex-wrap: wrap; gap: 10px; }
  .search-field { flex-basis: 100%; padding-inline: 14px; }
  .search-input { font-size: 16px; }
  .filter-options { left: 0; right: auto; }
}
</style>
