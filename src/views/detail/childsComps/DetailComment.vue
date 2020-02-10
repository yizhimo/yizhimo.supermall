<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多
                <i class="arrow-right"></i>
            </div>
        </div>
        <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <div class="info-detail">
            <p>{{commentInfo.content}}</p>
            <div class="info-other">
                <!-- 评论日期过滤器 -->
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img :src="item" 
                    v-for="(item, index) in commentInfo.images" 
                    :key="index">
            </div>
        </div>
        <div class="info-detail">
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
            <p>{{commentInfo.content}}</p>
        </div>
    </div>
</template>

<script>
// 导出正则(转换成格式化时间)
import {formatDate} from "common/utils";

export default {
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
		showDate(value) {
            // 将时间戳转换成Date对象
            let date = new Date(value * 1000);
            // 将Date对象进行格式化计算(引用封装好的正则)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
    .comment-info {
        padding: 5px 12px;
        color: #333;
        border-bottom: 5px solid #f2f5f8;
    }

    .info-header {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0,0,0,.1);
    }

    .header-title {
        float: left;
        font-size: 15px;
    }

    .header-more {
        float: right;
        margin-right: 10px;
        font-size: 13px;
    }

    .info-user {
        padding: 10px 0 5px;
    }

    .info-user img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }

    .info-user span {
        position: relative;
        font-size: 15px;
        top: -15px;
        margin-left: 10px;
    }

    .info-detail {
        padding: 0 5px 15px;
    }

    .info-detail p {
        font-size: 14px;
        color: #777;
        line-height: 1.5;
    }

    .info-detail .info-other {
        font-size: 12px;
        color: #999;
        margin-top: 10px;
    }

    .info-other .date {
        margin-right: 8px;
    }

    .info-imgs {
        margin-top: 10px;
    }

    .info-imgs img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
</style>