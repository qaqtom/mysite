import loadingUrl from "@/assets/loading.svg";

export default function (el, binding) {
    //判断img是否被创建过
    const curImg = el.querySelector("img[data-role=loading]");
    
    if (binding.value) {
        if (!curImg) {
            const img = document.createElement("img");
            img.dataset.role = "loading";//会生成<img data-role="loading">
            img.src = loadingUrl;
            // img.src = require("@/assets/loading.svg");
            img.style.cssText = "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)";
            el.appendChild(img);
        } 
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}