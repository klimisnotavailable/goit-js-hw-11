import{S as p,i as f}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector(".search-form");const u=document.querySelector(".search-input"),a=document.querySelector(".form-button"),y="42543604-e9bb6c6b12fe7ca69b0735960";u.value;const g="https://pixabay.com/api/",b=new URLSearchParams({orientation:"horizontal",safesearch:!0,image_type:"photo"}),v=function(t){t.value.trim()==""?a.setAttribute("disabled","disabled"):a.removeAttribute("disabled","disabled")};function L(){return`${g}?key=${y}&q=${u.value}&${b}`}function S(o){return o.hits.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:r,comments:s,downloads:h})=>`<li>
                    <a href="${t}"><img class="large-image" src="${i}" alt="${n}" width="360px" height="152px" title="${n}"></a>
                    <div class="image-statistics">

                    <span>
                    <h3>Likes</h3>
                    <p>${e}</p>                 
                    </span>

                    <span>
                    <h3>Views</h3>
                    <p>${r}</p>
                    </span>

                    <span>
                    <h3>Comments</h3>
                    <p>${s}</p>
                    </span>

                    <span>
                    <h3>Downloads</h3>
                    <p>${h}</p>
                    </span>
                    </div>
                </li>`).join("")}const d=document.querySelector(".search-form"),m=document.querySelector(".search-input");document.querySelector(".form-button");const c=document.querySelector(".gallery"),l=document.querySelector(".loader");m.value;d.addEventListener("input",o=>{v(m)});d.addEventListener("submit",o=>{o.preventDefault(),l.classList.remove("visually-hidden"),c.innerHTML="",fetch(L()).then(t=>t.json()).then(t=>{if(t.hits.length==0)throw new Error("");c.insertAdjacentHTML("beforeend",S(t)),new p(".gallery  a").refresh()}).catch(t=>{f.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(l.classList.add("visually-hidden"))});
//# sourceMappingURL=commonHelpers.js.map
