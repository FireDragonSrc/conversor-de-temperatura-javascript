const button = document.querySelector('.button');
button.addEventListener('click',() => {
    let temperaturaC = document.querySelector('.temperaturaC');
    let c = (parseInt(temperaturaC.value) - 32) / 1.8;
    temperaturaC.value = '';
    temperaturaC.setAttribute('placeholder', `${c.toFixed(2)}`);

    let temperaturaF = document.querySelector('.temperaturaF');
    let F = (parseInt(temperaturaF.value) * 1.8) + 32;
    temperaturaF.value = ''
    temperaturaF.setAttribute('placeholder', `${F.toFixed(2)}`)

    let temperaturaK = document.querySelector('.temperaturaK');
    let K = parseInt(temperaturaK.value) + 273;
    temperaturaK.value = ''
    temperaturaK.setAttribute('placeholder', `${K.toFixed(2)}`)
})