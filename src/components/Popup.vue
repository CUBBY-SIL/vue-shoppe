<template>
    <transition name="showPopup">
        <div class="container-popup-on-add" v-if="showPopup">
            <div class="popup-text">
                The item added to your Shopping bag.
            </div>
            <a href="#" class="popup-link">View all</a>
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        showPopup:{
            type: Boolean
        }
    },
}
</script>

<style>
.showPopup-enter-active{
    animation: showIn 0.6s;
}
.showPopup-leave-active{
    animation: showOut 0.6s;
}

@keyframes showIn{
    from{transform: translateY(-104px);}
    to{transform: translateY(0);}
}
@keyframes showOut{
    from{transform: translateY(0);}
    to{transform: translateY(-104px);}
}
</style>