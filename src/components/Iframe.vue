<template>
  <div class="md-iframe-frame">
    <iframe
      ref="iframe"
      frameborder="0"
      scrolling="no"
      width="100%"
      height="100%"
      marginwidth="0px"
      marginheight="0px"
      :src='$route.query.url'>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'mdIframe',
  mounted () {
    window.addEventListener('resize', () => {
      this.changeFrameHeight();
    });
    this.changeFrameHeight();
  },
  methods: {
    changeFrameHeight () {
      let iframeDom = this.$refs.iframe;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      iframeDom.style.height = clientHeight - 104 + 'px';
    }
  }
}
</script>

<style lang="scss" scoped>
.md-iframe-frame {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
