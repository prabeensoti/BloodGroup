import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedState: String;
  states: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  cities: string[] ;
  bloodGroups: string[] = ['A+', 'A-'];
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSelectProvinance(state: string) {
    this.cities = ['Bharatpur', 'Kathmandu'];
  }
  filterByProvinance(filterVal: any) {
    if (filterVal === '0') {
    this.cities = ['Bharatpur', 'Kathmandu'];
    } else {
      this.cities = ['Bharatpur'];
    }
    // this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
  }
  filterByCity(filterVal: any) {
    if (filterVal === '0') {
    } else {
    }
    // this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
  }
  filterByBloodGroup(filterVal: any) {
    if (filterVal === '0') {
    } else {
    }
    // this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
  }
}
