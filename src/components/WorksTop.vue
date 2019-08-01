<template lang="html">
    <div class="wrapper workstop">
        <h2>Works</h2>
        <div class="box">
            <figure>
                <img :src="geechs01">
            </figure>
            <h3 class="ttl">geechs job サイト リニューアル </h3>
            <p class="skill"> Icon Design /HTML,CSS,javascript </p>
            <p class="read"> 以前からあったフリーランス検索サイトのリニューアル作業を行いました。その中でフロントのコーディングをメインに作業しました。<br>
                <a href="https://geechs-job.com/" target="_blank" class="text-link">https://geechs-job.com/</a>
            </p>
            <figure>
                <img :src="pop01">
            </figure>
            <h3 class="ttl">POP SNOW リフト券プレゼントキャンペーン </h3>
            <p class="skill"> Design / HTML,CSS,javascript</p>
            <p class="read"> 日本全国、様々なスキー場様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>
            <figure>
                <img :src="fuyu01">
            </figure>
            <h3 class="ttl">冬スポツアー　温泉特集ページ </h3>
            <p class="skill"> Design / HTML,CSS,javascript </p>
            <p class="read">冬スポ!!WINTER SPORT FESTAのサイト内にスキー・スノーボードツアーページを作成し、その中で温泉ページ特集を作成しました。</p>
            <figure>
                <img :src="pop02">
            </figure>
            <h3 class="ttl">日本スキー場開発様のプレゼントキャンペーンページ</h3>
            <p class="skill"> Design / HTML,CSS,javascript </p>
            <p class="read">日本スキー場開発様からご協賛をいただきスキー場検索サイトPOPSNOW内でリフト券のプレゼントキャンペーンを行いました。</p>

        </div>

    </div>
</template>
<script>
    export default {
        title: "works",
        description: "Worksトップページ",
        props: ["data"], // 追加
        data: function () {
            return {
                geechs01: require("../assets/img/works/geechs01.png"),
                pop01: require("../assets/img/works/pop01.jpg"),
                fuyu01: require("../assets/img/works/fuyu01.jpg"),
                pop02: require("../assets/img/works/pop02.jpg")
            };
        }
    };
</script>

<style lang="scss" scoped>
    .workstop {
        h2 {
            -webkit-writing-mode: vertical-rl;
            -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
            font-size: 2em;
            border-bottom: 1px solid #000;
            padding-bottom: 1em;
            font-weight: 900;
            position: absolute;
            left: -7%;
            top: 0%;
        }
        img {
            width: 100%;
        }
        .box {
            margin-left: 3em;
        }
        h3 {
            margin-top: 1em;
            margin-bottom: 1em;
            font-weight: 900;
        }
        .skill {
            margin-bottom: 1em;
        }

        .read {
            line-height: 1.65;
            border-bottom: 1px solid #ccc;
            padding-bottom: 3em;
            margin-bottom: 3em;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        .text-link {
            color: #B2E9FF;
        }
    }

    .wrapper {
        position: relative;
        width: 70%;
        margin: 0 auto;
        margin-top: 3em;
    }
</style>
