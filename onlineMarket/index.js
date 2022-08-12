import products from './modules/data.js'
let container = document.querySelector('.container')
let count = document.querySelector('.count')
let bg = document.querySelector('.bg' )
let cart = []

   count.innerHTML = cart.length
function reload(arr, place, isCart = false) { 
    place.innerHTML = ''
    for(let item of arr) {
        let div = document.createElement('div')
        let top = document.createElement('div')
        let bottom = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let flx = document.createElement('div')
        let b = document.createElement('b')
        let b2 = document.createElement('b')
        let b3 = document.createElement('b')
        let button = document.createElement('button')


        div.classList.add('item')
        top.classList.add('top')
        bottom.classList.add('bottom')
        flx.classList.add('flx')
        button.classList.add('btn')

        b.classList.add('price')
        b2.classList.add('rate')
        b3.classList.add('countt')

        img.src = item.image
        h3.innerHTML = item.title
        p.innerHTML = `${item.description.slice(0,150)} ... READ MORE`
        b.innerHTML =  Math.floor(item.price)
        b2.innerHTML = item.rating.rate
        b3.innerHTML = item.rating.count
        button.innerHTML = isCart === true ? "delete from cart" : "В избранное"


        if (cart.includes(item.id)) {
            button.classList.add('active-btn')
            button.innerHTML = "Добавлено"
        }

        div.append(top, bottom)
        top.append(img)
        flx.append(b,b2,b3)
        bottom.append(h3,p,flx,button)
        place.append(div)

        button.onclick = () => {
            if(cart.includes(item.id)) {
                cart.splice( cart.indexOf(item.id), 1)
            creatReload( createArr())

            } else {
                cart.push(item.id);
            creatReload( createArr())

            }

            count.innerHTML = cart.length

            showCartsElems()
            reload(products, container)
        }
        p.onclick = () => {
            let p2 = document.createElement('p')
            p.innerHTML = item.description
            p2.innerHTML = 'Скрыть'
            p.append(p2)
            p2.style.color = '#fff'
            p2.onclick = () => {
                reload(products,container)
            }
        }


    }   
}

function showCartsElems() {
    let newCart = []
    for(let item of products) {
        for(let elem of cart) {
            if(item.id === elem) {
                // newCart.push(item)
            }
        }
    }
    reload(newCart, document.querySelector('.cart'), true)
}


reload(products, container)


let slicebtn = document.querySelector('.sliceshow')
let btnshow = document.querySelector('.showall')

slicebtn.onclick = () => {
    let slc = products.slice(0,5)
    reload(slc,container)
}
btnshow.onclick = () => {
    reload(products,container)
}

let btn1 = document.querySelector('.imgOpen')
let exitShop = document.querySelector('.exitShop')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')


btn1.onclick = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
    modal.style.marginTop =  '0px'
    setTimeout(() => {
        modal.style.opacity = "1"
        modal.style.transform = "translate(-50%, -50%) scale(1)"
    }, 200);
}


exitShop.onclick = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""

}



function creatReload (arr , isCart = false) {
    bg.innerHTML = ''
    for(let item of arr ) {
        let wrapper = document.createElement('div')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let img = document.createElement('img')
        let info = document.createElement('h3')
        let cash = document.createElement('div')
        let price = document.createElement('span')
        let counter = document.createElement('div')
        let inc = document.createElement('button')
        let dec = document.createElement('button')
        let count = document.createElement('span')
        let button = document.createElement('button')



        wrapper.classList.add('wrapper')
        left.classList.add('left')
        right.classList.add('right')
        img.classList.add('img')
        info.classList.add('info')
        cash.classList.add('cash')
        price.classList.add('price')
        counter.classList.add('counter')
        inc.classList.add('inc')
        dec.classList.add('dec')
        count.classList.add('count')
        button.classList.add('close')



        wrapper.append(left,right)
        left.append(img,info)
        counter.append(inc,count,dec)
        right.append( price ,counter ,close )
        bg.append(wrapper)


        img.src =item.image

        info.innerHTML = item.title
        price.innerHTML =  Math.floor( item.price)
        inc.innerHTML = '+'
        dec.innerHTML = '-'
        count.innerHTML = "0"
        button.innerHTML = 'x'
     
        //   count = 0

          inc.onclick = () =>{
         if(item.price + price) {
         price.innerHTML = + item.price
            count++
            console.log('++');
         }
          }


    }
}





function createArr() {
    let temp = []
    for(let item  of products) {
        for(let item2 of cart) {
            if(item.id === item2) {
                temp.push(item)
            }
        }
    }
    return temp
}

creatReload ( createArr())





