import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Diego';
  public idade: number = 30;
  public maisUm: number = 1;
  public checkedDisabled: boolean = false;
  public imgTitle: string = 'Img background';
  public imgAlt: string = 'Imagem de fundo';
  public imgSrc: string =
    'https://media.istockphoto.com/id/1443305526/pt/foto/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=1024x1024&w=is&k=20&c=5GLWzq-efEmORB_XNRXXYltMcaviQRO2e_lj5U4y-HM=';

  public position: { x: number; y: number } = { x: 0, y: 0 };
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent) {
    // console.log(valor);

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
