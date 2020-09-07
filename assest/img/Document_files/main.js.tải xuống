new WOW().init();
const headerReponsive ={
    init: function() {
        this.activeMenu()
        this.headerScroll()
    },
    activeMenu : function(){
        const btnMenu = document.querySelector('.header__menu-button')
        const navbar = document.querySelector('.header__menu-right')
        const header = document.querySelector('.header')
        
        btnMenu.addEventListener('click', () =>{
            btnMenu.classList.toggle('open-menu')
            navbar.classList.toggle('open-navbar')
            header.classList.toggle('header--bg')
        })
    },
    headerScroll : function() {
        const header = document.querySelector('.header')
        const menuAnimation = document.querySelector('.btn--animatinon')
        const navbarLink =document.querySelectorAll('.header__navbar-link')
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >100){
                header.classList.add('header--active')
                menuAnimation.classList.add('btn--active')
                navbarLink.forEach((item) =>{
                    item.classList.add('header__navbar-link--active')
                })
            }
            else{
                header.classList.remove('header--active')
                menuAnimation.classList.remove('btn--active')
                navbarLink.forEach((item) =>{
                    item.classList.remove('header__navbar-link--active')
                })
            }

        })
    }
}
var count =0
var progressCount =0
function scrollImage (element , speed){
    window.addEventListener('scroll', () =>{
        element.style.transform =`translate3d(0 ,${window.scrollY / speed}px ,0)`
    })
}
const banner ={
    init : function() {
        this.scrollBanner()
    },
    scrollBanner :function() {
        const bannerImg =document.querySelector('.banner__image')
        scrollImage(bannerImg,2.3)
    }
}
const btnScroll ={
    init :function (){
        this.btnScrollActive()
        this.btnScrollStatus()
    },
    btnScrollActive: function(){
        const btnScroll = document.querySelector('.btn-scroll')
        btnScroll.addEventListener('click', () =>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        })
    },
    btnScrollStatus: function() {
        const btnScroll = document.querySelector('.btn-scroll')
        window.addEventListener('scroll' , () => {
            if(window.scrollY <400){
                btnScroll.style.display ='none'
            }
            else{
                btnScroll.style.display ='flex'
            }
        })
    }
}
// const product = {
//     init : function(){
//         this.slider()
//         this.scrollImg()
//     },
//     slider: function(){
//         const sliders = document.querySelectorAll('.product__item')
//         const buttons = document.querySelectorAll('.owl-dots')
//         buttons.forEach((button, index) =>{
//             button.addEventListener('click', () =>{
//                 for(let i=0 ; i<sliders.length ; i++){
//                     sliders[i].classList.remove('product__item--active')
//                     buttons[i].classList.remove('owl-dots--active')
//                 }
//                 sliders[index].classList.add('product__item--active')
//                 buttons[index].classList.add('owl-dots--active')
//             })
//         })
//     },
//     scrollImg: function() {
//         const productBackground = document.querySelector('.product__background')
//         scrollImage(productBackground,8)
//     }
// }
const design ={
    init: function(){
        this.count()
        this.progress()
    },
    updateNumber:function() {
        const element = document.querySelector('.count1')
        if( count > 74){
            clearInterval(this.count)
        }
        else{
            count++;
            element.innerHTML =count + '%'
        }
    },
    count: function () {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 2150){
                setInterval(this.updateNumber, 100)
            }
            
        })
    },
    updateProgress: function(){
        const progress = document.querySelector('.progress')
        if(progressCount< 80){
            progressCount++;
            progress.style.width = `${progressCount}%`
        }
        else{
            clearInterval(this.progress)
        }
    },
    progress: function(){
        
        window.addEventListener('scroll', () =>{
            if(window.scrollY>2800){
                setInterval(this.updateProgress,100)
            }
        })
    }
}
const modal ={
    init: function() {
        this.openModal()
        this.closeModal()
    },
    openModal : function(){
        const btnModal = document.querySelector('.btn--play')
        const modal =document.querySelector('.modal')
        const body = document.getElementsByTagName('body')
        btnModal.addEventListener('click', () =>{
            modal.style.display = 'block'
            body[0].classList.add('body')
        })
    },
    closeModal : function () {
        const modal =document.querySelector('.modal')
        const body = document.getElementsByTagName('body')
        const btnClose = document.querySelector('.modal-button')
        btnClose.addEventListener('click' , () =>{
            body[0].classList.remove('body')
            modal.style.display='none'
        })
    }
}
banner.init()
headerReponsive.init()
btnScroll.init()
// product.init()
design.init()
modal.init()
