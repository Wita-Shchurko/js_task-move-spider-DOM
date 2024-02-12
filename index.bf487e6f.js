const e=document.querySelector(".wall"),t=document.querySelector(".spider"),r=parseInt(getComputedStyle(e).getPropertyValue("border-width")),l=parseInt(getComputedStyle(e).getPropertyValue("height")),n=t.height/2,o=e.getBoundingClientRect();function c(e,t){return(e<r+n+t?n:e>l-n+t?l-n:e-t-r)-n}e.addEventListener("click",e=>{t.style.top=`${c(e.clientY,o.y)}px`,t.style.left=`${c(e.clientX,o.x)}px`});//# sourceMappingURL=index.bf487e6f.js.map

//# sourceMappingURL=index.bf487e6f.js.map
