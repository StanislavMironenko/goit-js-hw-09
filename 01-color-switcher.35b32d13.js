!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),t.startBtn.setAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.removeAttribute("disabled")}));var n=null}();
//# sourceMappingURL=01-color-switcher.35b32d13.js.map
