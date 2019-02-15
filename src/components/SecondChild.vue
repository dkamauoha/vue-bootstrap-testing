<template>
    <div id='second'>
        <b-container class='text-center '>
            <b-row>
                <b-col>
                    <div>
                        <b-btn variant='secondary'>Button to click!</b-btn>
                    </div>
                </b-col>
                <b-col>2</b-col>
                <b-col>3</b-col>
            </b-row>
            <b-row>
                <b-col>4</b-col>
                <b-col>5</b-col>
            </b-row>
        </b-container>
        <b-carousel id='carousel1'
                    style='text-shadow: 1px 1px 2px #333'
                    controls
                    indicators
                    background="#ababab"
                    :interval='4000'
                    img-width='1024'
                    img-height='480'
                    v-model="slide"
                    @sliding-start='onSlideStart'
                    @sliding-end="onSlideEnd"
        
        >
            <b-carousel-slide   caption='First slide'
                                text='sample text'
                                img-src="https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"            
            ></b-carousel-slide>
            <b-carousel-slide   img-src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80ty"
            
            >

            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import city from '../assets/city.jpg';
    export default {
        name: 'second',
        data () {
            return {
                slide: 0,
                sliding: null,
                city: city
            }
        },
        method: {
            onSlideStart (slide) {
                this.sliding = true;
            },
            onSlideEnd (slide) {
                this.sliding = false;
            }
        }
    }
</script>

<style>
    div.col {
        border: 1px solid grey;
    }
</style>