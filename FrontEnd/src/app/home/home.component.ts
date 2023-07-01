import { Component, OnInit } from '@angular/core';

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
    document.addEventListener('DOMContentLoaded', function () {
      var content1 = document.querySelector('.content-1');
      var content2 = document.querySelector('.content-2');
      var content4 = document.querySelector('.content-4');
      var review = document.querySelector('.review');
      var reviewhead = document.querySelector('.review-head');
      var reviewcon = document.querySelector('.review-con');
      var side = document.querySelector('.side');
      var detail = document.querySelector('.detail');
      var content3 = document.querySelector('.con-3');
      function isElementInView(el: any) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      const handleScroll1 = () => {
        if (isElementInView(content1)) {
          content1?.classList.add('show');
        }
      };
      const handleScroll2 = () => {
        if (isElementInView(content2)) {
          content2?.classList.add('show');
        }
      };
      const handleScroll3 = () => {
        if (isElementInView(content4)) {
          content4?.classList.add('show');
        }
      };
      const handleScroll4 = () => {
        if (isElementInView(review)) {
          review?.classList.add('show');
        }
      };
      const handleScroll5 = () => {
        if (isElementInView(reviewcon)) {
          reviewcon?.classList.add('show');
        }
      };
      const handleScroll6 = () => {
        if (isElementInView(reviewhead)) {
          reviewhead?.classList.add('show');
        }
      };
      const handleScroll7 = () => {
        if (isElementInView(detail)) {
          detail?.classList.add('show');
        }
      };
      const handleScroll8 = () => {
        if (isElementInView(side)) {
          side?.classList.add('show');
        }
      };
      const handleScroll9 = () => {
        if (isElementInView(content3)) {
          content3?.classList.add('show');
        }
      };
      window.addEventListener('scroll', handleScroll1);
      window.addEventListener('scroll', handleScroll2);
      window.addEventListener('scroll', handleScroll3);
      window.addEventListener('scroll', handleScroll4);
      window.addEventListener('scroll', handleScroll5);
      window.addEventListener('scroll', handleScroll6);
      window.addEventListener('scroll', handleScroll7);
      window.addEventListener('scroll', handleScroll8);
      window.addEventListener('scroll', handleScroll9);

      handleScroll1(); // Check initial state
      handleScroll2();
      handleScroll3();
      handleScroll4();
      handleScroll5();
      handleScroll6();
      handleScroll7();
      handleScroll8();
      handleScroll9();
    });
  }
}
