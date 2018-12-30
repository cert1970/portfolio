<template>
  <main class="page-container">
    <portfolio-section name="skills">
      <template slot-scope="props">
        <v-data-table
          class="elevation-1"
          :headers="props.values.headers"
          :items="props.values.items"
          disable-initial-sort
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td style="width: 150px">
              <v-rating
                v-model="props.item.level"
                half-increments
                length="3"
                readonly
                small
              >
              </v-rating>
            </td>
            <td>
              <ul v-for="(detail, index) in props.item.details" :key="index">
                <li>{{ detail }}</li>
              </ul>
            </td>
          </template>
        </v-data-table>
      </template>
    </portfolio-section>

    <portfolio-section name="projects">
      <template slot-scope="props">
        <v-card v-for="(item, index) in props.values" :key="index" style="margin-bottom: 10px">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <ul>
                <li>{{ item.url }}</li>
                <li>{{ item.overview }}</li>
                <li>{{ item.size }}</li>
                <li>{{ item.roles }}</li>
                <li>{{ item.skills }}</li>
              </ul>
            </div>
          </v-card-title>
        </v-card>
      </template>
    </portfolio-section>

    <portfolio-section name="education">
      <template slot-scope="props">
        <!-- <ul v-for="(items, index) in props.values" :key="index">
          <li v-for="(item, key, index) in items" :key="index">
            {{ item }}
          </li>
        </ul> -->
        <v-card v-for="(item, index) in props.values" :key="index">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <ul>
                <li>기간: {{ item.date }}</li>
                <li>평균 학점: {{ item.gpa }}</li>
              </ul>
            </div>
          </v-card-title>

          <!-- <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions> -->
        </v-card>
      </template>
    </portfolio-section>

    <portfolio-section name="activities">
      <template slot-scope="props">
        <v-card v-for="(item, index) in props.values" :key="index" style="margin-bottom: 10px">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <ul>
                <li>{{ item.date }}</li>
                <li>{{ item.org }}</li>
                <li>{{ item.type }}</li>
                <li>{{ item.summary }}</li>
              </ul>
            </div>
          </v-card-title>
        </v-card>
      </template>
    </portfolio-section>

    <portfolio-section name="awards">
      <template slot-scope="props">
        <v-data-table
          class="elevation-1"
          :headers="props.values.headers"
          :items="props.values.items"
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
      </template>
    </portfolio-section>

    <portfolio-section name="certifications">
      <template slot-scope="props">
        <v-data-table
          class="elevation-1"
          :headers="props.values.headers"
          :items="props.values.items"
          disable-initial-sort
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.date }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.org }}</td>
          </template>
        </v-data-table>
      </template>
    </portfolio-section>
  </main>
</template>

<script>
import PortfolioSection from "./PortfolioMainSection";

export default {
  components: {
    PortfolioSection
  }
};
</script>

<style lang="stylus">
.p-main
  padding: 0 1rem

ul
  padding: 0 !important
  list-style-type: none
</style>
