// npm install --save-dev react-app-rewired react-app-rewire-alias
const { alias } = require("react-app-rewired-alias");

module.exports = function override(config) {
    alias({
        "@root": "src",
        "@hooks": "src/app/hooks",
        "@pages": "src/app/pages",
        "@components": "src/app/components"
    })(config);
    
    return config;
};