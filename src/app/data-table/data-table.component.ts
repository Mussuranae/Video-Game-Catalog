import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface MovieData {
  id: string;
  movieName: string;
  actor: string;
  languages: string;
  subtitle: string;
}

const MOVIE_DATA: MovieData[] = [
  { id: '1', movieName: 'Avengers 1', actor: '6 good actors', languages: 'english', subtitle: 'Japanese'},
  { id: '2', movieName: 'Thor', actor: 'Chris Hemsworth', languages: 'english', subtitle: 'Korean'},
  { id: '3', movieName: 'Iron mAn', actor: 'Robert Downey Jr', languages: 'english', subtitle: 'Spanish'},
  { id: '4', movieName: 'Captain America', actor: 'Chris Evans', languages: 'english', subtitle: 'German'},
  { id: '5', movieName: 'AquaMan (yes yes)', actor: 'Jason Momoa', languages: 'english', subtitle: 'French'},
  { id: '6', movieName: 'Avengers endgame', actor: 'a lot', languages: 'english', subtitle: 'all languages'}
];


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  columnsToDisplay = ['id', 'movieName', 'actor', 'languages', 'subtitle'];
  dataTableSource = new MatTableDataSource(MOVIE_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataTableSource.sort = this.sort;
  }
}

