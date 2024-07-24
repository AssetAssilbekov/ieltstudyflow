// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = innerWidth;
// canvas.height = innerHeight;

// function render() {
//     requestAnimationFrame(render);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'red';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// render();

const errorMessage = document.querySelector('#error');
function sendError(message) {
    errorMessage.innerText = message;
    setTimeout(() => {
        errorMessage.innerHTML = '&nbsp;';
    }, 5000);
}

console.log(localStorage.getItem('data'));
let data = {name:'',telephone:''};
let submitable = true;
if (localStorage.getItem('data')!==null) {
    data = JSON.parse(localStorage.getItem('data'));
    submitable = false;
    document.querySelector('#submit').innerHTML = 'Записаны';
    document.querySelector('#submitname').value = data.name;
    document.querySelector('#telephone').value = data.telephone;
}
const serviceID = "service_jo9z773";
const templateID = "template_1j3myx6";
document.getElementById('submit').addEventListener('click', () => {
    const submitName = document.querySelector('#submitname').value;
    const submitNumber = document.querySelector('#telephone').value;
    if(!submitable) return;
    if (submitName.length < 1) {
        sendError('no name')
        return;
    }
    if (submitNumber.length < 11) {
        sendError('no phone number')
        return;
    }
    const params = {
        name: submitName,
        telephone_number: submitNumber
    }
    emailjs.send(serviceID,templateID,params)
    document.querySelector('#submit').innerHTML = 'Записаны';
    data.name = params.name;
    data.telephone = params.telephone_number;
    localStorage.setItem('data', JSON.stringify(data));
});


addEventListener('scroll', e => {
    if(scrollY/innerHeight < 0.5) {
        document.getElementById('logo').style.opacity = '100%';
        document.getElementById('btn').style.opacity = '100%';
        document.getElementById('btn2').style.display = 'fixed';
    } else {
    document.getElementById('logo').style.opacity = '0%';
    document.getElementById('btn').style.opacity = '0%';
    document.getElementById('btn2').style.display = 'none';
    }
});

document.querySelector('#submitname').addEventListener('change', () => {
    if (document.querySelector('#submitname').value === data.name && document.querySelector('#telephone').value === data.telephone) {
        submitable = false;
        document.querySelector('#submit').innerHTML = 'Записаны';
        return;
    } 

    submitable = true;
    document.querySelector('#submit').innerHTML = 'Записать';
});

document.querySelector('#telephone').addEventListener('change', () => {
    if (document.querySelector('#submitname').value === data.name && document.querySelector('#telephone').value === data.telephone) {
        submitable = false;
        document.querySelector('#submit').innerHTML = 'Записаны';
        return;
    } 

    submitable = true;
    document.querySelector('#submit').innerHTML = 'Записать';
});
