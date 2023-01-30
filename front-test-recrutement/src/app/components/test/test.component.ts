import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  wines = [
    {
      name: 'Sauvignon',
      color: 'white',
      millesime: '2012',
    },
    {
      name: 'Bordeaux',
      color: 'red',
      millesime: '2018',
    },
    {
      name: 'Loupiac',
      color: 'white',
      millesime: '2017',
    },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Exemple de vin
    /* const wineTest = {
      name: 'Chablis',
      color: 'white',
      millesime: '2021',
    }; */
    // Exemple de requête
    /* 
    this.apiService.addWine(wineTest).subscribe((res: any) => {});
    this.apiService.getWines().subscribe((res: any) => (this.data = res));
    this.apiService.getWineByName('Chablis').subscribe((res) => {}); 
    */
  }
}
