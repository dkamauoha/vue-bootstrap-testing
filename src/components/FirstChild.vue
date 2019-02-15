<template>
    <div id='first'>
        <h3>First!</h3>
        <div class='first__btn-container'>
            <b-btn v-b-modal.modal1>
                Open the Modal
            </b-btn>
            <b-modal id='modal1' title='Example Modal'>
                <p class='my-4'>Look at my modal!</p>
            </b-modal>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'first',
        data () {
            return {

            }
        }
    }
</script>

<style>
    #first {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100%;
    }

    .first__btn-container {
        margin-top: 100px;
    }
</style>