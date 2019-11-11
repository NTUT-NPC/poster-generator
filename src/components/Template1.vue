<template>
  <div class="container">
    <h1 class="title">請編輯圖內文字</h1>
    <p class="description">字體載入緩慢，請耐心等候</p>
    <div id="preview">
      <img
        class="preview-img"
        src="~@/assets/template1.png"
        alt=""
      >
      <div class="preview-content">
        <input
          class="preview-title"
          value="Python 入門"
        />
        <input
          class="preview-subtitle"
          value="從零帶你學"
        />
      </div>
    </div>
    <div>
      <el-button
        class="download-btn"
        type="primary"
        round
        @click="$router.go(-1)"
      >上一步</el-button>
      <el-button
        class="
        download-btn"
        type="primary"
        round
        @click="downloadImage"
      >下載</el-button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  data () {
    return {

    }
  },
  methods: {
    downloadImage () {
      this.$loading({ fullscreen: true })

      let content = document.getElementById('preview')
      let width = content.offsetWidth
      let height = content.offsetHeight
      let scale = 2
      let opts = {
        scale: 2 * scale
      }
      html2canvas(content, opts).then(canvas => {
        canvas.style.width = scale * width + 'px'
        canvas.style.height = scale * height + 'px'
        let url = canvas.toDataURL('image/png')
        let link = document.createElement('a')
        link.download = 'npc-image.png'
        link.href = url
        link.click()
        this.$loading().close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/earlyaccess/cwtexyen.css");
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

input {
  background: none;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
}
.container {
  padding: 32px 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    margin: 0;
  }
  #preview {
    * {
      font-family: "Nunito", "cwTeXYen", sans-serif;
    }
    position: relative;
    width: 640px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    .preview {
      &-img {
        width: 640px;
        height: 360px;
        z-index: -1;
      }
      &-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &-title {
        color: white;
        font-weight: bold;
        font-size: 56px;
      }
      &-subtitle {
        color: #fbc02d;
        font-size: 28px;
      }
    }
  }
  .download-btn {
    margin-top: 24px;
  }
}
</style>
