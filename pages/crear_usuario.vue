<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de Tareas">
            <b-img left="3px" src="" width="70" height="70"></b-img>
            <b-card-text>Ingrese la información del usuario</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearusuarios()">


                <b-form-group label="id" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  max="9999"
                  min="0000"
                  v-model="usuario.id"
                  placeholder="Ingrese el documento de identificación"
                  id="id"
                />
              </b-form-group>


              <b-form-group label="Nombre" label-for="nombre">
                <b-form-input
                  class="form-control"
                  v-model="usuario.nombre"
                  placeholder="Ingrese los nombres"
                  id="nombre"
                />
              </b-form-group>

              <b-form-group label="Apellidos" label-for="apellidos">
                <b-form-input
                  class="form-control"
                  v-model="usuario.apellidos"
                  id="apellidos"
                  placeholder="Ingrese los apellidos"
                />
              </b-form-group>

              <b-form-group label="Correo" label-for="correo">
                <b-form-input
                  class="form-control"
                  v-model="usuario.correo"
                  type="email"
                  id="correo"
                  placeholder="Ingrese correo electrónico"
                />
              </b-form-group>

              <b-form-group label="Peso" label-for="peso">
                <b-form-input
                  class="form-control"
                  v-model="usuario.peso"
                  type="number"
                  id="peso"
                  placeholder="Ingrese el peso"
                />
              </b-form-group>

              <b-form-group label="Estatura" label-for="estatura">
                <b-form-input
                  class="form-control"
                  v-model="usuario.estatura"
                  type="number"
                  id="estatura"
                  placeholder="Ingrese la estatura"
                />
              </b-form-group>


              <b-button type="submit" variant="" v-if="!enEdicion">Crear Tarea</b-button>
              <b-button @click="actualizarusuario()" variant="primary" v-else>Actualizar Tarea</b-button>
            </b-form>
          </b-card>
          <br />


        </b-col>

        <b-col>
          <b-table striped hover :items="lista_usuarios">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" @click="enEdicion=true" class="mr-2" variant="warning">Modificar</b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarusuarios(row)"
                class="mr-2"
                variant="danger"
              >Eliminar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script src="../assets/crear_usuario.js"/>
