<template>
  <div class="recent-news-page">
    <div class="page-center">
      <el-row :gutter="28" class="content-row">
        <el-col :xs="24" :md="14" class="full-height">
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

        <el-col :xs="24" :md="10" class="full-height">
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
          date: "2026-03",
          content:
              "🎉 **Two** [first-author] full papers have been **conditionally accepted** by **CSCW 2026**. I am currently preparing the camera-ready versions, and the final titles and preprints will be announced soon."
        },
        {
          date: "2026-02",
          content:
              "🎉 **Two** papers accepted as **CHI 2026 Posters**: <br/>" +
              "- [first author] <u>_ConvScale: Conversational Interviews for Scale-Aligned Measurement_</u> <br/>" +
              "- [second author] <u>_Branchat: A Tree-Structured Interface for Efficient Revisitation in Long-Horizon LLM Conversations_</u>"
        },
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
              "🎉 **Three** full papers accepted to **CHI 2026**: <br/>" +
              "- [first author] <u>_AI Personalization Paradox: Reading Highlights for Personalized AI-Assisted Writing Increases Engagement but Undermines Autonomy and Ownership_</u> <br/>" +
              "- [first author] <u>_ChatLearn: Leveraging Non-Native Speaker Communication Challenges as Language Learning Opportunities_</u> <br/>" +
              "- [third author] <u>_Designing Computational Tools for Exploring Causal Relationships in Qualitative Data_</u>"
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
        {
          date: "2025-03",
          content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Leveraging Generative AI to Enhance Direct Cyberbullying Intervention and Support Teen Well-Being_</u> accepted to **CHI 2025 Mobile Technology and Teens workshop**"
        },
        {
          date: "2025-02",
          content:
              "🎉 **Two** papers accepted to **CHI 2025**: <br/>" +
              "- [first author] Full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> <br/>" +
              "- [fifth author] Contributed to <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> (led by Menghan)"
        },
        { date: "2025-02", content: "🎉 [first author] Full paper <u>_AI-Based Speaking Assistant: Supporting Non-Native Speakers’ Speaking in Real-Time Multilingual Communication_</u> accepted to **CSCW 2025**" },
        { date: "2024-12", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Enhancing Direct Intervention in Cyberbullying with EmojiGen_</u> accepted to [**WABF (World Anti-Bullying Forum) 2025**](https://indico2.uis.no/event/49/contributions/1491/)" },
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
        }
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
.recent-news-page {
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-center {
  width: 100%;
  max-width: 1200px;
  height: 55vh;
  padding: 0;
  box-sizing: border-box;
}

.content-row,
.full-height {
  height: 100%;
}

.panel {
  height: 100%;
  background: linear-gradient(180deg, rgba(252, 250, 246, 0.96) 0%, rgba(247, 244, 236, 0.96) 100%);
  border: 1px solid rgba(20, 92, 82, 0.12);
  border-radius: 24px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 16px 42px rgba(21, 31, 38, 0.06);
}

.panel-title {
  font-size: 1.55rem;
  font-weight: 700;
  margin: 0 0 14px;
  flex-shrink: 0;
  color: #17322e;
}

.panel-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
}

.panel-scroll::-webkit-scrollbar {
  width: 8px;
}

.panel-scroll::-webkit-scrollbar-thumb {
  background: rgba(20, 92, 82, 0.24);
  border-radius: 999px;
}

.news-content {
  font-size: 14px;
  line-height: 1.7;
  color: #313131;
}

.panel :deep(.el-timeline-item__timestamp) {
  color: #145c52;
  font-weight: 700;
}

.panel :deep(.el-timeline-item__node) {
  background-color: #145c52;
}

.panel :deep(.el-card__body) {
  padding: 18px;
}

.award-card {
  margin-bottom: 14px;
  border-radius: 16px;
  border: 1px solid rgba(20, 92, 82, 0.08);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: none;
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
  line-height: 1.6;
}

@media (max-width: 768px) {
  .recent-news-page,
  .page-center,
  .content-row,
  .full-height {
    height: auto;
  }

  .panel {
    padding: 20px 18px;
  }

  .panel-scroll {
    max-height: 48vh;
  }

  .full-height + .full-height {
    margin-top: 18px;
  }
}
</style>
