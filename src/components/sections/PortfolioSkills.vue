<template>
  <portfolio-section section-name="skills">
    <v-data-table
      class="elevation-1 portfolio-section__table"
      :headers="headers"
      :items="items"
      disable-initial-sort
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>
          <v-tooltip bottom close-delay="100">
            <v-rating
              v-model="props.item.step"
              half-increments
              length="3"
              readonly
              small
              slot="activator"
            ></v-rating>
            <span>{{ getStepText(props.item.step) }}</span>
          </v-tooltip>
        </td>
        <td>
          <v-chip
            label
            outline
            color="primary"
            v-for="(detail, index) in props.item.details"
            :key="index"
          >{{ detail }}</v-chip>
        </td>
      </template>
    </v-data-table>
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
    headers: [
      {
        text: "Name",
        value: "name",
        width: "200px"
      },
      {
        text: "Step",
        value: "step",
        width: "150px",
        steps: [
          "Beginning guide를 완료한 수준 | 기본 문법 이해 가능",
          "패러다임을 학습하는 단계 & 소규모(개인, 팀) 프로젝트에 적용한 경험",
          "트렌드를 탐구하는 단계 & 실제 서비스를 운영한 경험"
        ]
      },
      {
        text: "Details",
        value: "detail",
        sortable: false
      }
    ],
    items: [
      {
        name: "HTML / CSS",
        step: 3,
        details: [
          "BEM",
          "Bootstrap",
          "Material Components for the web",
          "Sass(SCSS)",
          "SEO(OpenGraph, Twitter Cards, Scheme.org)",
          "Stylus"
        ]
      },
      {
        name: "Git",
        step: 2.5,
        details: ["Git Flow", "GitHub", "GitHub Flow", "GitLab"]
      },
      {
        name: "JavaScript",
        step: 2.5,
        details: ["Node.js", "Vue.js(Vue CLI, Vuetify)", "Webpack"]
      },
      {
        name: "Python",
        step: 2.5,
        details: ["BeautifulSoup", "Requests", "Selenium"]
      },
      {
        name: "C / C++",
        step: 2,
        details: []
      },
      {
        name: "Database",
        step: 2,
        details: ["MySQL(MariaDB)"]
      },
      {
        name: "Docker",
        step: 2,
        details: ["Docker", "Docker Compose"]
      },
      {
        name: "Linux",
        step: 2,
        details: ["CentOS", "Ubuntu"]
      },
      {
        name: "PHP",
        step: 2,
        details: ["Composer", "Laravel"]
      },
      {
        name: "C#",
        step: 1.5,
        details: ["WPF"]
      },
      {
        name: "Assembly",
        step: 1,
        details: ["Intel x86"]
      },
      {
        name: "Java",
        step: 1,
        details: ["JSP", "Servlet", "Swing"]
      },
      {
        name: "Machine Learning",
        step: 1,
        details: ["TensorFlow"]
      }
    ]
  }),
  methods: {
    getStepText(value) {
      return this.headers.find(item => item.value == "step").steps[
        Math.floor(value) - 1
      ];
    }
  }
};
</script>
