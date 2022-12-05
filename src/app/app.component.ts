import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      mensaje:["",[Validators.required]],
      nombre:["", [Validators.required]]
    });


  }


  get formControl(){
    return this.contactForm.controls;
   };

  crearFormulario(event: any) {

    if(this.contactForm.valid ==true){
      window.open('https://wa.me/' + 2215729520 + '?text=Hola soy  '+this.contactForm.value.nombre+' Quisiera saber sobre '+this.contactForm.value.mensaje, '_blank')
    }else{
      alert('volve a intentar')
    }
   }
   facebook(){
    window.open("https://www.facebook.com/raul.lazo.142/")
   }


   instagram(){
    window.open("https://www.Instagram.com/raul.lazo.142/")
   }

   GitHub(){
    window.open("https://github.com/ralazov/portfoliomio")
   }
  }













