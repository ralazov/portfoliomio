import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  datosUsuarios: any = [
    {
      "foto": "http://placehold.it/32x32",
      "edad": 34,
      "colorOjo": "brown",
      "nombre": "Lakisha Newman",
      "genero": "female",
      "empresa": "ZENSURE",
      "email": "lakishanewman@zensure.com",
      "telefono": "+1 (997) 466-2189",
      "direccion": "440 Hicks Street, Chesterfield, Illinois, 3749",
      "descripcion": "Pariatur exercitation est nisi adipisicing anim aute esse minim culpa. Tempor pariatur eu laborum dolore. Et nulla reprehenderit ut id consectetur eiusmod. Enim quis veniam fugiat qui commodo non eu laboris quis est sunt cillum.\r\n",
      "amigos": [
        {
          "nombre": "Ramona Bishop"
        },
        {
          "nombre": "Benson Tate"
        },
        {
          "nombre": "Cain Levy"
        }
      ],
      "frutasFavoritas": "banana"
    },
    {
      "foto": "http://placehold.it/32x32",
      "edad": 25,
      "colorOjo": "blue",
      "nombre": "Powers Durham",
      "genero": "male",
      "empresa": "QUORDATE",
      "email": "powersdurham@quordate.com",
      "telefono": "+1 (942) 449-2889",
      "direccion": "256 Stone Avenue, Cloverdale, American Samoa, 9920",
      "descripcion": "Sunt voluptate culpa adipisicing laborum enim dolore et fugiat enim aliquip non exercitation. Nostrud officia dolore aliquip aute sunt. Ea laboris occaecat laboris reprehenderit eiusmod. Dolor sunt dolor qui officia sunt et magna fugiat ut exercitation. Amet Lorem est sint cillum nostrud nulla consequat. Dolore velit cillum in in.\r\n",
      "amigos": [
        {
          "nombre": "James Waller"
        },
        {
          "nombre": "Meghan House"
        },
        {
          "nombre": "Velasquez Rivers"
        }
      ],
      "frutasFavoritas": "apple"
    },
    {
      "foto": "http://placehold.it/32x32",
      "edad": 31,
      "colorOjo": "green",
      "nombre": "Janell Grant",
      "genero": "female",
      "empresa": "COFINE",
      "email": "janellgrant@cofine.com",
      "telefono": "+1 (932) 412-2701",
      "direccion": "959 Kensington Walk, Coral, New Mexico, 4675",
      "descripcion": "Quis laborum ad consectetur enim in. Lorem pariatur quis dolore magna adipisicing. Ipsum consectetur do nulla nisi esse dolore. Id veniam eiusmod do tempor eu nisi consectetur quis.\r\n",
      "amigos": [
        {
          "nombre": "Lupe Sloan"
        },
        {
          "nombre": "Ballard Holder"
        },
        {
          "nombre": "Lina Sanders"
        }
      ],
      "frutasFavoritas": "banana"
    },
    {
      "foto": "http://placehold.it/32x32",
      "edad": 31,
      "colorOjo": "green",
      "nombre": "Esperanza Weiss",
      "genero": "female",
      "empresa": "CENTURIA",
      "email": "esperanzaweiss@centuria.com",
      "telefono": "+1 (890) 444-2646",
      "direccion": "884 McKinley Avenue, Soham, Missouri, 7816",
      "descripcion": "Consequat qui qui reprehenderit duis ea sint irure exercitation enim deserunt. Eu magna Lorem in sunt enim laborum est ex. Amet anim labore dolore irure in eiusmod sit esse esse.\r\n",
      "amigos": [
        {
          "nombre": "Effie Schultz"
        },
        {
          "nombre": "Mendez Marks"
        },
        {
          "nombre": "Morales Deleon"
        }
      ],
      "frutasFavoritas": "banana"
    },
    {
      "foto": "http://placehold.it/32x32",
      "edad": 28,
      "colorOjo": "brown",
      "nombre": "Neal Dudley",
      "genero": "male",
      "empresa": "SULTRAX",
      "email": "nealdudley@sultrax.com",
      "telefono": "+1 (942) 420-3466",
      "direccion": "814 Danforth Street, Terlingua, South Carolina, 8247",
      "descripcion": "Ad ut labore aliqua aliqua ut tempor duis do commodo sint sunt et. Ut sint Lorem exercitation do officia. Qui mollit sint deserunt eu exercitation esse exercitation exercitation ut quis. Cupidatat quis veniam dolor tempor officia adipisicing occaecat culpa aute. Ut dolor excepteur culpa quis duis amet commodo magna nisi ipsum veniam sunt. Sit irure cillum amet exercitation deserunt nostrud in dolor aliquip nisi mollit voluptate tempor. Tempor amet dolore laborum excepteur elit veniam tempor velit incididunt duis laboris.\r\n",
      "amigos": [
        {
          "nombre": "Nichols Greene"
        },
        {
          "nombre": "Glenda Aguilar"
        },
        {
          "nombre": "Janna Lawson"
        }
      ],
      "frutasFavoritas": "strawberry"
    },
    {
      "foto": "http://placehold.it/32x32",
      "edad": 22,
      "colorOjo": "brown",
      "nombre": "Small Abbott",
      "genero": "male",
      "empresa": "VIXO",
      "email": "smallabbott@vixo.com",
      "telefono": "+1 (808) 536-3728",
      "direccion": "708 Hazel Court, Coalmont, Iowa, 8611",
      "descripcion": "Labore commodo consectetur duis irure irure excepteur velit cupidatat incididunt exercitation. Quis nulla est mollit id sit mollit dolore et veniam minim sunt aute cupidatat eiusmod. Aliqua aliqua enim incididunt esse mollit fugiat commodo. Eu enim aliquip nulla culpa qui officia id deserunt irure consectetur veniam.\r\n",
      "amigos": [
        {
          "nombre": "Sheena Cobb"
        },
        {
          "nombre": "Roy Richards"
        },
        {
          "nombre": "Pansy Watkins"
        }
      ],
      "frutasFavoritas": "strawberry"
    }
  ];




  title: string = 'titulo';
  variabletexto: string = 'HOLA CLASE 404';
  variableNumero: number = 20000;

  ngOnInit() {



  }


  mostrarTresPrimerosNombres() {

    var i = 0;
    for (i = 0; i <= 2; i++) {


      alert(this.datosUsuarios[i].nombre);

    }


  }


  mostrarTodosLosNombres() {

    this.datosUsuarios.forEach(function (usuario: any) {

      if (usuario.edad >= 30) {

        alert(usuario.nombre);

      }



    });





  }


















  crearFormulario(event: any) {

    alert('En esta funcion procesamos los datos del formulario');


    alert(event.target.nombre.value);
    alert(event.target.email.value);

  }































  menu() {

    alert('En esta funcion se abriria el menu');

  }

  favoritos() {

    alert('En esta funcion se agregaria a favoritos');

  }

  compartir() {

    alert('En esta funcion se compartiria');


  }
}
