<template lang="pug">
.innerPageContainer
    Header
    .pageTitle  {{title}}
    .TextContainer.textContainer
        .text(v-for="item in text") {{item}}
              Cover
    //- Intro
    img.intro(src="../assets/IPTA課程地圖 1.png")
    .newsTitle {{title1}}
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    },
    data(){
        return {
            title: '學士班課程',
             text:[
                   '本學院107學年度成立藝術學院〝科技藝術〞跨域學士班，學院率領一群科技藝術「已經跨域」教師與業界顧問擔任專兼任老師，開出一些「已經跨域」的課程，希望培養一群臺灣科技藝術的尖兵。',
                   '課程設計兼顧跨領域（transdisciplinary）與多領域（multi-disciplinary）。學位：科技藝術學士學位 （Bachelor of Science and Art）第二專長學士學位（若學生有另選第二專長課程）'
               ],
            title1:'●藝術學院學士班108學年度入學必修科目、學分數暨畢業總學分表'
        }
    }
}
</script>
<style lang="sass">
.pageTitle
    font-size: 144px
    color: #C7A10D
    position: absolute
    top: 570px
    left: 680px
.TextContainer
    width: 1618px
    margin: auto
    margin-top: 72px
.textContainer
    border: 3px solid #C7A10D
    background-image: url("../assets/white.png")
.text
    background-size: cover
    padding: 20px 30px
    display: flex
    flex-direction: row
    justify-content: flex-start
    text-align: left
    font-size: 33px
    color: #C7A10D
.intro
  margin-top: 60px
.newsTitle
    text-align: center
    font-size: 30px
    margin-top: 20px
    margin-bottom: 60px 
    color: #C7A10D
</style>

