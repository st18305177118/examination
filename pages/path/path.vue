<template>
    <div>
      path
      {{aaa}}
    </div>
</template>

<script>
    export default {
        data() {
          return {
            aaa: []
          }
        },
        mounted() {
          this.aaa = this.$route.params.na
          console.log(this.$route.params)
        }
    }
</script>

<style>

</style>
