<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col text-center">
        <h1 class="light">Mardown Preview</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <h4 class="light">Mardown</h4>
        <textarea class="info" v-model="markdown"/>
      </div>
      <div class="col-md-6">
        <h4 class="light">Preview</h4>
        <div class="info" :key="markdown" v-markdown>{{markdown}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      markdown: '# HELLO WORD \n',
    };
  },
};
</script>

<style scoped>
textarea {
  resize: none;
  border: 2px dashed orange;
  outline: none;
}
.info {
  height: 400px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
