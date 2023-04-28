(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const h=document.getElementsByClassName("menu__img")[0],p=document.getElementsByClassName("menu__box")[0];h.addEventListener("click",()=>{p.classList.toggle("menu__active")});const g=e=>{e.preventDefault(),e.target.className=="shortLinks__button"&&(f(e.target.previousElementSibling.textContent),L(e.target))},f=e=>{var t=document.createElement("input");t.setAttribute("value",e),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},L=e=>{e.classList.add("shortLinks__button-copied");let t=e.textContent;e.textContent="Copied!",setTimeout(()=>{e.classList.remove("shortLinks__button-copied"),e.textContent=t},1e3)},_=document.getElementsByClassName("shortLinks")[0];_.childElementCount===0&&_.addEventListener("click",g);const l=document.getElementsByClassName("shortForm")[0],r=l.querySelector(".shortForm__link"),c=l.querySelector(".shortForm__loading"),v=()=>{if(r.value==null||r.value=="")m("");else if(r.value!==null&&r.value!==""){c.classList.toggle("shortForm__loading-active");const e=/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gm;if(e.test(r.value))k(),y(r.value);else if(!e.test(r.value))return c.classList.toggle("shortForm__loading-active"),m("invalid")}},y=async e=>{await fetch(`https://api.shrtco.de/v2/shorten?url=${e}`).then(t=>t.json()).then(t=>{let i=e;const a=document.getElementsByClassName("shortLinks")[0],s=document.createDocumentFragment(),o=document.createElement("div");o.classList.add("shortLinks__item");const n=document.createElement("p");n.classList.add("shortLinks__largeLink");const u=/http(s)?:\/\//gm;u.test(i)?n.textContent=i:u.test(i)||(n.textContent=`https://${i}`);const d=document.createElement("div");d.classList.add("shortLinks__box"),d.innerHTML=`
                    <a class="shortLinks__link" href="${t.result.full_short_link}" target="_blank">${t.result.full_short_link}</a>
                    <a class="shortLinks__button" href="#">Copy</a>
            `,o.append(n),o.append(d),s.append(o),a.append(s),c.classList.toggle("shortForm__loading-active")}).catch(t=>{c.classList.toggle("shortForm__loading-active"),m("invalid")})},m=e=>{const t=l.querySelector(".shortForm__error-invalid");t.classList.add("shortForm__error-active"),r.classList.add("shortForm__error-input"),e==""?t.textContent="Please add a Link":e=="invalid"&&(t.textContent="Insert a valid link")},k=()=>{l.querySelector(".shortForm__error-invalid").classList.remove("shortForm__error-active"),r.classList.remove("shortForm__error-input")};l.addEventListener("submit",e=>{e.preventDefault(),v()});
