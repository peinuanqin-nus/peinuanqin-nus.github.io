<template>
  <div class="publication-row" @click="$emit('click')">
    <!-- 左侧图片 -->
    <img :src="project.image" class="pub-image" />

    <!-- 右侧信息 -->
    <div class="pub-meta">
      <p class="pub-title">
        <b>[{{ project.published }}]</b> {{ project.title }}
      </p>

      <p class="pub-authors" v-html="authorsHtml"></p>

      <p class="pub-venue">
        <i>{{ project.venue || project.published }}</i>
      </p>

<!--      <div class="pub-tags">-->
<!--        <el-tag-->
<!--            v-for="(tag, i) in project.status"-->
<!--            :key="i"-->
<!--            size="small"-->
<!--            :type="tagColorMap[tag] || 'info'"-->
<!--        >-->
<!--          {{ tag }}-->
<!--        </el-tag>-->
<!--      </div>-->
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
  computed: {
    authorsHtml() {
      return marked(this.project.author || "");
    },
  },
  data() {
    return {
      tagColorMap: {
        "🕒 Ongoing": "warning",
        "🟢 Accept": "success",
      },
    };
  },
};
</script>

<style scoped>
.publication-row {
  display: flex;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
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
  margin-bottom: 4px;
}

.pub-authors {
  color: #444;
}

.pub-venue {
  color: #666;
  font-size: 13px;
}

.pub-tags {
  margin-top: 6px;
}
</style>
