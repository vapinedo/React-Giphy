// npm install --save-dev react-app-rewired react-app-rewire-alias
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@root": "src",
        "@app": "src/app",
        "@hooks": "src/app/hooks",
        "@pages": "src/app/pages",
        "@helpers": "src/app/helpers",
        "@components": "src/app/components"
    })(config);
    
    return config;
};