import {Component, OnInit} from '@angular/core';
import {CountryISO,} from "ngx-intl-tel-input";
import {SimpleSelectorIndicator} from "../../../shared/model/SimpleSelectorIndicator";
import {Country, State} from 'country-state-city';
import {ICountry, IState} from "country-state-city/dist/lib/interface";

@Component({
  selector: 'app-create',
  templateUrl: './contact-create-page.component.html',
  styleUrls: ['./contact-create-page.component.scss']
})
export class ContactCreatePageComponent implements OnInit {

  public contactType: SimpleSelectorIndicator[] = [
    {
      label: "Persona natural",
      value: "single"
    },
    {
      label: "Persona jurídica",
      value: "corp"
    }
  ];

  public singleDocumentType: SimpleSelectorIndicator[] = [
    {
      label: "Cédula de ciudadanía",
      value: "cc"
    },
    {
      label: "Cédula de extranjería",
      value: "ce"
    },
    {
      label: "Pasaporte",
      value: "pp"
    }
  ];

  public groupMock: any[] = [
    {
      id: "1",
      icon: "uil uil-star",
      name: "Administrador"
    },
    {
      id: "1",
      icon: "uil uil-star",
      name: "Quaility Analysis"
    },
    {
      id: "1",
      icon: "uil uil-user",
      name: "Usuario"
    }
  ];

  public selectedDummyCountry: string = "";
  public countries: ICountry[] = Country.getAllCountries();
  public states: IState[] = [];
  public CountryISO: any = CountryISO;

  constructor() {
  }

  ngOnInit(): void {

  }

  public updateStateList(event: any): void {

    this.selectedDummyCountry = event.isoCode;
    this.states = State.getStatesOfCountry(this.selectedDummyCountry);

    // Quick UX fix for Colombia poor alignment of states
    this.states = this.states.map(state => ({
      ...state,
      name: state.name.includes('Archipelago of') ?
          'San Andrés, Providencia, Santa Catalina' : state.name.replace('Department', '')
    }));
  }

}
