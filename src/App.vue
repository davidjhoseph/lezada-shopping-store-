<template>
    <div>
        <top-nav></top-nav>
        <router-view/>
    </div>
</template>
<script>
import Topnav from './views/Topnav'
export default {
    components: {
        topNav: Topnav
    }

}
</script>

<style lang="scss">

</style>
