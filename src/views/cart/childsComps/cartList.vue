<template>
    <div>
         <cart-list-item v-for="(item, index) in cartList" 
                    :key="index" 
                    :item-info='item'></cart-list-item>
    </div>
</template>

<script>
import cartListItem from './cartListItem.vue'

export default {
    components: {
        cartListItem,
    },
    props: {
        cartList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>

</style>