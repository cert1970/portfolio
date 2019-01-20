<template>
  <portfolio-section section-name="education">
    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content v-for="(item, index) in items" :key="index">
        <div slot="header">{{ item.name }}</div>
        <v-card>
          <v-card-text>
            <ul>
              <li>기간: {{ item.date }}</li>
              <li>학점: {{ item.gpa }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
    panel: [true],
    items: [
      {
        name: "동의대학교 컴퓨터소프트웨어공학",
        date: "2016-03 / 2018-02 (3학년 1학기 휴학)",
        gpa: "3.92 / 4.5"
      }
    ]
  })
};
</script>
