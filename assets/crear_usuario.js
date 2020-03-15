export default {
    data() {
      return {
        enEdicion: false,
        actualizar:0,
        usuario :{
          id:"",
          nombre:"",
          apellidos:"",
          correo:"",
          peso:0,
          estatura:0,
          acciones: true
        },
        lista_usuarios: []
      };
      },
      mounted(){
        localStorage.setItem(0, JSON.stringify({
          id:"0",
          nombre:"Jose David",
          apellidos:"Marulanda Orozco",
          correo:"jdmowp10@gmail.com",
          peso:70,
          estatura:170,
          acciones: true
        }));

          this.cargarusuario( )
      }
      ,
      methods: {
         crearusuarios() {

          localStorage.setItem(localStorage.length, JSON.stringify(this.usuario));

          this.usuario = {
            id: "",
            nombre: "",
            apellidos: "",
            correo: "",
            peso:0,
            estatura: 0,
            acciones:true
          };
          console.log(this.lista_usuarios.length);
          this.lista_usuarios = []
          this.cargarusuario()
        //this.enEdicion=true

        },
        eliminarusuarios(item) {

          for (var i = item.index; i < localStorage.length; i++) {
            let tem =localStorage.getItem(i+1)
            localStorage.setItem(i, tem);
          }
          localStorage.removeItem(localStorage.length-1)
          this.lista_usuarios = []
          this.cargarusuario()
        },
        cargarusuario() {

          for (var i = 0; i <= localStorage.length; i++) {
               var task = JSON.parse(localStorage.getItem(i));
               console.log(task);
               this.lista_usuarios.push(this.usuario = Object.assign({}, task))
          }

        },
        actualizarusuario() {
          let posicion = this.lista_usuarios.findIndex(
            usuario => usuario.id == this.usuario.id
          );

          localStorage.setItem(posicion, JSON.stringify(this.usuario));

          this.usuario = {
            id: "",
            nombre: "",
            apellidos: "",
            correo: "",
            peso:0,
            estatura: 0,
            acciones:true
          };
          console.log(this.lista_usuarios.length);
          this.lista_usuarios = []
          this.cargarusuario()
        }
      }
    };
