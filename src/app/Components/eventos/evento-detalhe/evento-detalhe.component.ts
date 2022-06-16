import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {


  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }


  public validacao(): void {
  this.form = new FormGroup({
  local: new FormControl('xpto'),
  dataEvento: new FormControl('xpto'),
  tema: new FormControl('xpto'),
  qtPessoas: new FormControl('xpto'),
  lote: new FormControl('xpto'),
  imagemUrl: new FormControl('xpto'),
  telefone: new FormControl('xpto'),
  email: new FormControl('xpto'),
  });
  }

}
