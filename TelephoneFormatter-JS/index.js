const phoneNumber = document.getElementById('phone')



function getStringsWithNumberOnly(str){
    console.log('UDPATED VALUE', str)
    return [...str].filter(v => Number.isInteger(+v) && v!== '').join('')
}

function formatString(){
    const num = getStringsWithNumberOnly(phoneNumber.value)
    return  num.length > 3 ? `+(${num.substring(0,3)})-` + num.substring(3) : num

}

phoneNumber.addEventListener('input',()=>{
    phoneNumber.value = formatString()
})