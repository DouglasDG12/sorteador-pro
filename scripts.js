function sorteador() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)


    if (min >= max) {
        alert("O valor maximo não pode ser menor ou igual o valor minimo!!")
    } else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }

}

