<template>
  <portfolio-section section-name="awards">
    <v-data-table
      class="elevation-1 p-content__table"
      :headers="headers"
      :items="items"
      disable-initial-sort
      hide-actions
      item-key="date"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.org }}</td>
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
        text: "Date",
        value: "date",
        width: "150px"
      },
      {
        text: "Name",
        value: "name"
      },
      {
        text: "Organization",
        value: "org",
        sortable: false,
        width: "250px"
      }
    ],
    items: [
      {
        name: "제9회 i-TOP 경진대회 그래픽기술분야 고등부 지역 우수",
        date: "2015-11-19",
        org: "부산일보사"
      },
      {
        name: "제8회 i-TOP 경진대회 인터넷윤리분야 고등부 전국 최우수",
        date: "2014-12-03",
        org: "한국생선성본부"
      },
      {
        name: "제7회 i-TOP 경진대회 정보기술분야 고등부 지역 우수",
        date: "2013-12-05",
        org: "동의대학교"
      }
    ]
  })
};
</script>
