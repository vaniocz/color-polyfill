const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'color');

if (!window.Modernizr || !window.Modernizr.inputtypes) {
    if (!window.Modernizr) {
        window.Modernizr = {};
    }

    window.Modernizr.inputtypes = {};
    window.Modernizr.inputtypes.color = false;

    if (inputElement.type !== 'text' && 'style' in inputElement) {
        inputElement.value = 'invalid';
        inputElement.style.cssText = 'position:absolute;visibility:hidden;';
        window.Modernizr.inputtypes.color = inputElement.value !== 'invalid';
    }
}

if (!window.Modernizr.inputtypes.color) {
    import('./index');
}
