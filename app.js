const beguin_button = document.getElementById('empezar');
const restart_button = document.getElementById('reiniciar');
const stop_button = document.querySelector('#detener')
const timer = document.getElementById('cronometro');
const sec = document.querySelector('#segundos')
const min = document.querySelector('#minutos')
const hour = document.querySelector('#horas')
let info_timer = true;

let segundos_cont = 0;
let minutos_cont = 0;
let horas_cont = 0;


function begin_timer() {
    segundos_cont++;

    if(segundos_cont / 60 == 1) { 
        segundos_cont = 0;
        minutos_cont++; 
        if (minutos_cont / 60 === 1) {
            minutos_cont = 0
            horas_cont++;
        } 
    }

    update_timer();
    console.log(info_timer)
}

function update_timer() {
    sec.innerHTML = `:${segundos_cont}`;
    min.innerHTML = `:${minutos_cont}`;
    hour.innerHTML = `${horas_cont}`;
}

let intervalo_id;
beguin_button.addEventListener('click', () => {
    if (info_timer === true) {
       intervalo_id =  window.setInterval(begin_timer, 1000)
    } 
})


stop_button.addEventListener('click', () => {    
    window.clearInterval(intervalo_id)
})

restart_button.addEventListener('click', () => {
    window.clearInterval(intervalo_id)
    sec.innerHTML = `:0`;
    min.innerHTML = `:0`;
    hour.innerHTML = `0`;
})