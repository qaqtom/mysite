import eventBus from "@/eventBus";
import debounce from "@/Utils/debounce";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;
    //处理图片
    //该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 在视口范围内
        // const tempImg = new Image();
        // tempImg.onload = function() {
        //   // 当真实图片加载完成之后
        //   img.dom.src = img.src;
        // };
        // tempImg.src = img.src;
        img.dom.src = img.src;
        imgs = imgs.filter((i)=>i !== img)
    }
}

function setImages() {
    for (const img of imgs) {
        // 处理该图片
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        imgs.push(img);
        //立即处理它
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter((i) => i.dom !== el);
    },
};