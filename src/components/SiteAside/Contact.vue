<template>
  <ul class="contact-container">
    <!-- qq -->
    <li>
        <a :href="`tencent://message/?Menu=yes&uin=${data.qq}}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
            <div class="icon">
                <Icon type="qq"></Icon>
            </div>
            <span>{{data.qq}}</span>
        </a>
        <div class="pop">
            <img :src="data.qqQrCode" alt="">
        </div>
    </li>
    
    <!-- 邮箱 -->
    <li>
        <a :href="`mailto:${data.mail}`">
            <div class="icon">
                <Icon type="email"></Icon>
            </div>
            <span>{{data.mail}}</span>
        </a>
    </li>

    <!-- github -->
    <li>
        <a target="_blank" :href="data.gitee">
            <div class="icon">
                <Icon type="github"></Icon>
            </div>
            <span>{{data.githubName}}</span>
        </a>
    </li>

    <!-- 微信 -->
    <li>
        <a>
            <div class="icon">
                <Icon type="weixin"></Icon>
            </div>
            <span>{{data.weixin}}</span>
        </a>
        <div class="pop">
            <img :src="data.weixinQrCode" alt="">
        </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon.vue";
import {mapState} from "vuex";
export default {
    components:{
        Icon,
    },
    computed:{
        ...mapState("setting",["data"]),
    }
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container{
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;
    li{
        @itemHeight:30px;
        height: @itemHeight;
        line-height: @itemHeight;
        margin: 14px 0;
        position: relative;
        font-size: 17px;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
        a{
        display: flex;
        align-items: center;
        cursor: pointer;
            .icon{
                // font-size: 27px;
                width: 37px;
            }
        }
        .pop{
            position: absolute;
            left: 0;
            bottom: @itemHeight + 3px;
            padding: 10px 15px;
            background: #fff;
            border-radius: 15px;
            transform-origin: center bottom;
            transform: scaleY(0);
            transition: 0.3s;
            img{
                width: 150px;
                height: 150px;
            }
            &::after{
                border: 10px solid;
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                border-color: #fff transparent transparent transparent;
                left: 50%;
                transform: translate(-50%,100%);
                bottom: 0;
            }
        } 
    }
}
</style>