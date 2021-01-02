document.getElementById('lbsinput') .addEventListener('input', function(e){
    let lbs=e.target.value;
    document.getElementById('gramesOutput').innerHTML=lbs/0.0022046;
    document.getElementById('KgOutput').innerHTML=lbs/2.2046;
    document.getElementById('ozOutput').innerHTML=lbs*16;

})