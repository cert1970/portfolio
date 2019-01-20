<template>
  <portfolio-section section-name="projects">
    <v-card v-for="(item, index) in values" :key="index" style="margin-bottom: 10px">
      <v-card-title primary-title>
        <div>
          <h3 class="headline font-weight-medium mb-2">{{ item.name }}</h3>
          <ul>
            <li>개요: {{ item.summary }}</li>
            <li>규모: {{ item.size }}</li>
            <li>역할: {{ item.roles }}</li>
            <li>기술: {{ item.skills }}</li>
          </ul>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn flat color="primary" :href="link.url" v-for="(link, index) in item.links" :key="index">{{ link.name }}</v-btn>
      </v-card-actions>
    </v-card>
  </portfolio-section>
</template>

<script>
import PortfolioSection from "../PortfolioMainSection";

export default {
  extends: [PortfolioSection],
  components: {
    PortfolioSection
  },
  data: () => ({
    values: [
      {
        name: "Feel Korea Focus",
        links: [
          {
            name: "Website",
            url: "http://feelkoreafocus.com/"
          }
        ],
        date: "2018-03 / 2018-05",
        size: "아웃소싱 프로젝트 (1인 개발)",
        summary: "경북 지역 내·외국인 학생들의 교류를 위한 커뮤니티 사이트",
        skills: "PHP, MySQL, GNUBOARD"
      }
    ]
  })
};
</script>
