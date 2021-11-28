import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/services/bolsa.service';
import { empleos, empleo } from '../../interfaces/bolsa';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-empleos-screen',
  templateUrl: './empleos-screen.component.html',
  styleUrls: ['./empleos-screen.component.scss']
})
export class EmpleosScreenComponent implements OnInit {

 

  empleos_prueba: any[] =[
    {
      "_idNoticia":1,
      "titulo": "Programador front-end en empresa",
      "empresa": "Program S.A.C",
      "pais": "Chile",
      "ciudad": "Santiago de Chile",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(2021,11,18,10),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "descripcion_empresa":"Nam faucibus tempus erat at hendrerit. Donec euismod neque id imperdiet finibus. Proin id commodo diam. Praesent nec justo eu leo fermentum condimentum a sed mauris. Aenean sem arcu, dignissim ut leo et, tincidunt placerat nibh. Aliquam cursus mollis diam sit amet dignissim. Proin rutrum lobortis orci in porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dictum dui est, dignissim feugiat velit venenatis eget. Aenean et ultricies erat, id sagittis leo. Pellentesque posuere turpis risus, eget tempor felis maximus in. ",
      "contacto": "1 6817243",
      "correo": "Programsac@gmail.com",
      "isVerificada": false,
      "salario": "",
      "jornada": "Full time"
    },{
      "_idNoticia":2,
      "titulo": "Diseñador UI en empresa",
      "empresa": "UXp S.A.S",
      "pais": "Colombia",
      "ciudad": "Bogotá",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(2021,11,18,20),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "contacto": "1 6817243",
      "correo": "Programsac@gmail.com",
      "isVerificada": true,
      "salario": "",
      "jornada": "Full time"
    }
  ]

  empleo?:empleo;
  id:number=0;
  estado:boolean = false;
  empleoSugeridos:any
  bolsa:BolsaService = new BolsaService
  
  constructor(private ruta:ActivatedRoute, private router: Router) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
    this.empleoSugeridos = Object.create(empleos);
  }

  ngOnInit(): void {
    this.empleo = empleos.find(objeto=>objeto._idNoticia==this.id);
    this.empleoSugeridos = this.bolsa.reloadEmpleos(this.empleo!);
    this.empleoSugeridos.splice(2,this.empleoSugeridos.length);
  }


}
