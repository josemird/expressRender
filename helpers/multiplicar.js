const multiplicar = async (base) => {
    let operacion = '';
  
    for (let i = 1; i <= 10; i++) {
      operacion += `${base} x ${i} = ${base * i}\n`;
    }
  
    return operacion;
  };
  
  export default multiplicar;