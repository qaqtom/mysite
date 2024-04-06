import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon.vue";
import styles from "./showMessage.module.less";
/**
 * 
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn 
 * @param {Number} duration 多久后消息
 * @param {HTMLElement} container 容器
 *  
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, { type, });
    div.innerHTML = `<i class="${styles.icon}">${iconDom.outerHTML}</i><span>${content}</span>`;
    //设置样式
    const className = styles[`message-${type}`];
    div.classList.add(`${styles.message}`);
    div.classList.add(`${className}`);
    //将div加入到容器当中
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    } 
    container.appendChild(div);
    //浏览器强行渲染
    div.clientHeight;
    //回到正常位置
    div.style.opacity = 1;
    div.style.transform = "translate(-50%,-50%)";
    //等一段事件，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%,-50%) translateY(-25px)";
        div.addEventListener("transitionend", function () {
            div.remove();
            options.callback && options.callback();//如果存在callback函数，则允许callback函数
        }, { once: true });
    }, duration);
}