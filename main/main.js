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
    cad.addEventListener('input', ()=>{
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
    pounds.addEventListener('input', ()=>{
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

function convertEuros(){
    euros.addEventListener('input', ()=>{
        let eurosValue = euros.value
        
        naira.value = Math.round(eurosValue*499.39).toFixed(2)
        rands.value = Math.round(eurosValue*16.45).toFixed(2)
        usd.value = Math.round(eurosValue*1.21).toFixed(2)
        cad.value = Math.round(eurosValue*1.47).toFixed(2)
        pounds.value = Math.round(eurosValue*0.86).toFixed(2)
        cedis.value = Math.round(eurosValue*7.02).toFixed(2)
        francs.value = Math.round(eurosValue*1.09).toFixed(2)
        dirham.value = Math.round(eurosValue*4.46).toFixed(2)
        won.value = Math.round(eurosValue*1351.54).toFixed(2)
        
    })
    
}

function convertCedis(){
    cedis.addEventListener('input', ()=>{
        let cedisValue = cedis.value
        
        naira.value = Math.round(cedisValue*70.75).toFixed(2)
        rands.value = Math.round(cedisValue*2.33).toFixed(2)
        usd.value = Math.round(cedisValue*0.17).toFixed(2)
        cad.value = Math.round(cedisValue*0.21).toFixed(2)
        euros.value = Math.round(cedisValue*0.14).toFixed(2)
        pounds.value = Math.round(cedisValue*0.12).toFixed(2)
        francs.value = Math.round(cedisValue*0.16).toFixed(2)
        dirham.value = Math.round(cedisValue*0.63).toFixed(2)
        won.value = Math.round(cedisValue*191.48).toFixed(2)
        
    })
}

function convertFrancs(){
    francs.addEventListener('input', ()=>{
        let francsValue = francs.value
        
        naira.value = Math.round(francsValue*456.08).toFixed(2)
        rands.value = Math.round(francsValue*15.02).toFixed(2)
        usd.value = Math.round(francsValue*1.1).toFixed(2)
        cad.value = Math.round(francsValue*1.34).toFixed(2)
        euros.value = Math.round(francsValue*0.91).toFixed(2)
        pounds.value = Math.round(francsValue*0.78).toFixed(2)
        cedis.value = Math.round(francsValue*6.42).toFixed(2)
        dirham.value = Math.round(francsValue*4.07).toFixed(2)
        won.value = Math.round(francsValue*1234.33).toFixed(2)
        
    })
}

function convertDirham(){
    dirham.addEventListener('input', ()=>{
        let dirhamValue = dirham.value
        
        naira.value = Math.round(dirhamValue*111.98).toFixed(2)
        rands.value = Math.round(dirhamValue*3.69).toFixed(2)
        usd.value = Math.round(dirhamValue*0.27).toFixed(2)
        cad.value = Math.round(dirhamValue*0.33).toFixed(2)
        euros.value = Math.round(dirhamValue*0.22).toFixed(2)
        pounds.value = Math.round(dirhamValue*0.19).toFixed(2)
        cedis.value = Math.round(dirhamValue*1.56).toFixed(2)
        francs.value = Math.round(dirhamValue*0.25).toFixed(2)
        won.value = Math.round(dirhamValue*303.06).toFixed(2)
        
    })
}

function convertWon(){
    won.addEventListener('input', ()=>{
        let wonValue = won.value
        
        naira.value = Math.round(wonValue*0.37).toFixed(2)
        rands.value = Math.round(wonValue*0.012).toFixed(2)
        usd.value = Math.round(wonValue*0.0009).toFixed(2)
        cad.value = Math.round(wonValue*0.0011).toFixed(2)
        euros.value = Math.round(wonValue*0.00074).toFixed(2)
        pounds.value = Math.round(wonValue*0.00063).toFixed(2)
        cedis.value = Math.round(wonValue*0.0052).toFixed(2)
        francs.value = Math.round(wonValue*0.00081).toFixed(2)
        dirham.value = Math.round(wonValue*0.0033).toFixed(2)
        
    })
}






