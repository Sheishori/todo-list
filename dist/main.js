(()=>{"use strict";!function(){const e=document.querySelector("#projects"),t=(e,t)=>({name:e,color:t}),n=(()=>{let e=[];return{getProjects:function(){return e},addProject:function(t){e.push(t)}}})();function r(){e.textContent="";let t=n.getProjects();for(let e in t)c(t[e])}function c(t){let n=document.createElement("li"),r=document.createElement("div"),c=document.createElement("div");r.classList.add("color"),r.textContent="●",r.style.color=t.color,c.classList.add("project"),c.textContent=t.name,n.append(r,c),e.appendChild(n)}n.addProject(t("Home","blue")),n.addProject(t("Work","orange")),r();const o=document.querySelector("#new-project"),l=o.querySelector("form"),d=document.querySelector("#new-project-button"),u=l.querySelector(".cancel");d.addEventListener("click",(()=>{o.style.display="inherit"})),u.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",l.reset()})),l.addEventListener("submit",(e=>{e.preventDefault(),n.addProject(t(l.querySelector("#name").value,l.querySelector("#color").value)),o.style.display="none",l.reset(),r()}))}(),function(){const e=document.querySelector("#tasks"),t=(e,t,n,r)=>({title:e,desc:t,due:n,priority:r}),n=(()=>{let e=[];return{getTasks:function(){return e},addTask:function(t){e.push(t)}}})();function r(){e.textContent="";let t=n.getTasks();for(let e in t)c(t[e])}function c(t){let n=document.createElement("li"),r=document.createElement("input"),c=document.createElement("label"),o=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div");r.type="checkbox",r.name=t.title,c.setAttribute("for",t.title),c.textContent=t.title,o.classList.add("edit"),l.classList.add("due"),t.due&&(l.textContent="Due "+t.due),d.classList.add("delete"),d.textContent="X","Urgent"===t.priority?n.classList.add("urgent"):"High"===t.priority&&n.classList.add("high"),n.append(r,c,o,l,d),e.appendChild(n)}n.addTask(t("Buy milk","","August 10","Normal")),r();const o=document.querySelector("#new-task"),l=o.querySelector("form"),d=document.querySelector("#new-task-button"),u=l.querySelector(".cancel");d.addEventListener("click",(()=>{o.style.display="inherit"})),u.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",l.reset()})),l.addEventListener("submit",(e=>{e.preventDefault(),n.addTask(t(l.querySelector("#title").value,l.querySelector("#desc").value,l.querySelector("#due").value,l.querySelector("#priority").value)),o.style.display="none",l.reset(),r()}))}()})();