import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from "@angular/material";

import { Poliza } from "./../models/polizas";
import { PolizaService } from "./poliza.service";

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {

  public tiposPoliza: any;
  public polizaForm: FormGroup;
  private poliza: Poliza;

  constructor(private formBuilder: FormBuilder,
    private polizaService: PolizaService) { }

  ngOnInit() {
    this.polizaForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoPoliza: [0, [Validators.required]],
      valorPoliza: [0]
    });

    this.getTipoPolizas();
  }

  getTipoPolizas(): void {
    this.polizaService.getTipoPolizas()
      .subscribe(data => 
        this.tiposPoliza = data
      );
  }

  setValorTipoPoliza($event: EventEmitter<MatSelectChange>) {
    /* console.log($event.value);
    this.polizaForm.controls['valorPoliza'].setValue($event.value); */
  }

  addPoliza(): void {
    if (!this.polizaForm.invalid) {
      this.poliza = undefined;
      this.poliza.cedula = "";
      this.poliza.nombre = "";
      this.poliza.tipoPoliza = 0;
      this.poliza.numeroPoliza = 0;

      this.polizaService.postPoliza(this.poliza)
        .subscribe(poliza => poliza);
    }
  }
}
