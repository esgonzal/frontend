import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/services/bolsa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { empleos, empleo } from 'src/app/interfaces/bolsa';

@Component({
  selector: 'app-bolsa-screen',
  templateUrl: './bolsa-screen.component.html',
  styleUrls: ['./bolsa-screen.component.scss']
})
export class BolsaScreenComponent implements OnInit {

 
  bolsa:BolsaService = new BolsaService

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  redirec(idnoticia:number){
    this.router.navigate(['/empleo',idnoticia]).then(()=>{
      window.location.reload();
    })
  }
}
