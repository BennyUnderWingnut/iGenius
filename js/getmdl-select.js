"use strict";
!function () {
    function e() {
        getmdlSelect.init(".getmdl-select")
    }

    window.addEventListener ? window.addEventListener("load", e, !1) : window.attachEvent && window.attachEvent("onload", e)
}();
var getmdlSelect = {
    _defaultValue: {width: 300}, _addEventListeners: function (e) {
        var t = e.querySelector("input"), n = e.querySelectorAll("li"), l = e.querySelector(".mdl-js-menu");
        t.onkeydown = function (e) {
            38 != e.keyCode && 40 != e.keyCode || l.MaterialMenu.show()
        }, l.onkeydown = function (e) {
            13 == e.keyCode && t.focus()
        }, [].forEach.call(n, function (n) {
            n.onclick = function () {
                var a = n.textContent.trim();
                if (t.value = a, e.MaterialTextfield.change(a), setTimeout(function () {
                        e.MaterialTextfield.updateClasses_()
                    }, 250), t.dataset.val = n.dataset.val || "", "createEvent" in document) {
                    var d = document.createEvent("HTMLEvents");
                    d.initEvent("change", !1, !0), l.MaterialMenu.hide(), t.dispatchEvent(d)
                } else t.fireEvent("onchange")
            }
        })
    }, init: function (e, t) {
        var n = document.querySelectorAll(e);
        [].forEach.call(n, function (e) {
            getmdlSelect._addEventListeners(e);
            var n = t || (e.querySelector(".mdl-menu").offsetWidth ? e.querySelector(".mdl-menu").offsetWidth : getmdlSelect._defaultValue.width);
            e.style.width = n + "px", componentHandler.upgradeElement(e), componentHandler.upgradeElement(e.querySelector("ul"))
        })
    }
};
//# sourceMappingURL=getmdl-select.min.js.map
