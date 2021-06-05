export default (config, field) => {
    if (config.options.nextFocus === true) {
        const controls = document.querySelectorAll('input:not([type=hidden]), textarea');
        let matched = false;

        controls.forEach((control, index) => {
            if (matched || control.isEqualNode(field)) {
                const element = controls[index + 1];

                if (element && !Object.values(config._fields).find(field => field.isEqualNode(element)) && !element.value) {
                    element.focus();
                    matched = false;
                } else {
                    matched = true;
                }
            }
        });
    } else if (config.options.nextFocus instanceof Element) {
        config.options.nextFocus.focus();
    }
}