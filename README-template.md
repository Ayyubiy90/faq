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
![](./screenshot.jpg)

#### Desktop active-states preview


#### Mobile Preview
![](./Preview/mobile-design.jpg)

*Add your screenshot here. You can use Firefox to capture a full-page screenshot or a tool like [FireShot](https://getfireshot.com/).*

### Links 🔗

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments 🙏

I'd like to thank Frontend Mentor for providing this challenge and the supportive community for their feedback and encouragement.