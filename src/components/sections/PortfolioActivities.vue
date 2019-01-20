<template>
  <portfolio-section section-name="activities">
    <div class="d-flex mb-2">
      <v-btn @click="openPanels" depressed color="primary">
        Open
      </v-btn>
      <v-btn @click="closePanels" outline>
        Close
      </v-btn>
    </div>
    <v-expansion-panel
      v-model="panel"
      expand
    >
      <v-expansion-panel-content
        v-for="(item, index) in items"
        :key="index"
      >
        <div slot="header">
          <v-chip label outline :color="setColor(item.type)" disabled>
            {{ item.type }}
          </v-chip> {{ item.org }} | {{ item.name }}
        </div>
        <v-card color="grey lighten-5">
          <v-card-text>
            <ul>
              <li>기간: {{ item.date }}</li>
              <li>설명: {{ item.summary }}</li>
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
    panel: [true, true, true],
    colors: {
      인턴: "blue",
      사회: "orange",
      봉사: "green",
      교육: "purple"
    },
    items: [
      {
        name: "게임사업부",
        date: "2018-03-02 / 2018-07-27",
        org: "부산정보산업진흥원",
        type: "인턴",
        summary:
          "진흥원 제작 지원 게임 홍보, 지스타(G-STAR) · 부산인디커넥트페스티벌(BIC) 등의 행사 소개, 게임 체험관 · 체험 행사 운영"
      },
      {
        name: "소프트웨어 교육 봉사 동아리",
        date: "2017-12-30 / 2018-08-05",
        org: "부산대학교",
        type: "봉사",
        summary:
          "엔트리, 아두이노, MIT App Inventor 등을 활용한 교육 (청소년 165명, 대학생 65명 대상)"
      },
      {
        name: "제4-5기 대학생기자단",
        date: "2017-04-11 / NOW",
        org: "한국전자통신연구원",
        type: "사회",
        summary: "연구원, IT 관련 행사 취재 및 어린이기자단 멘토링"
      },
      {
        name: "BGC 서포터즈",
        date: "2017-08-07 / 2018-01-31",
        org: "부산글로벌게임센터",
        type: "사회",
        summary: "부산의 게임 관련 행사 취재, 센터 제작 지원 게임 소개"
      },
      {
        name: "제5기 저작권기자단",
        date: "2016-06-03 / 2016-11-25",
        org: "한국저작권위원회",
        type: "사회",
        summary:
          "컴퓨터프로그램저작물과 오픈소스 라이선스 등 저작권 전반에 관한 의식 확산 활동"
      },
      {
        name: "정보보안 전문가 과정",
        date: "2014-05-19 / 2014-09-26",
        org: "i2sec",
        type: "교육",
        summary:
          "C 프로그래밍, 리눅스, 시스템 해킹, 네트워크 해킹, 리버스 엔지니어링, 웹 해킹 이론 및 실습"
      }
    ]
  }),
  methods: {
    setColor(type) {
      return this.colors[type];
    },
    openPanels() {
      this.panel = [...Array(this.items.length).keys()].map(() => true);
    },
    closePanels() {
      this.panel = [];
    }
  }
};
</script>
