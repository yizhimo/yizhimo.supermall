<template>
    <div id="checkBox">
        <div class="icon-check" :class="{'check': isChecked}" @click="colorCheck">
            <img src="~/assets/img/cart/tick.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    methods: {
        colorCheck() {
            this.$emit('colorCheck')
        }
    }
}
</script>

<style>
    .icon-check {
        position: relative;
        /* margin: 0; */
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }
    .check {
        background-color: #ff8198;
        border-color: #ff8198;
    }
</style>