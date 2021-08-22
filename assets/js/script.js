/*
MIT License

Copyright (c) 2021 FBI-DEVS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
const typedTextSpan = document.querySelector(".typed-text"),
    textArray = ["Welcome to X-Troid","This project by Danuma association","Thanks for using our best products ❤️"],
    typingDelay = 50,
    erasingDelay = 10;
let textArrayIndex = 0,
    charIndex = 0;

function type() { charIndex < textArray[textArrayIndex].length ? (typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex), charIndex++, setTimeout(type, typingDelay)) : setTimeout(erase, 5000) }

function erase() { charIndex > 0 ? (typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1), charIndex--, setTimeout(erase, erasingDelay)) : (textArrayIndex++, textArrayIndex >= textArray.length && (textArrayIndex = 0), setTimeout(type, 100)) }
document.addEventListener("DOMContentLoaded", (function() { setTimeout(type, typingDelay) }));

$(document).ready((function() {
    $(".changeprofile").submit((function(e) {
        var formObj, formURL = $(this).attr("action"),
            formData = new FormData(this);
        $.ajax({ url: formURL, type: "POST", data: formData, contentType: !1, cache: !1, processData: !1, beforeSend: function() { $("button").attr("disabled", "disabled"), $("input").attr("disabled", "disabled"), $("a").attr("disabled", "disabled"), $(".inibutton").html('<i class="fas fa-spinner fa-spin"></i> Wait') }, success: function(data) { data.includes("Success") ? ($("button").removeAttr("disabled", "disabled"), $("a").removeAttr("disabled", "disabled"), $("input").removeAttr("disabled", "disabled"), $(".inibutton").html("Save"), $.notify({ icon: "tim-icons icon-check-2", message: data }, { type: "success", timer: 3e3, placement: { from: "top", align: "right" } }), window.location = window.location) : ($("button").removeAttr("disabled", "disabled"), $("a").removeAttr("disabled", "disabled"), $("input").removeAttr("disabled", "disabled"), $(".inibutton").html("Save"), $.notify({ icon: "tim-icons icon-simple-remove", message: data }, { type: "danger", timer: 3e3, placement: { from: "top", align: "right" } })) } }), e.preventDefault()
    }))
}))