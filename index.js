const dani = {
    leters: ['','A','B','C','D','E','F','G','H',''],
    numbers: ['','1','2','3','4','5','6','7','8',''],
}
for (let i = 0; i < dani.leters.length ; i++){
    const div1 = document.createElement('div')
    for(let j = 0; j < dani.leters.length; j++)
    {
        const div2 = document.createElement('div') 
        if (i === 0){
            div2.textContent = `${dani.leters[j]}`
        }
        if (i === 9){
            div2.textContent = `${dani.leters[j]}`
        }
        if (j === 0) {
            div2.textContent = `${dani.numbers[i]}`
        }
        if (j === 9){
            div2.textContent = `${dani.numbers[i]}`
        }
        if ((j + i) % 2 != 0  && i != 0 && j != 0 && i != 9 && j != 9) {
            div2.classList.add('background')
        }
        if (i === 0 || j === 0 || i === 9 || j === 9) {
            div2.classList.add('background2')
            div2.classList.add('text')
        }
        div1.classList.add('displey')
        div2.classList.add('rozmir')
        div1.appendChild(div2)
    }
    app.appendChild(div1)
}
