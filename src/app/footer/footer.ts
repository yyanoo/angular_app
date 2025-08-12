import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']  // 注意是 styleUrls，不是 styleUrl
})
export class Footer implements OnInit, OnDestroy {

  private routerSubscription!: Subscription;

  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.checkFooter();

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkFooter();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private checkFooter(): void {
    const footer: HTMLElement | null = this.el.nativeElement.querySelector('.footer-container');
    if (!footer) return;

    if (document.body.scrollHeight <= window.innerHeight) {
      footer.classList.add('sticky');
    } else {
      footer.classList.remove('sticky');
    }
  }
}