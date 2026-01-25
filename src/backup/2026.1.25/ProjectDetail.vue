<template>
  <div class="project-detail-blog">
<!--    <v-md-editor :model-value="content" mode="preview" />-->
<!--    <v-md-editor v-model="content" mode="preview" />-->
<!--    <v-md-editor v-model="content" mode="preview" />-->
<!--    <v-md-preview :text="content" />-->
    <v-md-editor v-model="content" height="400px"></v-md-editor>

  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      content: `
# Writing Retrieval System ✍️

This project is part of my PhD work at NUS. It's designed to support:

- Language-aware writing
- Highlight-based knowledge tracing
- 🧠 Cognitive offloading

## Screenshot

![Writing System UI](/projects/AI-assisted%20writing.png)

## Technologies

\`\`\`bash
Vue.js + Django + ChromaDB + LLM
\`\`\`

Stay tuned for the paper 📄!
      `
    };
  }
};
</script>
