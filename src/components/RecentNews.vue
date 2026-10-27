<template>
  <div class="news-and-awards">
    <div class="news-panel">
      <h2>Recent News</h2>
      <div class="news-scroll" tabindex="0" role="region" aria-label="Recent news, scroll for older updates">
        <ol id="news-list" class="news-list">
          <li v-for="(news, index) in recentNews" :key="index" class="news-item">
            <details class="news-details">
              <summary class="news-summary">
                <time :datetime="news.date">{{ news.date }}</time>
                <span class="news-event">
                  <i :class="news.icon" class="news-icon" aria-hidden="true"></i>
                  <span class="news-overview">{{ news.summary }}</span>
                  <i class="el-icon-arrow-down news-chevron" aria-hidden="true"></i>
                </span>
              </summary>
              <div class="news-content" v-html="renderMarkdown(news.content)"></div>
            </details>
          </li>
        </ol>
      </div>
    </div>
    <div class="awards-panel">
      <h2>Awards &amp; Honors</h2>
      <ul class="awards-list">
        <li v-for="(award, index) in awards" :key="index" class="award-item">
          <span class="award-year">{{ award.year }}</span>
          <div>
            <h3>{{ award.title }}</h3>
            <div class="award-desc" v-html="renderMarkdown(award.description)"></div>
          </div>
        </li>
      </ul>
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
          date: "2026-07",
          icon: "el-icon-trophy",
          summary: "Research Achievement Award from NUS Computing",
          content: "Received the **Research Achievement Award** from the **NUS School of Computing** in recognition of research contributions."
        },
        {
          date: "2026-06",
          icon: "el-icon-reading",
          summary: "Selected for CSCW 2026 Doctoral Consortium",
          content:
              "My paper [***From Immediate Assistance to Sustained Support: Designing AI-Mediated Communication for Non-Native Speakers' Interaction with Native Speakers***](https://doi.org/10.1145/3785651.3830040) was selected for the **CSCW 2026 Doctoral Consortium**."
        },
        {
          date: "2026-03",
          icon: "el-icon-document-checked",
          summary: "Two papers accepted to CSCW 2026",
          content:
              "**Two** papers accepted to **CSCW 2026**:\n\n" +
              "- [first author] [***Alleviating Linguistic and Interactional Anxiety of Non-Native Speakers in Multilingual Communication***](https://doi.org/10.1145/3816899)\n" +
              "- [first author] [***Leveraging AI for Direct Bystander Intervention Against Cyberbullying***](https://doi.org/10.1145/3816963)"
        },
        {
          date: "2026-03",
          icon: "el-icon-medal",
          summary: "CHI 2026 Best Paper Honorable Mention",
          content:
              "Our CHI 2026 paper ***Designing Computational Tools for Exploring Causal Relationships in Qualitative Data*** received a **Best Paper Honorable Mention Award**."
        },
        {
          date: "2026-02",
          icon: "el-icon-document-checked",
          summary: "Three papers and two posters accepted to CHI 2026",
          content:
              "**Three** papers and **two** posters accepted to **CHI 2026**:\n\n" +
              "- [first author] ***AI Personalization Paradox: Reading Highlights for Personalized AI-Assisted Writing Increases Engagement but Undermines Autonomy and Ownership***\n" +
              "- [first author] ***ChatLearn: Leveraging Non-Native Speaker Communication Challenges as Language Learning Opportunities***\n" +
              "- [third author] ***Designing Computational Tools for Exploring Causal Relationships in Qualitative Data***\n" +
              "- [first author, poster] ***ConvScale: Conversational Interviews for Scale-Aligned Measurement***\n" +
              "- [second author, poster] ***Branchat: A Tree-Structured Interface for Efficient Revisitation in Long-Horizon LLM Conversations***"
        },
        // {
        //   date: "2026-01",
        //   content:
        //       "🚀 Our startup project successfully cleared the **VIP Three-Month Initial Review**, marking a key milestone and the official start of **Phase II** with continued grant support."
        // },
        // {
        //   date: "2026-01",
        //   content:
        //       "🌟 Participated in [**NUS-Google Workshop: The Future of CS Education in the AI Era**](https://futuredu.student.ai4sg.org/) (student-focused program) as a <u>_Facilitator_</u>"
        // },
        // {
        //   date: "2025-11",
        //   content:
        //       "🌐 Served as a a <u>_Facilitator_</u> at the **[NUS-Google Workshop: Future of CS Education and Curriculum in the AI Era](https://futuredu.ai4sg.org/)** (professor-focused program), which brought together faculty from leading universities worldwide to discuss how computer science education should evolve in the age of AI."
        // },
        {
          date: "2025-09",
          icon: "el-icon-trophy",
          summary: "NUS Venture Initiation Programme award",
          content: "Received the **NUS Venture Initiation Programme (VIP)** award, supporting the development of an **AI-powered evaluation system** that provides scalable, automated **quantitative and qualitative analysis**."
        },
        {
          date: "2025-07",
          icon: "el-icon-trophy",
          summary: "Research Achievement Award from NUS Computing",
          content: "Received the **Research Achievement Award** from the **NUS School of Computing** in recognition of research contributions."
        },
        // {
        //   date: "2025-03",
        //   content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Leveraging Generative AI to Enhance Direct Cyberbullying Intervention and Support Teen Well-Being_</u> accepted to **CHI 2025 Mobile Technology and Teens workshop**"
        // },
        {
          date: "2025-02",
          icon: "el-icon-document-checked",
          summary: "Two papers accepted to CHI 2025",
          content:
              "**Two** papers accepted to **CHI 2025**:\n\n" +
              "- [first author] Full paper ***Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation***\n" +
              "- [fifth author] Contributed to ***Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs*** (led by Menghan)"
        },
        {
          date: "2025-02",
          icon: "el-icon-document-checked",
          summary: "One paper accepted to CSCW 2025",
          content:
              "**One** paper accepted to **CSCW 2025**:\n\n" +
              "- [first author] [***AI-Based Speaking Assistant: Supporting Non-Native Speakers’ Speaking in Real-Time Multilingual Communication***](https://doi.org/10.1145/3757455)"
        },
        // { date: "2024-12", content: "🎉 [first author] Workshop paper <u>_Empowering Bystanders: Enhancing Direct Intervention in Cyberbullying with EmojiGen_</u> accepted to [**WABF (World Anti-Bullying Forum) 2025**](https://indico2.uis.no/event/49/contributions/1491/)" },
        {
          date: "2024-05",
          icon: "el-icon-document-checked",
          summary: "One paper accepted to CHI 2024 Late-Breaking Work",
          content:
              "**One** paper accepted to **CHI 2024 Late-Breaking Work (LBW)**:\n\n" +
              "- [forth author] ***Mitigating Ageism through Virtual Reality: Intergenerational Collaborative Escape Room Design***"
        }
      ],
      awards: [
        {
          icon: "🏅",
          title: "Research Achievement Award",
          year: "2026",
          description:
              "Awarded by the **NUS School of Computing** in recognition of sustained research contributions and academic excellence."
        },
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
              "Awarded by the **NUS School of Computing** in recognition of sustained research contributions and academic excellence."
        },
        {
          icon: "🏅",
          title: "CHI 2026 Best Paper Honorable Mention Award",
          year: "2026",
          description:
              "Awarded to ***Designing Computational Tools for Exploring Causal Relationships in Qualitative Data***."
        }
      ]
    };
  },
  methods: {
    renderMarkdown(content) {
      return marked(content.replace(/^(?:🏆|🎉|🏅|🌟|🌐|🚀)\s*/, ""));
    }
  }
};
</script>

<style scoped>
.news-and-awards { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 48px; padding-top: 40px; border-top: 1px solid var(--line); }
h2 { margin-bottom: 28px; }
.awards-panel { padding-left: 32px; border-left: 1px solid var(--line); }
ol, ul { list-style: none; padding: 0; margin: 0; }
.news-scroll { max-height: 420px; overflow-y: auto; padding-right: 12px; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: #c8c8c8 transparent; border-radius: 4px; }
.news-scroll:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.news-scroll::-webkit-scrollbar { width: 5px; }
.news-scroll::-webkit-scrollbar-track { background: transparent; }
.news-scroll::-webkit-scrollbar-thumb { background: #c8c8c8; border-radius: 999px; }
.news-scroll::-webkit-scrollbar-thumb:hover { background: #999; }
.news-item { margin-bottom: 24px; }
.news-summary { list-style: none; cursor: pointer; border-radius: 4px; }
.news-summary::-webkit-details-marker { display: none; }
.news-summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
time, .award-year { color: var(--accent); font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
time { display: block; margin-bottom: 6px; }
.news-event { display: grid; grid-template-columns: 18px minmax(0, 1fr) 12px; gap: 10px; align-items: start; }
.news-icon { color: var(--text); font-size: 17px; line-height: 1.45; }
.news-overview { color: var(--text); font-family: var(--font-display); font-size: 16px; font-weight: 500; line-height: 1.5; }
.news-chevron { color: var(--muted); font-size: 12px; line-height: 2; transition: transform 160ms ease; }
.news-details[open] .news-chevron { transform: rotate(180deg); }
.news-summary:hover .news-overview { opacity: .72; }
.news-content { color: var(--muted); font-size: 15px; line-height: 1.7; margin: 10px 22px 0 28px; }
.news-content ::v-deep p { margin: 0 0 8px; }
.news-content ::v-deep p:last-child { margin-bottom: 0; }
.news-content ::v-deep ul { list-style: disc; padding-left: 18px; margin: 8px 0 0; }
.news-content ::v-deep li { padding-left: 2px; margin-bottom: 7px; }
.news-content ::v-deep li:last-child { margin-bottom: 0; }
.news-content ::v-deep strong { color: var(--text); font-weight: 600; }
.news-content ::v-deep em { font-style: italic; }
.news-content ::v-deep em strong { font-weight: 600; }
.news-content ::v-deep a { color: var(--text); text-decoration: none; }
.news-content ::v-deep a:hover { opacity: .72; }
.award-item { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 14px; margin-bottom: 24px; }
.award-item:last-child { margin-bottom: 0; }
.award-year { padding-top: 3px; }
h3 { font-size: 16px; line-height: 1.5; margin: 0 0 7px; }
.award-desc { color: var(--muted); font-size: 14px; line-height: 1.7; }
.award-desc ::v-deep p { margin: 0; }
.award-desc ::v-deep strong { font-weight: 600; }
@media (max-width: 900px) { .news-and-awards { gap: 28px; } .awards-panel { padding-left: 24px; } }
@media (max-width: 900px) {
  .news-and-awards { grid-template-columns: 1fr; gap: 36px; padding-top: 32px; }
  .news-scroll { max-height: 360px; }
  .awards-panel { padding: 32px 0 0; border-left: 0; border-top: 1px solid var(--line); }
}
@media (prefers-reduced-motion: reduce) { .news-chevron { transition: none; } }
</style>
