<template>
    <section class="checkout-section">
      <div class="checkout-section__title">
          <h3>Order Confirmation</h3>
      </div>
      <div class="checkout-section__info">
          <div class="info-container">
              <div class="info-details">
                  <h4 class="info-details__title">Order Details</h4>
                  <div class="container-items-order">
                      <div class="order-details__item" v-for="field, i in getOrderInfo" :key="i">
                          <div class="details-title">
                              <strong>{{ field.title }}</strong>
                          </div>
                          <div class="details-text">
                              {{ field.value }}
                          </div>
                      </div>
                  </div>
              </div>
              <div class="info-order">
                  <h4 class="info-order__title">Order Summary</h4>
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
                  </div>
  
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
      name: 'OrderConfirmation',
      computed:{
          ...mapGetters('order', ['getOrderInfo']),
          ...mapGetters('cart', ['itemsDetailed', 'total'])
      }
  }
  </script>