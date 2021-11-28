import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent {

  cursos:any[] = [
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Programación en Js",
      modulos: "3 Módulos",
      id:1
    },
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Diseño",
      modulos: "3 Módulos",
      id:2
    },
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Desarrollo de Videojuegos",
      modulos: "4 Módulos",
      id:3
    },
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Diseño en Interfaz",
      modulos: "2 Módulos",
      id:4
    },
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Video Digital",
      modulos: "2 Módulos",
      id:5
    },
    {
      url: "https://www.youtube.com/embed/rEsSxd0L4GI",
      titulo: "Curso de Diseño Gráfico",
      modulos: "3 Módulos",
      id:6
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
