// Add event listener
function onEvent(selector, event, callback) {
    return selector.addEventListener(event, callback);
}

// Select HTML element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Get a (node) list of HTML elements as array
function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

export { onEvent, select, selectAll };