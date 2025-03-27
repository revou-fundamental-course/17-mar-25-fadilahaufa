// form validation 
function validateForm() {
    const sisiInput = document.getElementById('sisiInput');
    // cek input 
    if(sisiInput.value == ''){
        alert('Tidak boleh kosong');
    }else{
        console.log(sisiInput.value);
    }
}
