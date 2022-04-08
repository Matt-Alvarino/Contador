function contar(){
    var ini = window.document.getElementById('inic')
    var f = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var inic = Number(ini.value)
    var fim = Number(f.value)
    var passo = Number(pas.value)

    if(ini.value.length == 0 || f.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
        if(inic < fim){
            for(var c = inic; c <= fim; c+= passo){
            res.innerHTML += `${c}\u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            for(var c2 = inic; c2 >= fim; c2+=(-passo)){
                res.innerHTML += `${c2}\u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
    

}