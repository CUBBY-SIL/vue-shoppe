<template>
    <div class="banner-section">
        <div class="banner-information">
            <div class="banner-information__title">
                <h1>The best jewelry</h1>
            </div>
            <div class="banner-information__text">
                <p>We have the largest selection</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Banner',
}
</script>

<style>
.banner-section{
  width: 100%;
  display: flex;
  border-radius: 16px;
  border-collapse: separate; 
}
.banner-container-content{
    background: #171D28;
    width: 100%;
    flex-grow: 1;
    flex-basis: 500px;
}
</style>