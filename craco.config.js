// craco.config.js
const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@components": path.resolve(__dirname, "src/components"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@services": path.resolve(__dirname, "src/services"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@locales": path.resolve(__dirname, "src/locales"),
            "@modals": path.resolve(__dirname, "src/modals"),
        },
    },
};
