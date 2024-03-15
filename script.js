const Updateresultv = () => {
    let tempinput = parseFloat(document.getElementById('tempinput').value);
    let unit = document.getElementById('unit').value;
    let Elementresult = document.getElementById('result');

    if (unit === 'celsius') {
        let farenheight = (tempinput * 9/5) + 32
        Elementresult.textContent = `The ${tempinput} temp is ${farenheight.toFixed(2)} farenheight`
        document.title = "celsius to farenheight"
    } else if (unit === 'farenheight') {
        let celsius = (tempinput - 32) * 5/9;
        Elementresult.textContent = `The ${tempinput} temp is ${celsius.toFixed(2)} celsius`
        document.title = "farenheight to celsius"
    }
}
document.getElementById('tempinput').addEventListener('input' , Updateresultv);
document.getElementById('unit').addEventListener('change' , Updateresultv)


