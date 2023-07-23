function initAccordian(accordian){

    function showPanel(panel){
        const expandPanel =  accordian.querySelectorAll('.open');
        const panelArrow = panel.querySelector('.accordian-arrow')
        const contentEle  = panel.nextElementSibling;
        Array.from(expandPanel || []).map((el)=> el?.classList?.remove('open'))
        contentEle.classList.add('open')
        panelArrow.classList.add('open')
    }

    function handleOpen(e){
        showPanel(e.currentTarget)
    }
    // Assign click event to all header
    const accordianElem = accordian.querySelectorAll('.accordian-header')
    for(let i= 0; i < accordianElem.length; i++){
        accordianElem[i].addEventListener('click',handleOpen)
    }
}


initAccordian(document.getElementById("accordian"))


