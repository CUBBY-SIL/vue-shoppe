<template>
    <section class="checkout-section">
        <div class="checkout-section__title">
            <h3>Checkout</h3>
        </div>
        <div class="checkout-section__info">
            <div class="info-container">
                <div class="info-details">
                    <h4 class="info-details__title">Billing Details</h4>
                    <form>
                        <app-my-input 
                            v-for="field, i in userInformation"
                            :key="i" 
                            :placeholderText="field.titleField"
                            :statusActive="field.activated"
                            :statusValid="field.valid"
                            @updated="childInput(i, $event)"
                            @input="counterOnInput"
                        />
                    </form>
                </div>
                <div class="info-order">
                    <h4 class="info-order__title">Your Order</h4>
                    <div class="info-order__details">
                        <div class="details__title">
                            <div class="details__title__item">
                                product
                            </div>
                            <div class="details__title__item">
                                total
                            </div>
                        </div>
                        <div class="details-products">
                            <div class="details-products__item" v-for="item, i in itemsDetailed" :key="i">
                                <div class="products__item__name">{{ item.title }}</div>
                                <div class="products__item__price">${{ item.price * item.cnt }}</div>
                            </div>
                        </div>
                        <div class="info-order__total">
                            <div class="info-order__total__title">
                                Total
                            </div>
                            <div class="info-order__total__price">
                                ${{ total }}
                            </div>
                        </div>
                            <router-link :to="{name: 'orderConfirmation'}">
                                <app-main-btn :text="'PLACE ORDER'" :disabled="!sendBtn" @click="addData"/>
                            </router-link>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppMainBtn from '../UI/MainButton'
import AppMyInput from '../UI/MyInput.vue'

export default {
    name: 'CheckoutPage',
    components:{
        AppMainBtn,
        AppMyInput
    },
    data(){
        return{
            userInformation:[],
            currentFillFields: 0,
        }
    },
    computed:{
        ...mapGetters('cart', [ 'itemsDetailed', 'total' ]),
        ...mapGetters('order', [ 'getFields', 'getPattern', 'allTitles' ]),

        sendBtn(){
		    return this.currentFillFields == this.userInformation.length ? true : false
	    }
    },
    methods:{
        childInput(i, val){
			let field = this.userInformation[i];
            let pattern = this.getPattern(field.titleField)
			field.value = val.trim();
			field.activated = true;

			field.valid = pattern.test(field.value);
		},
		counterOnInput(){
			let fields = this.userInformation
			let counter = 0
			fields.forEach((val, index) =>{
				if(val.value && val.valid){
					counter++
				}
			})
			this.currentFillFields = counter
		},
        addData(){
            this.$store.dispatch('order/add', this.userInformation)
        }
    },
    created(){
        this.getFields.forEach(field =>{
            this.userInformation.push({titleField: field, value: '', activated: false, valid: false})
        })
    }
}
</script>

<style scoped>
.info-order__details .main-btn{
    background-color: #000;
    color: #fff;
}
.info-order__details .main-btn:disabled{
    background-color: #313131;
    color: #8a8a8a;
    cursor: default;
}
</style>