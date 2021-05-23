This project is an example for css-snap-feature created with NextJS.

Visit the [live application.](https://snappy.vercel.app)

```scss
.container {
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  .child {
    height: 100vh;
    scroll-snap-align: start;
  }
}
```

### Tech Stack

- NextJS
- SCSS
