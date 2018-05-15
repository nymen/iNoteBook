<template>
  <editor :content="content" :height="500" :z-index="1000" :auto-height="false"  @change="updateData"></editor>
</template>

<script type="es6">
  //import VueHtml5Editor from '@/../node_modules/vue-html5-editor/dist/vue-html5-editor'
  import option from './../../config/htmlEditorConf'
  import VueHtml5Editor from 'vue-html5-editor'
  let editor = new VueHtml5Editor(option)

  export default {
    name: 'HtmlEditor',
    data() {
      return {
        content: '',
      }
    },
    methods: {
      updateData (text) {
        if (text) {
          this.$emit('htmlUpdate', text);
        }
      }
    },
    components : {
      editor
    }
  }
</script>
