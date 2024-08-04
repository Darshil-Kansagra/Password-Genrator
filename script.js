var btn = document.getElementsByTagName('button');
btn[0].addEventListener("click",()=>{
    var digths = document.getElementById('Digths').value;
    var display = document.getElementsByTagName('span');
    document.getElementsByTagName('label')[1].style.display = "inline";
    var password = "";
    for(i=0;i<digths;i++){
        if((Math.random()*10)>4){
            password=password.concat(String.fromCharCode(getRandomArbitrary(65,90)));
        }
        else if((Math.random()*10)<2){
            password=password.concat(String.fromCharCode(getRandomArbitrary(97,122)));
        }
        else{
            password=password.concat(parseInt(Math.random()*9));
        }
    }
    display[0].innerHTML = password;
});
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}