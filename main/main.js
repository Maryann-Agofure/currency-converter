let naira = document.querySelector('.naira')
let rands = document.querySelector('.rands')
let usd = document.querySelector('.usd')
let cad = document.querySelector('.cad')
let pounds = document.querySelector('.pounds')
let euros = document.querySelector('.euros')
let cedis = document.querySelector('.cedis')
let francs = document.querySelector('.francs')
let dirham = document.querySelector('.dirham')
let won = document.querySelector('.won')

function myNaira(){
    naira.addEventListener('input', ()=>{
        let nairaValue = naira.value
        console.log(nairaValue)
        rands.value = Math.round(nairaValue/25).toFixed(2)
        usd.value = Math.round(nairaValue/502).toFixed(2)
        cad.value = Math.round(nairaValue/340.55).toFixed(2)
        pounds.value = Math.round(nairaValue/710).toFixed(2)
        euros.value = Math.round(nairaValue/608).toFixed(2)
        cedis.value = Math.round(nairaValue/150).toFixed(2)
        francs.value = Math.round(nairaValue/458).toFixed(2)
        dirham.value = Math.round(nairaValue/132.2).toFixed(2)
        won.value = Math.round(nairaValue/0.37).toFixed(2)
        

    })
    
}
myNaira()
