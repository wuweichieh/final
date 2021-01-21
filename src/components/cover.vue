<template lang="pug">
   .coverContainer 
    .coverPhoto
     .coverPhotoo
     .coverPhotooo
</template>
<script>
export default {
  name: 'Cover',
 
}
</script>
<style lang="sass">
.coverContainer
    width: 1524px
    height: 492px
    border: 20px solid #C7A10D
    margin: auto
    background-color: #FFFFFF
    padding: 25px
.coverPhoto
    width: 100%
    height:100%
    background-image: url("../assets/abcover.png")
    background-size: cover
    position: relative
.coverPhotoo
    width: 200px
    height:200px
    background-image: url("../assets/4.png")
    background-size: cover
    position: absolute
    left: 20px
    bottom: 20px
.coverPhotooo
    width: 304px
    height:65px
    background-image: url("../assets/nthu.png")
    background-size: cover 
    position: absolute
    right: 13px
    top: 20px  

</style>