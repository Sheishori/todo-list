(()=>{"use strict";!function(){const e=document.querySelector("#projects"),t=(e,t)=>({name:e,color:t}),n=(()=>{let e=[];return{getProjects:function(){return e},addProject:function(t){e.push(t)}}})();function c(){e.textContent="";let t=n.getProjects();for(let e in t)r(t[e])}function r(t){let n=document.createElement("li"),c=document.createElement("div"),r=document.createElement("div");c.classList.add("color"),c.textContent="●",c.style.color=t.color,r.classList.add("list"),r.textContent=t.name,n.append(c,r),e.appendChild(n)}n.addProject(t("Home","blue")),n.addProject(t("Work","orange")),c();const l=document.querySelector("#new-project"),o=l.querySelector("form"),d=document.querySelector("#new-project-button"),a=o.querySelector(".cancel");d.addEventListener("click",(()=>{l.style.display="inherit"})),a.addEventListener("click",(e=>{e.preventDefault(),l.style.display="none",o.reset()})),o.addEventListener("submit",(e=>{e.preventDefault(),n.addProject(t(o.querySelector("#name").value,o.querySelector("#color").value)),l.style.display="none",o.reset(),c()}))}(),function(){const e=document.querySelector("#new-task"),t=e.querySelector("form"),n=document.querySelector("#tasks");n.querySelectorAll("li");const c=document.querySelector("#new-task-button"),r=t.querySelector(".cancel");c.addEventListener("click",(()=>{e.style.display="inherit"})),r.addEventListener("click",(n=>{n.preventDefault(),e.style.display="none",t.reset()})),t.addEventListener("submit",(c=>{c.preventDefault(),function(e,t,c,r){let l=document.createElement("li"),o=document.createElement("input"),d=document.createElement("label"),a=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div");o.type="checkbox",o.name=e,d.setAttribute("for",e),d.textContent=e,a.classList.add("edit"),u.classList.add("due"),c&&(u.textContent="Due "+c),s.classList.add("delete"),s.textContent="X","Urgent"===r?l.classList.add("urgent"):"High"===r&&l.classList.add("high"),l.append(o,d,a,u,s),n.appendChild(l)}(t.querySelector("#title").value,t.querySelector("#desc").value,t.querySelector("#due").value,t.querySelector("#priority").value),e.style.display="none",t.reset()}))}()})();