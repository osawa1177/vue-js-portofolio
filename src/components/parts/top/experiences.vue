<template>
  <section class="experiences">
    <h2>Experiences</h2>
    <div class="row bg">

      <section class="education-wrap mt-8 mb-3">
        <div class="education">
          <div class="education-box"><span class="education-date"> <span> - 2014</span> </span>
            <h3> 職業訓練校 </h3>
            <p>職業訓練校にてPCの基礎と資格を取得し、Web制作における基礎を学ぶ。<br>
              (Webクリエイター能力認定試験)</p>
          </div>
        </div>

        <div class="education">
          <div class="education-box"><span class="education-date"> <span>2014 - 2015</span> </span>
            <h3><a target="_blank" href="https://www.alts.co.jp/"> 星野リゾート アルツ磐梯スキー場 / 業務委託 </a></h3>
            <p>HTML、CSS、PHPなどを使いWeb制作、更新業務を行う。
              またDTPなどの知識なども身につけ、Google Analyticsなどを使いサイトを解析する技術などを身につける。</p>
          </div>
        </div>

        <div class="education">
          <div class="education-box"><span class="education-date"> <span>2015 - 2016</span> </span>
            <h3><a target="_blank" href="https://www.pfu.fujitsu.com/imaging/"> 株式会社PFU / 派遣 </a></h3>
            <p>HTML、CSS、などを使い Web制作、イントラサイト更新業務を行いその中でBootstrapなどを使いレスポンシブデザインなどコーディング中心に業務を行う。
            </p>
          </div>
        </div>

        <div class="education">
          <div class="education-box"><span class="education-date"> <span>2016 - 2018</span> </span>
            <h3><a target="_blank" href="http://www.fuyusupo.jp/company.html"> 株式会社 ディーオーディー </a></h3>
            <p>自社サイトのWebサイト制作、ECサイト運営・解析、Wordpressページ作成、及びGoogle Analyticsを使いサイトの解析などの業務を行う。
            </p>
          </div>
        </div>

        <div class="education">
          <div class="education-box"><span class="education-date"> <span>2018 - 2019 </span> </span>
            <h3><a target="_blank" href="https://geechs-job.com/"> geechs 株式会社 </a> <span class="free-start">フリーランススタート</span></h3>
            <p>フリーランス案件検索サイトのリニューアル作業を行い、HTML、CSS、Javascript、icon作成業務、Google
              Analyticsを使いサイトの解析などを行う。(Gulp,FLOCSS,Laravel,pardot)
            </p>
          </div>
        </div>

        <div class="education">
          <div class="education-box"><span class="education-date"> <span>2019 - </span> </span>
            <h3><a target="_blank" href="http://geomarketing.co.jp//"> ジオマーケティング株式会社 </a></h3>
            <p>商業施設とテナントのマッチングサービスgleasinのサイトを制作、UIデザイン HTML、CSS、Javascript、icon作成業務、Google Analyticsを使いサイトの解析
              などを行う。(Webpacker,Ruby on rails,Wordpress)
            </p>
          </div>
        </div>

      </section>
    </div>
  </section>

</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="scss" scoped>


  .education {
    position: relative;

    &:before {
      background-color: #1390ff;
      left: 0;
      bottom: 0;
      width: 2px;
      content: '';
      opacity: .5;
      position: absolute;
      height: 116px;
      top: -20%;
    }

    &-wrap {
      margin-left: auto;
      margin-right: auto;
      padding-left: 30rem;
    }
  }

  .education-box {
    padding-right: 90px;
    position: relative;
    padding-left: 20px;
    margin-bottom: 45px;

    &:before {
      background-color: #1a1a1a;
      content: "";
      top: 10px;
      left: -1px;
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
    }
  }

  .education-date {
    color: #1a1a1a;
    background-color: #fff;
    margin-left: 0;
    margin-right: 22px;
    padding: 8px 6px;
    font-size: .875em;
    text-align: center;
    position: absolute;
    width: 160px;
    right: 100%;
    left: auto;
    top: -4px;
    letter-spacing: 0;
    line-height: 1.1;
    display: inline-block;

    span {
      overflow: hidden;
      position: relative;
      display: block;
      white-space: nowrap;
    }

  }

  .education-date:after {
    content: "";
    top: 0;
    left: 100%;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 16px solid transparent !important;
    border-bottom: 16px solid transparent !important;
    border-right: 10px solid transparent !important;
    border-left: 10px solid transparent;
    border-color: #fff;
  }

  .education-box {
    h3 {
      margin-bottom: .5rem;
      font-size: 15px;
    }

    a {
      color: #010101;
      font-size: 15px;
      text-decoration: none;
      display: inline-block;
      padding-top: 5px;
    }

    p {
      font-size: 12px;
      padding-top: 5px;
      letter-spacing: 1px;
      line-height: 1.65;
      width: 70%;
      color: #a8a8a8;
    }
  }

  .education-company {
    color: #a8a8a8;
  }


  .experiences {
    position: relative;

    h2 {
      position: absolute;
      right: 10%;
      top: -30px;
    }


    ul {
      width: 100%;
      text-align: center;
      padding: 3em 0;

      li {
        display: block;
        height: 1em;
        padding: 2em 0 2em;

        &:last-child {
          padding-bottom: 4em;
        }

        &:first-child {
          padding-top: 4em;
        }
      }
    }
  }
  .free-start{
    font-size: 8px;
    padding-top: 5px;
    color: #128fff;
  }

  @media (max-width: 480px) {
    .experiences {

      ul {
        padding: 0;
      }
    }
  }
</style>
