var input = document.querySelector('input[type="file"]');
input.addEventListener('change', seleccionar, false);
function seleccionar () {
        var reader = new FileReader();
        reader.onload = function (){
            var video = document.getElementById('myvideo');
            video.src = reader.result;
        };
    alert("El vídeo se está cargando")
    reader.readAsDataURL(input.files[0]);
}
