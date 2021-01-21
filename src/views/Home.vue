<template lang="pug">
  #home
   
    Cover
    //- Intro
    img.intro(src="../assets/1.png")
    Massage
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cover from '@/components/cover.vue'
import Intro from '@/components/intro.vue'
import Massage from '@/components/massage.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Cover,
    Intro,
    Massage
  }
}
</script>
<style lang="sass">
.intro
  margin-top: 60px
</style>
