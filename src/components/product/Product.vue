<template>
    <div v-if="hasProduct">
        <app-popup :showPopup="popupShow"></app-popup>
        <div class="container-product">
            <app-product-gallery :images="product.images"></app-product-gallery>
            <div class="product-info">
                <div class="product-info__title">
                    <strong>{{product.title}}</strong>
                </div>
                <div class="product-info__price">
                    $ {{product.price}},00
                </div>
                <div class="product-info__rating">
                    <strong>{{product.rating}} <i class="fa-solid fa-star"></i></strong>
                </div>
                <div class="product-info__text">
                    {{`${product.description}. ${productText}`}}
                </div>
                <div class="product-info__btns">
                    <div v-if="!inCart(id)" class="btns-add">
                        <app-btn-counter :count="counter" @changeCnt="changeCounter"></app-btn-counter>
                        
                        <app-main-btn :text="'Add to cart'" @actionClick="addToCart({id: id, count: counter})"></app-main-btn>
                    </div>
                    <div v-else class="btn-remove">
                        <app-main-btn :text="'remove from cart'" @actionClick="remove(id)"></app-main-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-product-description">
            <div  class="container-description">
                <div 
                    v-for="item, i in blockDescription" 
                    :key="i" class="description-title" 
                    :class="{'active-desctiption' : item.title === curentDescription}"
                    @click="curentDescription = item.title"
                >{{item.title}}</div>
            </div>
            <div class="description-text">
                <transition name="changeDescText" mode="out-in"><p :key="curentDescription">{{ currentDescription }}</p></transition>
            </div>
        </div>
    </div>
    <app-e404 v-else/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppE404 from '../E404.vue'
import AppProductGallery from './ProductGallery.vue'
import AppPopup from '../Popup.vue'
import AppBtnCounter from '../buttons/ButtonCounter.vue'
import AppMainBtn from '../buttons/MainButton.vue'

export default {
    components:{
        AppE404,
        AppProductGallery,
        AppPopup,
        AppBtnCounter,
        AppMainBtn
    },
    data(){
        return{
            counter: 1,
            productText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus libero blanditiis iusto non fugit error eaque voluptatum dolor? Dolorem, voluptatibus similique! Odit deserunt sunt iure nesciunt numquam, saepe fugit.',
            curentDescription: 'Description',
            popupShow: false,
            blockDescription:[{
                    title: 'Description',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus libero blanditiis iusto non fugit error eaque voluptatum dolor? Dolorem, voluptatibus similique! Odit deserunt sunt iure nesciunt numquam, saepe fugit.',
                },
                {
                    title: 'Aditional Information',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus libero blanditiis iusto non fugit error eaque voluptatum dolor? Dolorem, voluptatibus similique! Odit deserunt sunt iure nesciunt numquam, saepe fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus libero blanditiis iusto non fugit error eaque voluptatum dolor? Dolorem, voluptatibus similique! Odit deserunt sunt iure nesciunt numquam, saepe fugit.',
                }
            ],
        }
    },
    methods:{
        ...mapActions('cart', [ 'add', 'remove' ]),
        changeCounter(operation){
            if(operation === '-'){
                if(this.counter > 1)
                    this.counter--;
            }
            if(operation === '+'){
                if(this.counter < 5)
                    this.counter++;
            }
        },
        changeShowPopup(){
            this.popupShow = !this.popupShow;

            setTimeout(() => {
                this.popupShow = !this.popupShow
            },8000)
        },
        addToCart(el){
            this.changeShowPopup();

            this.$store.dispatch('cart/add', {id: el.id, count: el.count});
        }
    },
    computed:{
        ...mapGetters('products', {getOneProduct: 'oneProduct'}),
        ...mapGetters('cart', ['inCart']),
        id(){
            return this.$route.params.id
        },
        validId(){
            return /^[1-9]+\d*$/.test(this.id)
        },
        product(){
            return this.getOneProduct(this.id)
        },
        currentDescription(){
            return this.blockDescription.find(type => type.title === this.curentDescription).text;
        },
        hasProduct(){
            return this.validId && this.product !== undefined
        }
    },
}
</script>

<style>
.changeDescText-enter-active{
    animation: changeIn 0.4s;
}
.changeDescText-leave-active{
    animation: changeOut 0.4s;
}

@keyframes changeIn{
    from{transform: translateY(-170%);}
    to{transform: translateY(0);}
}
@keyframes changeOut{
    from{transform: translateY(0);}
    to{transform: translateY(-170%);}
}

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