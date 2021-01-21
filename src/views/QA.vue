<template lang="pug">
.innerPageContainer
    Header
    .pageTitle  {{title}}
    .TextContainer.QAContainer
        .QA(v-for="(item,id) in QA")
            .QAFlex
                .left {{id+1}}.
                .right {{item.Q}}
            .QAFlex
                .left A:
                .AList
                    .right(v-for="i in item.A") {{i}}

</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    },
    data(){
        return {
            title: '招生Q&A',
            QA: [
                {Q: '成績優異的同學，就讀藝術學院學士班，有獎學金嗎？' , A: ['第一志願入學，且成績前三名同學，提供「春之清華-藝術卓越獎學金」，每學期補助3萬 (學雜費全免)，未來每學期維持在班上前幾名者（另定），下一個學期可持續獲此獎學金。詳情請參考：國立清華大學藝術學院學士班春之清華獎學金審查原則']},
                {Q: '請問藝術學院學士班與藝設系有何不同？', A: ['(1)藝術學院學士班主要強調當代藝術中的新形式創作-科技藝術(Technology Art)，亦即運用科技媒介（如感測器晶片、網路、虛擬實境 …）從事創作。', '(2)藝設系主要有油畫、版畫、雕塑等專業課程以及各類工藝專業課程（木藝、玻璃藝術設計、陶瓷藝術設計…等）。']},
                {Q: '請問藝術學院學士班與清華學院的美資班有何不同？', A: ['(1)藝術學院學士班說明如上，藝術學院有專屬教師，也特別開出的「科技藝術」跨域課程。許多課程是全校唯一課程，也是各學系搶修課程，甚至有博士生來修習。', '(2)清華學院的美資班課程設計為多元，師資與課程來自各學院。']},
                {Q: '請問學士班是否大二後會做分流？', A: ['(1)本院學士班主要把「科技藝術」跨域當成專業領域來培育人才，因此不做分流。', '(2)學生未來若志趣不合，可透過轉系方式轉至感興趣之學系就讀。']},
                {Q: '請問考進學士班未來修習之專業課程為何？', A: ['請參考藝術學院學士班「修課說明」說明。']},
                {Q: '請問學士班上課地點？', A: ['(1)目前學士班課程部分在校本部上課、部分在南大校區上課，但通識課程以及一些跨域課程會在校本部上課（每天有校本部與南大校區接駁車）。', '(2)校本部即將興建嶄新的「藝術學院大樓」（全清華最美的大樓）與「教育學院大樓」於台積館旁紫荊葉雕塑作品的對面，藝術學院大樓後方也興建新的學生宿舍。']}
            ]
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
.QAContainer
    border: 3px solid #C7A10D
    background-image: url("../assets/white.png")
    background-size: cover
.QA
    padding: 20px 30px
.QAFlex
    display: flex
    flex-direction: row
    justify-content: flex-start
    text-align: left
    font-size: 44px
    color: #C7A10D
.AList
    display: flex
    flex-direction: column
.left
    margin-right: 5px
</style>