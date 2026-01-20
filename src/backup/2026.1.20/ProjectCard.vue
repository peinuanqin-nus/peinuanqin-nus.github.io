<template>
<!--  <el-card class="project-card"  @click.native="goToProject">-->
  <el-card class="project-card" @click="$emit('click')">
    <img :src="project.image" alt="Project Image" class="project-image" />
    <div class="project-info">
<!--      <span-->
<!--          class="project-title"-->
<!--          :title="project.title"-->
<!--      >📌 {{ project.title }}</span>-->
      <span
          class="project-title"
          :title="project.short_title"
      >📌 {{ project.short_title }}</span>
<!--      <div class="labels">-->
<!--        <span v-for="(label, index) in project.labels" :key="index" class="label">{{ label }}</span>-->
<!--      </div>-->

<!--      <div class="labels">-->
<!--        <p class="year">{{ project.year }}</p>-->
<!--        <el-tag-->
<!--            v-for="(tag, index) in project.status"-->
<!--            :key="index"-->
<!--            size="small"-->
<!--            :type="tagColorMap[tag] || 'info'"-->
<!--        >{{ tag }}</el-tag>-->
<!--      </div>-->

      <div class="labels-row">
        <p class="year">{{ project.year }}</p>
        <div class="tags">
          <el-tag
              v-for="(tag, index) in project.status"
              :key="index"
              size="small"
              :type="tagColorMap[tag] || 'info'"
          >{{ tag }}</el-tag>
        </div>
      </div>


    </div>
  </el-card>
</template>

<script>

export default {
  name: "ProjectCard",
  props: {
    project: Object,
    index: Number,
  },
  data(){
    return{
      tagColorMap: {
        "🕒 Ongoing": 'warning',
        "🟢 Accept": 'success'
      }
    }
  },
  methods:{
    goToProject() {
      console.log("click on project", this.index)
      // this.$router.push(`/project/${this.index}`);
    }
  },

};
</script>

<style scoped>
.project-card {
  position: relative;
  text-align: left;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin-top: 20px;
}

/* Hover 放大 + 阴影增强 */
.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.project-info {
  padding: 20px;
}

/* Title 省略并用 title 显示完整内容 */
.project-title {
  display: block;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.labels {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.label {
  font-size: 12px;
  background-color: #f5f5f5;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}

.year {
  bottom: 5px;
  font-size: 14px;
  font-weight: bold;
}

/* 让 Element Plus 的 Card 不要有默认 padding */
::v-deep .el-card__body {
  padding: 0;
}


.labels-row {
  display: flex;
  align-items: center;  /* 垂直居中对齐 */
  gap: 10px;
  margin-top: 10px;
}

.year {
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}


::v-deep(.el-tag) {
  border-radius: 12px !important; /* 想多大就多大 */
  /*padding: 3px 10px; !* 可选：更紧凑些 *!*/
}

</style>
