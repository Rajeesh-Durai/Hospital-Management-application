import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contents: any = [
    {
      Name: 'Joseph Vijay',
      description:
        "The hospital provided excellent care and attention to my needs. I'm highly satisfied with their services.",
    },
    {
      Name: 'MS Dhoni',
      description:
        'The hospital exceeded my expectations in terms of quality of care and promptness of service. I would highly recommend it.',
    },
    {
      Name: 'Priyanka Mohan',
      description:
        "I felt well taken care of during my visit to the hospital. The doctors and nurses were knowledgeable and compassionate. Overall, I'm very satisfied with my experience.",
    },
  ];

  currentIndex: number = 0;

  showContent(index: number) {
    const titleElement = document.getElementById('Name');
    const descriptionElement = document.getElementById('description');
    if (titleElement && descriptionElement) {
      descriptionElement.textContent = this.contents[index].description;
      titleElement.textContent = this.contents[index].Name;
    }
  }

  showNext() {
    if (this.currentIndex < this.contents.length - 1) {
      this.currentIndex++;
      this.showContent(this.currentIndex);
    }
  }

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showContent(this.currentIndex);
    }
  }

  ngOnInit(): void {
    this.showContent(this.currentIndex);
    const content1 = document.querySelector('.content-1');
    const content2 = document.querySelector('.content-2');
    const review = document.querySelector('.review');
    const reviewhead = document.querySelector('.review-head');
    const reviewcon = document.querySelector('.review-con');
    const side = document.querySelector('.side');
    const detail = document.querySelector('.detail');
    const content3 = document.querySelector('.con-3');
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target?.classList.add('show');
          observer.unobserve(target);
        }
      });
    }

    const options = {
      threshold: 0.2, // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the target elements if they are not null
    content1 && observer.observe(content1);
    content2 && observer.observe(content2);
    review && observer.observe(review);
    reviewhead && observer.observe(reviewhead);
    reviewcon && observer.observe(reviewcon);
    side && observer.observe(side);
    detail && observer.observe(detail);
    content3 && observer.observe(content3);
  }
}
