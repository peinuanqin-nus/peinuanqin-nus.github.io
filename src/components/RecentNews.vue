<template>
  <div class="recent-news-page">
    <div class="page-center">
      <el-row :gutter="28" class="content-row">
        <!-- Left: News -->
        <el-col :span="14" class="full-height">
          <div class="panel">
            <h2 class="panel-title">Recent News</h2>

            <div class="panel-scroll">
              <el-timeline>
                <el-timeline-item
                    v-for="(news, index) in recentNews"
                    :key="index"
                    :timestamp="news.date"
                >
                  <div
                      class="news-content"
                      v-html="renderMarkdown(news.content)"
                  />
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </el-col>

        <!-- Right: Awards -->
        <el-col :span="10" class="full-height">
          <div class="panel">
            <h2 class="panel-title">Awards & Honors</h2>

            <div class="panel-scroll">
              <el-card
                  v-for="(award, index) in awards"
                  :key="index"
                  class="award-card"
                  shadow="hover"
              >
                <div class="award-title">
                  {{ award.icon }} {{ award.title }}
                </div>
                <div class="award-meta">{{ award.year }}</div>
                <div class="award-desc">{{ award.description }}</div>
              </el-card>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "RecentNewsPage",
  data() {
    return {
      recentNews: [
        {
          date: "2026-01",
          content:
              "🚀 Our startup project successfully cleared the **VIP Three-Month Initial Review**, marking a key milestone and the official start of **Phase II** with continued grant support."
        },
        {
          date: "2026-01",
          content:
              "🌟 Participated in [**NUS-Google Workshop: The Future of CS Education in the AI Era**](https://futuredu.student.ai4sg.org/) (student-focused program) as a <u>_Facilitator_</u>"
        },
        {
          date: "2026-01",
          content:
              "🎉 [first author] Full paper <u>_AI Personalization Paradox: Reading Highlights for Personalized AI-Assisted Writing Increases Engagement but Undermines Autonomy and Ownership_</u> accepted to **CHI 2026**"
        },
        {
          date: "2026-01",
          content:
              "🎉 [first author] Full paper <u>_ChatLearn: Leveraging Non-Native Speaker Communication Challenges as Language Learning Opportunities_</u> accepted to **CHI 2026**"
        },
        {
          date: "2026-01",
          content:
              "🎉 [third author] Full paper <u>_Designing Computational Tools for Exploring Causal Relationships in Qualitative Data_</u> accepted to **CHI 2026**"
        },

        {
          date: "2025-11",
          content:
              "🌐 Served as a a <u>_Facilitator_</u> at the **[NUS-Google Workshop: Future of CS Education and Curriculum in the AI Era](https://futuredu.ai4sg.org/)** (professor-focused program), which brought together faculty from leading universities worldwide to discuss how computer science education should evolve in the age of AI."
        },
        {
          date: "2025-09",
          content: "🏆 Received the **NUS Venture Initiation Programme (VIP)** award, supporting the development of an **AI-powered evaluation system** that provides scalable, automated **quantitative and qualitative analysis**."
        },

        {
          date: "2025-07",
          content: "🏆 Received the **Research Achievement Award** in recognition of research contributions."
        },
        { date: "2025-04", content: "🎤 Attended **[SG CHI Meetup](https://sghcimeetup25.notion.site/)** on April 15, 2025, and delivered a presentation on my 2025CHI work." },
        { date: "2025-03", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Leveraging Generative AI to Enhance Direct Cyberbullying Intervention and Support Teen Well-Being_</u> accepted to **CHI 2025 Mobile Technology and Teens workshop**" },
        // { date: "2025-02", content: "Two full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> and <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> accepted to **CHI 2025**" },
        { date: "2025-02", content: "🎉 [first author] Full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> accepted to **CHI 2025**" },
        {
          date: "2025-02",
          content:
              "🎉 [fifth author] Contributed to <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> (led by Menghan), accepted to **CHI 2025**"
        },
        { date: "2025-02", content: "🎉 [first author] Full paper <u>_AI-Based Speaking Assistant: Supporting Non-Native Speakers’ Speaking in Real-Time Multilingual Communication_</u> accepted to **CSCW 2025**" },
        { date: "2024-12", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Enhancing Direct Intervention in Cyberbullying with EmojiGen_</u> accepted to **WABF (World Anti-Bullying Forum) 2025**" },
        {
          date: "2024-05",
          content:
              "🎉  [forth author] contributed to <u>_Mitigating Ageism through Virtual Reality: Intergenerational Collaborative Escape Room Design_</u>, accepted to **CHI 2024 Late-Breaking Work (LBW)**"
        }
      ],

      awards: [
        {
          icon: "🏆",
          title: "NUS Venture Initiation Programme (VIP)",
          year: "2025",
          description:
              "Award supporting the development of an AI-powered evaluation system for scalable quantitative and qualitative analysis."
        },
        {
          icon: "🏅",
          title: "Research Achievement Award",
          year: "2025",
          description:
              "Recognized for sustained research contributions and academic excellence."
        },
      ]
    };
  },

  methods: {
    renderMarkdown(content) {
      return marked(content);
    }
  }
};
</script>


<style scoped>
/* 整个页面：固定高度 + 居中 */
.recent-news-page {
  /*height: 100vh;*/
  /*height: 60vh;*/
  height: 55vh;
  /*background: #f4f5f7;*/
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 中央内容块 */
.page-center {
  width: 100%;
  max-width: 1200px;
  height: 55vh; /* 关键：整体高度固定 */
  padding: 0 20px;
  box-sizing: border-box;
}

/* 行和列必须满高 */
.content-row,
.full-height {
  height: 100%;
}

/* Panel 本体 */
.panel {
  height: 100%;
  /*background: white;*/
  /*background: floralwhite;*/
  background: white;
  border-radius: 16px;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* 标题固定 */
.panel-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  flex-shrink: 0;
}

/* 可滚动内容区 */
.panel-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
}

/* News */
.news-content {
  font-size: 14px;
  line-height: 1.6;
}

/* Awards */
.award-card {
  margin-bottom: 14px;
  border-radius: 12px;
}

.award-title {
  font-size: 15px;
  font-weight: 600;
}

.award-meta {
  font-size: 13px;
  color: #888;
  margin: 4px 0 6px;
}

.award-desc {
  font-size: 14px;
  line-height: 1.5;
}
</style>


