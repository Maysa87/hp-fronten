import { CommonModule } from '@angular/common';
import { HpService } from './services/hp.service';
import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'harry-potter-app';

  personagens: any[] = [];


  constructor(private hpService: HpService){
    hpService.getHp({
      name: '',
      house: null,
      bornDate: null
    }).subscribe({
      next: (personagens)=>{
        this.personagens = personagens;
        console.log(personagens);
      },
      error: ()=>{
        alert("deu ruim");
      }
    });
    
  }
}
