import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css', './landing-page2.css', './landing-page3.css', './responsiveness.css',],
})
export class LandingPage {
  showAllDes = false;
  showAll(){
    this.showAllDes = true;
  }
  showLess(){
    this.showAllDes = false;
  }
  openOs(){
    window.open("https://tilux-os-93lt.vercel.app/tilux")
  }
}
