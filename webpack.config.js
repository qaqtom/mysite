const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
    module.exports = {
        devtool: "source-map",
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            //告诉webpack打包过程中遇到vue、vuex...等时，
            //不要将他们打包，而是视为全局变量Vue、Vuex
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        },
    };
} else {
    module.exports = {};
}
