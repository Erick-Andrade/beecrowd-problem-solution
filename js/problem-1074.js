const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n, ...values] = input.split('\n').map(inp => Number(inp));
let i = -1;

values.forEach(value => {
    i++;
    if (i < n){
        if (value === 0) {
            console.log("NULL");
        }else{
            let paridade = (value % 2 === 0) ? "EVEN": "ODD";
            let sinal = (value > 0) ? "POSITIVE": "NEGATIVE";
            console.log(`${paridade} ${sinal}`);
        }      
    }
});