const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownValue = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click",
    function(){
        if(dropdownValue.classList.contains("change")){
            dropdownValue.classList.remove("change");
        } else{
            dropdownValue.classList.add("change");
        }
    }
)

window.addEventListener("click",
    function(e){
        if(e.target !== dropdownBtn){
            dropdownValue.classList.remove("change");
        }
    }
)