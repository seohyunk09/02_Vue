<template>
  <div>
    <div class="card card -body">
      <h2>Members</h2>
      <p>요청 경로 : {{ currentRoute.fullPath }}</p>
    </div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <router-link :to="{ name: 'members/id', params: { id: m.id } }">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import member from '@/members.json';

export default {
  name: 'Members',
  setup() {
    const currentRoute = useRoute();
    return { currentRoute };
  },
};
</script>
