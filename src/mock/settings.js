import txUrl from "@/assets/tx.jpg";
import qqUrl from "@/assets/qq.png";
import wxUrl from "@/assets/weixin.png";

import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: txUrl,
        siteTitle: "音眠",
        github: "https://github.com/DuYi-Edu",
        gitee: "http://baidu.com",
        giteeName: "526454676",
        qq: "526454676",
        qqQrCode: qqUrl,
        weixin: "18176674286",
        weixinQrCode: wxUrl,
        mail: "526454676@qq.com",
        icp: "黑ICP备17001719号",
        githubName: "DuYi-Edu",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
});
