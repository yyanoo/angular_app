import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-background',
  imports: [CommonModule],
  templateUrl: './background.html',
  styleUrl: './background.scss'
})

export class Background implements OnInit {
  bubbles: any[] = [];

  scrollY = 0;
  containerTransform = 'translateY(0px)';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY / 1000;
    this.containerTransform = `translateY(${this.scrollY}px)`; // 跟滾輪往下移動
  }

  ngOnInit(): void {
    this.onWindowScroll();
    this.bubbles = this.generateBubbles();
  }

  generateBubbles() {
    const colors = [
      'rgb(250, 135, 135)',
      'rgb(135, 202, 250)',
      'rgb(135, 250, 143)',
      'rgb(238, 250, 135)',
      'rgb(250, 135, 229)',
      'rgb(250, 194, 135)',
    ];

    const lefts = ['10%', '25%', '40%', '60%', '75%', '90%'];
    const durations = ['9s', '6s', '7s', '5s', '8s', '10s'];
    const delays = ['1s', '2s', '0s', '2s', '1s', '0s'];

    return colors.map((color, i) => ({
      left: lefts[i],
      size: Math.floor(Math.random() * 80) + 30,
      color: color,
      animation_duration: durations[i],
      animation_delay: delays[i],
    }));
  }
}