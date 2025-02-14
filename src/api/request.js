import axios from "axios";
import showMessage from "@/Utils/showMessage";

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500,
        });
        return null;
    }
    console.log("拦截器启动")
    return resp.data.data;
});

export default ins;