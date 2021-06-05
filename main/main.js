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

function converters(){
    convertNaira()
    convertRands()
    convertUsd()
    convertCad()
    convertPounds()
    convertEuros()
    convertCedis()
    convertFrancs()
    convertDirham()
    convertWon()
}
converters();

function convertNaira(){
    naira.addEventListener('input', ()=>{
        let nairaValue = naira.value
       
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


function convertRands(){
    rands.addEventListener('input', ()=>{
        let randsValue = rands.value
        
        naira.value = Math.round(randsValue*30.65).toFixed(2)
        usd.value = Math.round(randsValue*0.074).toFixed(2)
        cad.value = Math.round(randsValue*0.090).toFixed(2)
        pounds.value = Math.round(randsValue*0.053).toFixed(2)
        euros.value = Math.round(randsValue*0.061).toFixed(2)
        cedis.value = Math.round(randsValue*0.43).toFixed(2)
        francs.value = Math.round(randsValue*0.067).toFixed(2)
        dirham.value = Math.round(randsValue*0.24).toFixed(2)
        won.value = Math.round(randsValue*82.77).toFixed(2)
        
    })
    
}

function convertUsd(){
    usd.addEventListener('input', ()=>{
        let usdValue = usd.value
        
        naira.value = Math.round(usdValue*502).toFixed(2)
        rands.value = Math.round(usdValue*13.42).toFixed(2)
        cad.value = Math.round(usdValue*1.21).toFixed(2)
        pounds.value = Math.round(usdValue*0.71).toFixed(2)
        euros.value = Math.round(usdValue*0.82).toFixed(2)
        cedis.value = Math.round(usdValue*5.78).toFixed(2)
        francs.value = Math.round(usdValue*0.9).toFixed(2)
        dirham.value = Math.round(usdValue*3.67).toFixed(2)
        won.value = Math.round(usdValue*1110.68).toFixed(2)
        
    })
    
}

function convertCad(){
    usd.addEventListener('input', ()=>{
        let cadValue = cad.value
        
        naira.value = Math.round(cadValue*340.55).toFixed(2)
        rands.value = Math.round(cadValue*11.11).toFixed(2)
        usd.value = Math.round(cadValue*0.83).toFixed(2)
        pounds.value = Math.round(cadValue*0.58).toFixed(2)
        euros.value = Math.round(cadValue*0.68).toFixed(2)
        cedis.value = Math.round(cadValue*4.79).toFixed(2)
        francs.value = Math.round(cadValue*0.74).toFixed(2)
        dirham.value = Math.round(cadValue*3.04).toFixed(2)
        won.value = Math.round(cadValue*919.18).toFixed(2)
        
    })
    
}

function convertPounds(){
    usd.addEventListener('input', ()=>{
        let poundsValue = pounds.value
        
        naira.value = Math.round(poundsValue*582.71).toFixed(2)
        rands.value = Math.round(poundsValue*19.02).toFixed(2)
        usd.value = Math.round(poundsValue*1.42).toFixed(2)
        cad.value = Math.round(poundsValue*1.71).toFixed(2)
        euros.value = Math.round(poundsValue*1.16).toFixed(2)
        cedis.value = Math.round(poundsValue*8.19).toFixed(2)
        francs.value = Math.round(poundsValue*1.27).toFixed(2)
        dirham.value = Math.round(poundsValue*5.20).toFixed(2)
        won.value = Math.round(poundsValue*1572.80).toFixed(2)
        
    })
    
}


