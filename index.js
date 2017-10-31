
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-testing-custom'].styles;

            return config;
        }
    }
};


