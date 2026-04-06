<template>
  <article class="publication-row">
    <div class="image-wrap">
      <img :src="project.image" class="pub-image" />
      <span v-if="project.year" class="year-badge">{{ project.year }}</span>
    </div>

    <div class="pub-meta">
      <p class="pub-title">
        <b>[{{ project.published }}]</b> {{ project.title }}
      </p>

      <p class="pub-authors" v-html="authorsHtml"></p>

      <div v-if="project.labels && project.labels.length" class="pub-labels">
        <el-tag
            v-for="(label, idx) in project.labels"
            :key="idx"
            size="mini"
            :type="label.type || 'info'"
            effect="light"
        >
          {{ label.title }}
        </el-tag>
      </div>

      <div class="pub-actions">
        <span
            v-if="project.arxiv"
            class="action-link"
            @click.stop="openUrl(project.arxiv)"
        >
           🔗 Arxiv
        </span>
        <span
            v-if="project.url"
            class="action-link"
            @click.stop="openUrl(project.url)"
        >
          📖 Paper
        </span>
        <span
            class="action-link"
            @click.stop="toggleAbstract"
        >
          📝 Abstract
          <span class="arrow">
            {{ showAbstract ? "▲" : "▼" }}
          </span>
        </span>
      </div>

      <div v-if="showAbstract" class="pub-abstract">
        <p v-html="abstractHtml"></p>
      </div>
    </div>
  </article>
</template>

<script>
import { marked } from "marked";

export default {
  name: "PublicationRow",
  props: {
    project: Object
  },
  data() {
    return {
      showAbstract: false
    };
  },
  computed: {
    authorsHtml() {
      return marked(this.project.author || "");
    },
    abstractHtml() {
      return marked(this.project.abstract || "Abstract not available.");
    }
  },
  methods: {
    toggleAbstract() {
      this.showAbstract = !this.showAbstract;
    },
    openUrl(link) {
      if (!link) return;
      window.open(link, "_blank");
    }
  }
};
</script>

<style scoped>
.publication-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.publication-row:last-child {
  border-bottom: none;
}

.image-wrap {
  position: relative;
  flex-shrink: 0;
  width: 184px;
}

.pub-image {
  width: 184px;
  height: 118px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(34, 46, 39, 0.12);
}

.year-badge {
  position: absolute;
  left: 12px;
  bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(20, 92, 82, 0.9);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}

.pub-meta {
  flex: 1;
  font-size: 14px;
  line-height: 1.6;
  min-width: 0;
}

.pub-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 6px;
}

.pub-authors {
  color: #333;
  margin: 0;
}

.pub-actions {
  margin-top: 10px;
  display: flex;
  gap: 14px;
  font-size: 13px;
  flex-wrap: wrap;
}

.action-link {
  color: #145c52;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  padding: 6px 0;
  font-weight: 600;
}

.action-link:hover {
  color: #0c4038;
}

.arrow {
  font-size: 11px;
  margin-left: 2px;
}

.pub-abstract {
  margin-top: 14px;
  padding: 14px 16px;
  border-left: 3px solid #c3d7d0;
  background: rgba(20, 92, 82, 0.04);
  border-radius: 0 14px 14px 0;
  color: #444;
  font-size: 13px;
  line-height: 1.7;
}

.pub-labels {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 768px) {
  .publication-row {
    flex-direction: column;
    gap: 14px;
  }

  .pub-image {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>
