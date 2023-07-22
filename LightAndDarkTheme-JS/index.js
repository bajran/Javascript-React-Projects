const themeSwitch = document.getElementById('themeSwitch')
const innnerThemeSwitch = document.getElementById('innnerThemeSwitch')

themeSwitch.addEventListener('change', (e)=>{
    if(themeSwitch.checked){
        document.body.classList.add('dark')
        innnerThemeSwitch.checked = true
    }else{
        document.body.classList.remove('dark')
        innnerThemeSwitch.checked = false
    }
})