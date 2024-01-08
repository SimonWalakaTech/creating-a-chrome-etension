let myleads = []
let disp = document.getElementById("uli")
let button = document.getElementById("btn")
let input = document.getElementById("in")

button.addEventListener("click", function() {
    myleads.push(input.value)
    // Clear out the input field
    renderleads()
})


function renderleads(){
    listitems = ""

    for (let i = 0; i < myleads.length; i++) {
        listItems += "<li>" + myleads[i] + "</li>"
    }
    disp.innerHTML = listItems 
}