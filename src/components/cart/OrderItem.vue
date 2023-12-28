<template>
    <div class="order-products__item">
        <div class="products-item__img">
            <img :src="itemInfo.images[0]">
        </div>
        <div class="products-item__info">
            <div class="products-item__info__title">
                <div class="products-item__info__title__name"><strong>{{ itemInfo.title }}</strong></div>
                <div class="products-item__info__title__price">$ {{ itemInfo.price }},00</div>
                <div class="products-item__info__title__cnt">
                    <app-btn-counter 
                    :count="itemInfo.cnt" 
                    @changeCnt="changeCounter($event, itemInfo.id, itemInfo.cnt)"
                />
                </div>
            </div>
            <div class="products-item__info__count">
                <app-btn-counter :count="itemInfo.cnt" @changeCnt="changeCounter($event, itemInfo.id, itemInfo.cnt)"></app-btn-counter>
            </div>
        </div>
        <div class="products-item__btn_delete" @click="remove(itemInfo.id)">
            <div class="tool-bar__icons">
                <fa-icon :icon="['fas', 'xmark']"></fa-icon>
            </div>
        </div>
    </div>
</template>

<script>
import AppBtnCounter from '../UI/ButtonCounter.vue'
import { mapActions } from 'vuex'

export default {
    name: 'OrderItem',
    props:{
        itemInfo:{
            required: true
        }
    },
    components:{
        AppBtnCounter
    },
    methods:{
        ...mapActions('cart', ['remove', 'updateCnt']),
        changeCounter(operation, id, value){
            if(operation === '-'){
                this.updateCnt({id, value: value-1})
            }
            if(operation === '+'){
                this.updateCnt({id, value: value+1})
            }
        },
    },
}
</script>