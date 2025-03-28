<template>
  <div className="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>

    <p>{{ member.desc }}</p>
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagram m -1"
      :href="member.insta"
    ></a>
    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebook m-1"
      :href="member.facebook"
    ></a>
    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtube m-1"
      :href="member.youtube"
    ></a>
    <br /><br />
    <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import members from '@/members.json';

export default {
  name: 'MemberInfo',
  setup() {
    //useRoute(): 현재 라우트 정보 객체

    const currentRoute = useRoute();

    //useRouter() : 라우터 인스턴스(페이지 이동, 히스토리 제어)
    const router = userRouter();

    console.log('currentRoute:', currentRoute);
    console.log('router:', router);
    /* 동적 라우트 시 지정한 파라미터(:id)  얻어오기 */
    const id = parseInt(currentRoute.params.id, 10);
    return { id };
  },
};
</script>
