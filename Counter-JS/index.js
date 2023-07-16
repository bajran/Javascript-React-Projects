const value = document.querySelector(".value")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const changeBy = document.getElementById('changeBy')
const reset  =  document.getElementById("reset")

increment.addEventListener('click',()=>{
    value.textContent = +value.textContent + changeBy.valueAsNumber
})

decrement.addEventListener('click',()=>{
    value.textContent = +value.textContent - changeBy.valueAsNumber
})

changeBy.addEventListener('change',()=>{
    const changeByValue = changeBy.valueAsNumber;
    console.log(changeByValue)
    if(Number.isNaN(changeByValue) || changeByValue < 0){
        changeBy.value = 1
    }
})

reset.addEventListener('click', ()=>{
    value.textContent = 0
    changeBy.value = 1
})