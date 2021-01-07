import Vue from 'vue';

function capitalzeFirsterLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const requireComponent = require.context(
    '.', false, /\.vue$/
)

requireComponent.keys().forEach(filename => {
    const componentConfig = requireComponent(filename)

    const componentName = capitalzeFirsterLetter(
        filename.replace(/^\.\//,'').replace(/\.\w+$/,'')
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})