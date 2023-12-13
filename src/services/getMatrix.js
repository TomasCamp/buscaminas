export default function getMatrix(LEN) {
    let matrix = Array.from({length: LEN}, () => Array.from({length: LEN}, () => {return {state: false, simbol: 0}}))
  
    //Generar bombas
    let index = []
    let bombas;
    if (LEN === 8) bombas = 10;
    else if (LEN === 16) bombas = 40;
    else bombas = 99;

    while (bombas > 0) {
        let aux1 = Math.floor(Math.random() * (LEN));
        let aux2 = Math.floor(Math.random() * (LEN));
        if (matrix[aux1][aux2].simbol !== "B") {
            index.push([aux1, aux2]);
            matrix[aux1][aux2].simbol = "B";
        }
        bombas--;
    }

    //Asignar numeros
    index.forEach(([i, j]) => {
        if (i === 0){
            if (j !== 0) {
                if(matrix[i][j-1].simbol !== "B") matrix[i][j-1].simbol++;
                if(matrix[i+1][j-1].simbol !== "B") matrix[i+1][j-1].simbol++;
            }
            if (j !== LEN-1) {
                if(matrix[i][j+1].simbol !== "B") matrix[i][j+1].simbol++;
                if(matrix[i+1][j+1].simbol !== "B") matrix[i+1][j+1].simbol++;
            }
            if(matrix[i+1][j].simbol !== "B") matrix[i+1][j].simbol++;

        } else if (i === LEN-1){
            if (j !== 0) {
                if(matrix[i][j-1].simbol !== "B") matrix[i][j-1].simbol++;
                if(matrix[i-1][j-1].simbol !== "B") matrix[i-1][j-1].simbol++;
            }
            if (j !== LEN-1) {
                if(matrix[i][j+1].simbol !== "B") matrix[i][j+1].simbol++;
                if(matrix[i-1][j+1].simbol !== "B") matrix[i-1][j+1].simbol++;
            }
            if(matrix[i-1][j].simbol !== "B") matrix[i-1][j].simbol++;

        } else {
            if (j !== 0) {
                if(matrix[i][j-1].simbol !== "B") matrix[i][j-1].simbol++;
                if(matrix[i+1][j-1].simbol !== "B") matrix[i+1][j-1].simbol++;
                if(matrix[i-1][j-1].simbol !== "B") matrix[i-1][j-1].simbol++;
            }
            if (j !== LEN-1) {
                if(matrix[i][j+1].simbol !== "B") matrix[i][j+1].simbol++;
                if(matrix[i+1][j+1].simbol !== "B") matrix[i+1][j+1].simbol++;
                if(matrix[i-1][j+1].simbol !== "B") matrix[i-1][j+1].simbol++;
            }
            if(matrix[i+1][j].simbol !== "B") matrix[i+1][j].simbol++;
            if(matrix[i-1][j].simbol !== "B") matrix[i-1][j].simbol++;
        }
    });
    return matrix; 
}
