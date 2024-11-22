function demonstrarSort(array) {
    console.log("Array original:", array);
   
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Simula a função de comparação do sort
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
               
                console.log(`Troca: ${array[j + 1]} <-> ${array[j]}`);
                console.log("Estado atual:", array);
            }
        }
    }
   
    console.log("Array ordenado:", array);
}


// Teste
demonstrarSort([5, 2, 8, 1, 9]);
