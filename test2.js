function atm(amount){
    let amounts = [2000,500,200,100]
    let notesCounter = [0,0,0,0]
    let balance={}
    let endValues = [800,300,100,0]
    let index = amounts.findIndex(val =>{
      return val < amount
    })
    let a,b;
    for(let i=index;i<amounts.length;i++){
      a=Math.floor(amount/amounts[i])
      b=amount-a*amounts[i]
      if(b >=endValues[i]){
        b = a
      }else{
        b=a-1
      }
      a=b;
      amount -= amounts[i] * a
      balance[amounts[i]] = a
    }
    console.log(balance)
  }
  atm(3600)