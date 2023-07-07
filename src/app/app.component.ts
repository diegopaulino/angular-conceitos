import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-atributos
      ><h1>Aulas de diretivas Atributo</h1>
      <h3>Final da Aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos
      ><h1>Diego Paulino</h1>
      <h3>Raone Paulino</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet> -->

    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->
    <!-- <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button> -->

    <!-- <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h1>{{ getDados.idade }}</h1>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output> -->

    <app-food-list></app-food-list>
  `,
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;
  public addValue: number = 0;
  public add() {
    this.addValue += 1;
  }

  public getDados: { nome: string; idade: number } | undefined;

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }

  ngOnInit(): void {}
}
