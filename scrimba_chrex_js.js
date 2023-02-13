
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const deletebtn=document.getElementById("delete-btn")
const savebtn=document.getElementById("save-btn")
let ulel=document.getElementById("ul-el")
myleads=[]

let leadfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
if(leadfromlocalstorage)
{
myleads=leadfromlocalstorage
render(myleads)
}


inputbtn.addEventListener("click",function()
{
    
    myleads.push(inputEl.value)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    inputEl.value=""
    render(myleads)
    
    
})

deletebtn.addEventListener("dblclick",function(    )
{
    localStorage.clear()
    myleads=[]
    render(myleads)
}
)
savebtn.addEventListener("click",function(tabs)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
    myleads.push(tabs[0].url)
    render(myleads)
    }

                    )
}
)
function render(leads)
{


    let listItems=""
    for(let i=0;i<leads.length;i++)
    listItems+= `
        <li>
            <a target='_blank' href ="${leads[i]}"> 
                ${leads[i]}
            </a>
        </li>
        `
    ulel.innerHTML=listItems
}