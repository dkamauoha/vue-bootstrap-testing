<template>
    <div id='home'>
        <h2>Home!</h2>
        <div>{{ count }}</div>
        <button @click='increment'>Increment</button>
        <button @click='decrement'>Decrement</button>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';
    export default {
        name: 'home',
        data () {
            return {
                
            }
        },
        computed: {
            
        },
        methods: {
            
        }
    }
</script>