const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in"),
thb = document.querySelector("#thb"),
yen = document.querySelector("#yen");

window.addEventListener("load", ()=> centimeter.focus());

centimeter.addEventListener("input", ()=> {
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value = "";
});

inch.addEventListener("input", ()=> {
    centimeter.value = (inch.value * 2.54).toFixed(4);
    if(!inch.value) centimeter.value = "";
});

thb.addEventListener("input", ()=> {
    yen.value = (thb.value * 3.8596382).toFixed(2);
    if(!thb.value) yen.value = "";
});

yen.addEventListener("input", ()=> {
    thb.value = (yen.value * 0.259094).toFixed(2);
    if(!yen.value) thb.value = "";
});
