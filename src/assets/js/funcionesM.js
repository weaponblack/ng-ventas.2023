function iniciarMenuLateral(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {

        });
      });
}
iniciarMenuLateral();
//alert("hola desde funcionesM.js")