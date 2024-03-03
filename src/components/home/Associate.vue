<template>
    <!-- https://www.youtube.com/watch?v=3Z780EOzIQs&t=10s -->

    <section id="associate">

        <swiper class="px-3 py-4" :modules="modules" effect="cube" :grabCursor="true" :loop="true" :cubeEffect="{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }" :pagination="{ clickable: true }">
            <swiper-slide>
                <img src="https://media.istockphoto.com/id/1486626509/photo/woman-use-ai-to-help-work-or-use-ai-everyday-life-at-home-ai-learning-and-artificial.jpg?s=1024x1024&w=is&k=20&c=GdZtXvKObS4z87L6zwi7fgmWlynJx4dRitwYJUtClLo="
                    class="mx-auto h-80 w-144" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_1280.jpg" class="mx-auto h-80 w-144"
                    alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_1280.jpg" class="mx-auto h-80 w-144"
                    alt="">
            </swiper-slide>
        </swiper>

    </section>
</template>

<script>
import { EffectCube, Pagination } from 'swiper'

export default {
    name: 'Associate',
    setup() {
        return {
            modules: [EffectCube, Pagination],
        }
    }
};
</script>

<style lang="scss" scoped>
#associate {

    padding-top: 40px;
    padding-bottom: 40px;

    background-color: $Blue;



}
</style>