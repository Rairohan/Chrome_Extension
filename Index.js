let myLeads= []
const inputEl = document.getElementById("input-el")//const used as it is has final vlaue which doesn't changes here the case is the reference not the value
const ulEl = document.getElementById("ul")
let InputBtn = document.getElementById("input-btn")
console.log(myLeads)

InputBtn.addEventListener("click",function(){
    const newLead= inputEl.value
    myLeads.push(newLead)
    console.log(myLeads)
    inputEl.value=""//we are changing the value inside input-el id tag not the reference
    renderLeads()
})
function renderLeads(){
let Listitem = ""
for(let i=0;i<myLeads.length;i++){
   
//    Listitem += "<li> <a href='"+ myLeads[i]+"' target = 'blank'>"+myLeads[i]+"</a></li>"
      `<li>
       <a href='${ myLeads[i]}' target = 'blank'>${myLeads[i]}</a>
       </li>`
       //this method is an alternative (a template string) to the above commented line 18 method
       //  where we use ` to elimate the confusion of "" and '' and it also appears more like html
}
ulEl.innerHTML = Listitem
} 