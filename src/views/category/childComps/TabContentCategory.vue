<template>
    <div>
        <div class="item" v-for="(item, index) in subcategories.list" :key="index">
            <a :href="item.link">
                <img class="item-img" :src="item.image" alt="">
                <div class="item-text">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subcategories: {
            type: Object,
            default() {
                return {}
            }
        } 
    },
}
</script>

<style scoped>
    .item {
        text-align: center;
        padding: 16px 0px 8px 0px;
        margin: 0 20px 0 20px;
        border-bottom: solid 2px var(--color-tint);
    }

    .item-img {
        width: 60%;
    }

    .item-text {
        color: var(--color-high-text);
        font-size: 16px;
        margin-top: 10px;
        font-weight: 700;
    }
</style>