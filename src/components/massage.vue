<template lang="pug">
   .newsContainer 
    .newsTitle {{title}}
    .newsFlex
     .newsItem(v-for="item in news") 
      .newsImg(:style="{'background-image': 'url(' + item.img + ')'}")
      .newsText {{item.title}}

</template>
<script>
export default {
  name: 'News',
  data(){
      return {
          title:'------------院學士班最新訊息------------',
          news:[
                {title:'【獲獎】《那顆Ｇ1咻！》國立清華大學藝術學院學士班第一屆系展 得獎名單',img:'https://ipta.nthu.edu.tw/wp-content/uploads/2020/10/banner.png'},
                {title:'【獲獎】2020春之清華 – 藝術卓越獎 科技藝術類 得獎名單',img:'https://ipta.nthu.edu.tw/wp-content/uploads/2020/09/light2-01.jpg'},
                {title:'【獲獎】2020藝術學院學士班春之清華獎學金 獲獎名單',img:'https://ipta.nthu.edu.tw/wp-content/uploads/2019/10/board-2303325_1920.jpg'}
            ]
      }
  }
}
</script>
<style lang="sass">
.newsContainer
    width: 100%
.newsTitle
    text-align: center
    font-size: 64px
    margin-top: 60px
    margin-bottom: 60px 
    color: #C7A10D
.newsFlex
    width: 90%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    margin: auto
.newsItem 
    margin-bottom: 30px
.newsImg
    width: 630px
    height: 240px
    background-size: cover
.newsText
    text-align: center
    font-size: 18px
    margin-top: 10px
    color: #C7A10D

</style>