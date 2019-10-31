import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  imagenesUrls: string[];
  imagenActual: string;
  imgsInterval: any;

  constructor() {}

  ngOnInit() {
    this.imagenesUrls = [
      `https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1` +
        `&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80`,
      `https://images.unsplash.com/photo-1533788179956-82e8a027c962?ixlib=rb-1.2.1
      &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`,
      `https://images.unsplash.com/photo-1530143584546-02191bc84eb5?ixlib=rb-1.2.1
      &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`,
      `https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1
      &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
    ];
    const i = 0;
    this.imagenActual = this.imagenesUrls[i];
  }
}
