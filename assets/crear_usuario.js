export default {
    data() {
      return {
        enEdicion: false,
        usuario :{
          id:"",
          nombre:"",
          apellidos:"",
          correo:"",
          peso:0,
          estatura:0,
          acciones: true
        },
        lista_usuarios: [{
          id:"0",
          nombre:"Jose David",
          apellidos:"Marulanda Orozco",
          correo:"jdmowp10@gmail.com",
          peso:70,
          estatura:170,
          acciones: true
        }]
      };
      },
      methods: {
         crearusuarios() {
           var n = localStorage.length
          localStorage.setItem(n+1, JSON.stringify(this.usuario));

          this.usuario = {
            id: "",
            nombre: "",
            apellidos: "",
            correo: "",
            peso:0,
            estatura: 0
          };
console.log(this.lista_usuarios.length);
        },
        eliminarusuarios({ item }) {
          let posicion = this.lista_usuarios.findIndex(
            usuario => usuario.id == item.id
          );
          this.lista_usuarios.splice(posicion, 1);
          localStorage.removeItem(posicion);
        },
        cargarusuario() {

          for (var i = 0; i < localStorage.length; i++) {
             var task = JSON.parse(localStorage.getItem(i));
            this.lista_usuarios.push(this.usuario = Object.assign({}, task));
          }
          console.log("liista:"+this.lista_usuarios.length)

        },
        actualizarusuario() {
          let posicion = this.lista_usuarios.findIndex(
            usuario => usuario.id == this.usuario.id
          );
          //this.lista_usuarios.splice(posicion, 1, this.usuario);
          localStorage.setItem(posicion,this.usuario);

          this.usuario = {
            id: "",
            nombre: "",
            apellidos: "",
            correo: "",
            peso:0,
            estatura: 0,
            acciones: true
          };

        }
      }
    };
