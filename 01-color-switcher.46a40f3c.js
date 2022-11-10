const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",n),n=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.46a40f3c.js.map
