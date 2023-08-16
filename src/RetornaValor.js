
function retornaValor(itens){
  let cardapioJSON = '{"item":[{"codigo":"cafe","preco":"3.00"},'+
  '{"codigo":"chantily","preco":"1.50"},'+
  '{"codigo":"suco","preco":"6.20"},'+
  '{"codigo":"sanduiche","preco":"6.50"},'+
  '{"codigo":"queijo","preco":"2.00"},'+
  '{"codigo":"salgado","preco":"7.25"},'+
  '{"codigo":"combo1","preco":"9.50"},'+
  '{"codigo":"combo2","preco":"7.50"}]}'
  
  let cardapioObject = JSON.parse(cardapioJSON)
  
  let novoArray = []
  let listaDePreco = []
  let teste = novoArray.length
  
  for(let i in itens){
    
    novoArray.push(itens[i].split(",").shift())
  }
  
  if(!novoArray.length){
    throw new Error('Não há itens no carrinho de compra!')
  }
  
  for(let w = 0; w < novoArray.length; w++){
    for(let j = 0; j < cardapioObject.item.length; j++){
      
      const itensExtra = ['chantily','queijo']
      const itensPrincipais = ['cafe', 'sanduiche']
      
      if(!cardapioObject.item.some((codigo) => codigo.codigo === novoArray[w])){
        throw new Error('Item inválido')  
      }
      try{
        
        if(novoArray[w] === cardapioObject.item[j].codigo){
          listaDePreco.push(Number(cardapioObject.item[j].preco))
        }  
        // if(itensExtra.indexOf(novoArray[w]) && !itensPrincipais.indexOf(novoArray[w])){
          //   //console.log(itensExtra[w].includes(novoArray[w]))
          //   throw new Error('Item extra não pode ser pedido sem o principal')
          // }
          
        }
        catch(error){
          console.log(error.message)
        }
      }
    }
    return listaDePreco
  }
  
  
  
  function retornaQtdDeItens(itens){
    let qtdItens = []
    
    try{
      for(let i in itens){
        qtdItens.push(Number(itens[i].split(",").pop()))
        if(qtdItens[i] === 0){
          throw new Error('Quantidade inválida!')
        } 
    }
    return qtdItens
  }
  catch(e){
    console.log(e)
  }
}

export function valorTotal(pedido){
  let multiplicaValores = [] 
  let somaDosItens = 0
  let valor = retornaValor(pedido) 
  let qtdpedido = retornaQtdDeItens(pedido)

  console.log(valor)
  console.log(qtdpedido)

for(let i = 0; i < valor.length; i++){
  multiplicaValores.push(valor[i] * qtdpedido[i])
}
for(let j = 0; j < multiplicaValores.length; j++){
  somaDosItens += multiplicaValores[j]
}
  return somaDosItens
}





function calculaValorDaCompra(escolha, pedido){
  
    let Total = valorTotal(pedido)
  
    try{
        if(escolha === "credito" || escolha === "debito" || escolha === "dinheiro"){
      
            if(escolha === "dinheiro"){
                var totalComDesconto = 0
        
                totalComDesconto = (Total - (Total * 0.05)).toFixed(2)
                totalComDesconto = totalComDesconto.toString()
        
                return console.log('R$ '+totalComDesconto)
              }
        
              else if(escolha === "credito"){
                  var totalComAcrescimo = 0
          
                  totalComAcrescimo = (Total + (Total * 0.03)).toFixed(2)
          
                  totalComAcrescimo = totalComAcrescimo.toString()      
                  console.log(totalComAcrescimo)
          
                  return console.log('R$ '+totalComAcrescimo)
                }
          
                else if(escolha === "debito"){
                    var total = 0
            
                    total = (Total.toFixed(2)).toString()
            
                    return console.log('R$ '+total)
      }                        
    }
    else{
      throw new Error('Forma de pagamento inválida')
    }
  }catch(error){
    console.log(error)
  }
}

let array = ['cafe,2','combo1,1','salgado,1'];
let array2 = ['cafe,1']

calculaValorDaCompra('dinheiro', array2)