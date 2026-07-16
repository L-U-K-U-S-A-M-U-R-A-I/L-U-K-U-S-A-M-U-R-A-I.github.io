"use strict";

export function removeCurrentIcon() {
    var elems = document.querySelectorAll(".icon-wrap");
    [].forEach.call(elems, function(el) {
        el.classList.remove("current-icon");
    });
}