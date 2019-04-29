// Dependencies and global variable settings
import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

// Init func
function Init()  {
    // Init tooltip
    $('[data-toggle="tooltip"]').tooltip()
}

// Onload func
window.addEventListener('load', function () {
    console.log('Hello, World!');
});

Init();