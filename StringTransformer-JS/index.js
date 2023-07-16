const userInput = document.getElementById('userInput')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const camelcase = document.getElementById('camelcase')
const pascalcase = document.getElementById('pascalcase')
const snakecase = document.getElementById('snakecase')
const kebabacase = document.getElementById('kebabcase')
const trim = document.getElementById('trim')


function onCaseChange(){
    const value = userInput.value.trim()
    const camelCase = value.toLowerCase().split(" ").reduce((a,b)=> a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase())

    uppercase.textContent = value?.toUpperCase();
    lowercase.textContent = value?.toLowerCase();
    snakecase.textContent = value?.split(' ').join('_');
    kebabacase.textContent = value?.split(' ').join('-');
    camelcase.textContent = camelCase
    pascalcase.textContent = pascalcase ? camelCase[0]?.toUpperCase() + camelCase?.substring(1) : ''
    trim.textContent = value.split(' ').join('')
}

userInput.addEventListener('input', (e)=>{
    e.preventDefault()
    onCaseChange()
})

onCaseChange()