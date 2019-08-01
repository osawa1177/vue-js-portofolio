<template>
  <div class="wrapper contact">
    <h2>Contact</h2>
    <form class="work-request" method="post" action="mail.php">

      <div class="work-request--information">
        <div class="info-name">
          <label for="name">お名前</label>
          <input id="name" type="text" spellcheck="false" name="お名前">
        </div>
        <div class="info-email">
          <label for="email">メールアドレス</label>
          <input id="email" type="email" spellcheck="false" name="Email">
        </div>
        <div class="info-q">
          <label>お問い合わせ</label>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <input type="submit" value="Send Message" class="btn01">
      </div>
    </form>
  </div>

</template>
<script>
export default {
  title: "Contact",
  description: "コンタクトページ",
  props: ["data"]
};
</script>

<style lang="scss">
.contact {
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
  .info-email,
  .info-q,
  .info-name {
    input {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 65%;
      margin-bottom: 1em;
    }
    label {
      text-align: right;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
      width: 30%;
      padding-right: 3em;
    }
    textarea {
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 65%;
      padding-bottom: 3em;
      margin-bottom: 1em;
    }
  }
}

.wrapper {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: 3em;
}

.btn01 {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: 20em;
}
@media (max-width: 480px) {
  .contact {
    .info-email,
    .info-q,
    .info-name {
      input {
        width: 100%;
        margin-left: 2em;
      }
      label {
        width: 60%;
      }
      textarea {
        width: 100%;
        margin-left: 2em;
      }
    }
  }
  .btn01 {
    margin-left: 2.4em;
  }
}
</style>
