
const header = {
    init: function() {
        this.menuActive()
    },
    menuActive :function() {
        const btnMenu =document.querySelector('.header__menu-button')
        const navbarRessponsive = document.querySelector('.navbar__right-list')
        btnMenu.addEventListener('click', () =>{
            navbarRessponsive.classList.toggle('navbar__right-list--active')
        })
    }
}
const btnScroll ={
    init: function(){
        this.activeBtnScroll()
        this.handelStatusBtnScroll()
    },
    handelStatusBtnScroll: function(){
        const btnScroll = document.querySelector('.btn-scroll')
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 500){
                btnScroll.classList.add('btn-scroll--status')
            }
            else{
                btnScroll.classList.remove('btn-scroll--status')
            }
        })
    },
    activeBtnScroll: function(){
        const btnScroll = document.querySelector('.btn-scroll')
        btnScroll.addEventListener('click', () =>{
            window.scroll({
                top:0,
                left:0,
                behavior:'smooth'
            })
        })
    }
}
const question ={
    init : function() {
        this.showDescrible()
    },
    showDescrible : function() {
        const questions = document.querySelectorAll('.question__left-item')
        questions.forEach((question,index) =>{
            question.addEventListener('click' , () =>{
                for(let i=0; i<questions.length ;i++){
                    if(index !== i){
                        questions[i].classList.remove('question__left-item--active')
                    }
                }
                question.classList.toggle('question__left-item--active')
            })
        })
    }
}
btnScroll.init()
header.init()
question.init()