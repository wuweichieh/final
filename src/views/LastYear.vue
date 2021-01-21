<template lang="pug">
.innerPageContainer
    Header
    .pageTitle  {{title}}
    .TextContainer
      Cover
    //- Intro
    img.intro(src="../assets/list.png")
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    },
    data(){
        return {
            title: '2020 錄取名單',
        }
    }
}
</script>
<style lang="sass">
.intro
  margin-top: 60px
</style>