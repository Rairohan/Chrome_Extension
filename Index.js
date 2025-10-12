let myLeads= []
const inputEl = document.getElementById("input-el")//const used as it is has final vlaue which doesn't changes
const ulEl = document.getElementById("ul")

let InputBtn = document.getElementById("input-btn")
InputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)

for(i=0;i<myLeads.length;i++){
   ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"//innerHtml simply grabs the element and changes both element tag and the content
}
})