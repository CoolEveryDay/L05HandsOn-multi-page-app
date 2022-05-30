import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TOCPage implements OnInit {
 public chapters = [
   {
     title: 'Chapter 1 | The Beginning',
     url: '/chapter1'
    },

    {
      title: 'Chapter 2 | Getting Started',
      url: '/chapter2'
     },

     {
      title: 'Chapter 3 | Understanding',
      url: '/chapter3'
     },

     {
      title: 'Chapter 4 | Using Your New Found Knolage',
      url: '/chapter4'
     },

     {
      title: 'Link to My Git-Hub',
      url: '/git-hub'
     }


  
 ];


  constructor() { }

  ngOnInit() {
  }

}

