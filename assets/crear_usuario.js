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
          imc:0,
          acciones: false
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
          estatura:1.70+"M",
          imc:21,
          acciones: true
        }));

          this.cargarusuario( )
      },
      methods: {
         crearusuarios() {

          for (var i = 0; i < localStorage.length; i++) {
            var task = JSON.parse(localStorage.getItem(i));
            if(task.id == this.usuario.id){
              alert("El usuario ya existe, verifique la información");
              this.lista_usuarios = []
              this.cargarusuario()
              return;
            }
          }

          localStorage.setItem(localStorage.length, JSON.stringify(this.usuario));
          this.usuario = {
            id: "",
            nombre: "",
            apellidos: "",
            correo: "",
            peso:0,
            estatura:0,
            imc:0,
            acciones:true
          };
          console.log(this.peso);
          this.imc()
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
            imc:0,
            acciones:true
          };
          console.log(this.lista_usuarios.length);
          this.lista_usuarios = []
          this.cargarusuario()
        },
        imc(){
          for (var i = 0; i < localStorage.length; i++) {
               let task = JSON.parse(localStorage.getItem(i));
               console.log(task.peso);
               task.imc = Math.round(task.peso/((task.estatura/100)*(task.estatura/100)))
               localStorage.setItem(i, JSON.stringify(task));
          }
          this.lista_usuarios = []
          this.cargarusuario()

        },
        mensaje(item){
          let tem = JSON.parse(localStorage.getItem(item.index))
          let x = tem.imc;

          if(x< 18.5){
              alert("Peso menor al normal")}
          else if(x >= 18.5 && x<=24.9){
              alert("Peso normal")}
          else if(x>=25 && x <= 29.9){
            alert("Peso superior al normal")}
          else if(x>30){
              alert("Indices de obesidad")}
          else{
            alert("No hay datos")
          }
          }
        }
      };
