<template>
  <div class="home">
    <div class="select">
      <h2>選擇模板</h2>
      <el-select
        v-model="selectedIndex"
        placeholder="請選擇模板"
      >
        <el-option
          v-for="(template, index) in templates"
          :key="index"
          :label="template.name"
          :value="index"
        >
        </el-option>
      </el-select>
    </div>
    <div class="preview">
      <h2>預覽畫面</h2>
      <img
        :src="previewImage"
        width="500px"
      >
    </div>
    <div>
      <el-button
        type="primary"
        round
        @click="submit"
      >下一步</el-button>
    </div>
  </div>
</template>

<script>
import templates from '@/components'

export default {
  name: 'home',
  components: {
    ...templates
  },
  data () {
    return {
      templates: [
        {
          'name': 'Template1',
          'component': '@/components/Template1',
          'previewImage': require('@/assets/template1-sample.png')
        },
        {
          'name': 'Template2',
          'component': '@/components/Template2',
          'previewImage': require('@/assets/template2-sample.png')
        },
        {
          'name': 'Template3',
          'component': '@/components/Template3',
          'previewImage': require('@/assets/template3-sample.png')
        },
        {
          'name': 'Template4',
          'component': '@/components/Template4',
          'previewImage': require('@/assets/template4-sample.png')
        },
        {
          'name': 'Template5',
          'component': '@/components/Template5',
          'previewImage': require('@/assets/template5-sample.png')
        },
        {
          'name': 'Template6',
          'component': '@/components/Template6',
          'previewImage': require('@/assets/template6-sample.png')
        }
      ],
      selectedIndex: 0
    }
  },
  mounted () {
    this.preload()
  },
  methods: {
    submit () {
      this.$router.push(this.templates[this.selectedIndex].name)
    },
    preload () {
      for (let template of this.templates) {
        let image = new Image()
        image.src = template.previewImage
      }
    }
  },
  computed: {
    previewImage () {
      return this.templates[this.selectedIndex].previewImage
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 24px;
}
.select {
  margin: 32px;
}
.preview {
  margin: 32px;
}
</style>
