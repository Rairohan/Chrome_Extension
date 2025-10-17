let myLeads= []
const inputEl = document.getElementById("input-el")//const used as it is has final vlaue which doesn't changes here the case is the reference not the value
const ulEl = document.getElementById("ul")
const InputBtn = document.getElementById("input-btn")
const DeleteBtn = document.getElementById("delete-btn")
const leadfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))//turns strings back to array
console.log(leadfromlocalstorage)

if (leadfromlocalstorage){//if condition where if the leadfromstorage becomes truthy it runs else it skips so works only when values is inserted
     myLeads = leadfromlocalstorage
     render(myLeads)
}
DeleteBtn.addEventListener("dblclick",function(){//clears localstorage,myLeads array and DOM
     localStorage.clear()
     myLeads=[]
     render(myLeads)
})
InputBtn.addEventListener("click",function(){
    const newLead= inputEl.value
    myLeads.push(newLead)
    console.log(myLeads)
    
     inputEl.value=""//we are changing the value inside input-el id tag not the reference
     render(myLeads)
     localStorage.setItem("myLeads",JSON.stringify(myLeads))//myLeads is the key and in value is JSON.stringify converts array into string
     console.log(localStorage.getItem(myLeads))
})
function render(leads){
let Listitem = ""
for(let i=0;i<leads.length;i++){
   
 Listitem += // "<li> <a href='"+ myLeads[i]+"' target = 'blank'>"+myLeads[i]+"</a></li>"
      `<li>
        <a href='${ leads[i]}' target = 'blank'>${leads[i]}</a>
        </li>`
       //this method is an alternative (a template string) to the above commented line 18 method
       //  where we use ` to elimate the confusion of "" and '' and it also appears more like html
}
ulEl.innerHTML = Listitem

} 