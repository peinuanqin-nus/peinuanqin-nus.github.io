<!--<template>-->
<!--  <div class="recent-news-container">-->
<!--    <h2>Recent News</h2>-->

<!--    <el-timeline>-->
<!--      <el-timeline-item v-for="(news, index) in recentNews" :key="index" :timestamp="news.date">-->
<!--&lt;!&ndash;        {{renderMarkdown(news.content) }}&ndash;&gt;-->
<!--        <span v-html="renderMarkdown(news.content)">{{renderMarkdown(news.content) }}</span>-->

<!--      </el-timeline-item>-->
<!--    </el-timeline>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="recent-news-container">
    <h2 class="header">Recent News</h2>

    <div class="timeline-scroll-container">
      <el-timeline>
        <el-timeline-item
            v-for="(news, index) in recentNews"
            :key="index"
            :timestamp="news.date"
        >
          <span v-html="renderMarkdown(news.content)">{{renderMarkdown(news.content)}}</span>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>


<script>
import {marked} from "marked";
export default {
  name: "RecentNews",
  data() {
    return {
      // recentNews: [
      //   { date: "2025-03-10", content: "Submitted UIST paper on writing retrieval system." },
      //   { date: "2025-02-28", content: "Integrated ChatPDF into my PDF reader project." },
      //   { date: "2025-02-15", content: "Developed a VueX store for managing PDF annotations." }
      // ]
      recentNews: [
        { date: "2025-03", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Leveraging Generative AI to Enhance Direct Cyberbullying Intervention and Support Teen Well-Being_</u> accepted to **CHI 2025 Mobile Technology and Teens workshop**" },
        // { date: "2025-02", content: "Two full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> and <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> accepted to **CHI 2025**" },
        { date: "2025-02", content: "🎉 [first author] Full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> accepted to **CHI 2025**" },
        {
          date: "2025-02",
          content:
              "🎉 [4th author] Contributed to <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> (led by Menghan), accepted to **CHI 2025**"
        },
        { date: "2025-02", content: "🎉 [first author] Full paper <u>_AI-Based Speaking Assistant: Supporting Non-Native Speakers’ Speaking in Real-Time Multilingual Communication_</u> accepted to **CSCW 2025**" },
        { date: "2024-12", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Enhancing Direct Intervention in Cyberbullying with EmojiGen_</u> accepted to **WABF (World Anti-Bullying Forum) 2025**" },
        {
          date: "2024-05",
          content:
              "🎉  [4th author] contributed to <u>_Mitigating Ageism through Virtual Reality: Intergenerational Collaborative Escape Room Design_</u>, accepted to **CHI 2024 Late-Breaking Work (LBW)**"
        }
      ]
    };
  },

  methods:{
    renderMarkdown(content){
      return marked(content)
    }
  }
};
</script>

<style scoped>
/*.recent-news-container {*/
/*  !*margin-top: 10px;*!*/
/*  padding: 20px;*/
/*  max-width: 50%;*/
/*  !*max-width: 100%;*!*/
/*  max-height: 500px;*/
/*  overflow: auto;*/
/*  background-color: white;*/
/*  border-radius: 10px;*/
/*  !*box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);*!*/
/*  margin: 20px auto;*/
/*  !*align-items: center;*!*/
/*  !*display: flex;*!*/
/*  !*align-content: center;*!*/
/*  !*justify-content: center;*!*/
/*}*/

.recent-news-container {
  padding: 20px;
  max-width: 50%;
  background-color: white;
  border-radius: 10px;
  margin: 20px auto;
  box-sizing: border-box;
}

.header {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

.timeline-scroll-container {
  max-height: 450px; /* 控制滚动区域的高度 */
  overflow-y: auto;
  padding-right: 10px; /* 可选：防止滚动条遮住内容 */
}

</style>
