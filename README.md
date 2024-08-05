# Frontend Mentor - FAQ Accordion Solution 🎉

This is my solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents 📑

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview 🌟

### The Challenge 🎯

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot 📸

#### Desktop Preview
![](./Preview/Screenshot%20(45).png)

#### Desktop active-states preview
![](./Preview/Screenshot%20(46).png)

#### Mobile Preview
![](./Preview/mobile-design.jpg)

*Add your screenshot here. You can use Firefox to capture a full-page screenshot or a tool like [FireShot](https://getfireshot.com/).*

### Links 🔗

- Solution URL: [Front-end mentor](https://your-solution-url.com)
- Live Site URL: [FAQ accordion](https://faq-red.vercel.app/)

## My Process 🛠️

### Built With 🧰

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow
- Accessibility considerations

### What I Learned 📚

During this project, I deepened my understanding of creating accessible and interactive components. Here are some key learnings:

```html
<button class="accordion-header" aria-expanded="false">
  <span class="accordion-title">Is Frontend Mentor free?</span>
  <img src="./assets/images/icon-plus.svg" alt="Expand" class="accordion-icon">
</button>
```

```css
.accordion-header[aria-expanded="true"] .accordion-icon {
  transform: rotate(45deg);
}
```

```js
function toggleAccordion() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  // ... more code
}
```

### Continued Development 🚀

Moving forward, I plan to focus on:

- Enhancing my skills in creating more complex JavaScript interactions
- Deepening my understanding of web accessibility standards
- Exploring CSS animations to create smoother transitions

### Useful Resources 📚

- [MDN Web Docs](https://developer.mozilla.org/) - An invaluable resource for web developers, providing comprehensive documentation on HTML, CSS, and JavaScript.
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - Excellent guidelines for creating accessible web content.

## Author 👨‍💻

- Website - [Abdullah](https://social-links-profile-rose-mu.vercel.app/)
- LinkedIn - [Adullah](https://www.linkedin.com/in/abdullah-a-2940b7260/)
- Frontend Mentor - [@Ayyubiy90](https://www.frontendmentor.io/profile/Ayyubiy90)
- Twitter - [Abdullah](https://www.twitter.com/ayyubiy10)
- Instagram - [Abdullah](https://www.instagram.com/ayyubiy_10)

## Acknowledgments 🙏

A special thank you to Frontend Mentor for providing this challenge. I also appreciate the community for their inspiration and support!