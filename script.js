const materias = ["Historia ", "Geografia", "Matematicas", "Programacion"];


const nombre = prompt("Ingresa tu nombre");
const notas = [];
    


    for (let i = 0 ; i< materias.length; i++){
       let nota = parseInt(prompt(`Cuanto sacaste del 0 a 10 en ${materias[i]}`));
       
        notas.push(nota)}
    
 

let total=0;
for(let i of notas) total+=i;
let promedio = total / materias.length;
    if (promedio === 10 ){
    alert(`Buen trabajo ${nombre} tu promedio es ${promedio} y puedes estudiar lo que quieras`)
    } 
    else if (promedio >5 && promedio <10 ){
        alert(`Tu promedio es ${promedio} y puedes estudiar casi cualquier cosa`)

        }else {
            alert(`tu promedio es ${promedio} estudia mas`)
        }
    

