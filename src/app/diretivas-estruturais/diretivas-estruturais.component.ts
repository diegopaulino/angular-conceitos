import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Diego Paulino', idade: 30 },
    { nome: 'Diego Silva', idade: 20 },
    { nome: 'João Silva', idade: 40 },
  ];

  public nome: string = "Diego"
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.condition) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Jacob', idade: 59 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }


}
