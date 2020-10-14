
<script>
    export default {
        props: ['tipo'],
        render (createElement){
            return createElement(
                this.tipo,
                this.$slots.default,
            )
        }
    }
</script>

<style>

</style>