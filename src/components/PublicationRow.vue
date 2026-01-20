<template>
  <div class="publication-row">
    <!-- 左图 -->
    <img :src="project.image" class="pub-image" />

    <!-- 右侧 meta -->
    <div class="pub-meta">
      <p class="pub-title">
        <b>[{{ project.published }}]</b> {{ project.title }}
      </p>

      <p class="pub-authors" v-html="authorsHtml"></p>

<!--      <p class="pub-venue">-->
<!--        <i>{{ project.venue || project.published }}</i>-->
<!--      </p>-->

      <!-- 🔘 Buttons -->
<!--      <div class="pub-actions">-->
<!--        <el-button-->
<!--            v-if="project.url"-->
<!--            type="primary"-->
<!--            size="mini"-->
<!--            plain-->
<!--            @click.stop="openUrl"-->
<!--        >-->
<!--          Paper URL-->
<!--        </el-button>-->

<!--        <el-button-->
<!--            size="mini"-->
<!--            plain-->
<!--            @click.stop="toggleAbstract"-->
<!--        >-->
<!--          Abstract-->
<!--          <span v-if="showAbstract">▲</span>-->
<!--          <span v-else>▼</span>-->
<!--        </el-button>-->
<!--      </div>-->
      <div class="pub-actions">
        <span
            v-if="project.url"
            class="action-link"
            @click.stop="openUrl"
        >
          📄 Paper
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


      <!-- 📄 Abstract -->
      <div v-if="showAbstract" class="pub-abstract">
        <p v-html="abstractHtml"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "PublicationRow",
  props: {
    project: Object,
  },
  data() {
    return {
      showAbstract: false,
    };
  },
  computed: {
    authorsHtml() {
      return marked(this.project.author || "");
    },
    abstractHtml() {
      return marked(this.project.abstract || "Abstract not available.");
    },
  },
  methods: {
    toggleAbstract() {
      this.showAbstract = !this.showAbstract;
    },
    openUrl() {
      window.open(this.project.url, "_blank");
    },
  },
};
</script>

<style scoped>
.publication-row {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.pub-image {
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
}

.pub-meta {
  flex: 1;
  font-size: 14px;
  line-height: 1.6;
}

.pub-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.pub-authors {
  color: #333;
}

.pub-venue {
  color: #666;
  font-size: 13px;
}

/*.pub-actions {*/
/*  margin-top: 6px;*/
/*  display: flex;*/
/*  gap: 8px;*/
/*}*/

.pub-actions {
  margin-top: 6px;
  display: flex;
  gap: 14px;
  font-size: 13px;
}

.action-link {
  color: #666;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
}

.action-link:hover {
  color: #000;
  text-decoration: underline;
}

.arrow {
  font-size: 11px;
  margin-left: 2px;
}

.pub-abstract {
  margin-top: 10px;
  padding-left: 10px;
  border-left: 3px solid #ddd;
  color: #444;
  font-size: 13px;
  line-height: 1.7;
}
</style>
