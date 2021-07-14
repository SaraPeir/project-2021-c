import loadable from "@loadable/component";

// Countdown component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

export default loadable(() =>
  // When import() is used Webpack creates a new chunk for the imported code, splitting it from the main bundle.
  // (https://medium.com/swlh/an-introduction-to-webpack-code-splitting-loadable-component-and-resource-hints-f0c3a3e45ce4)
  import(/* webpackChunkName: "async_countdown" */ "./Countdown"),
  {ssr: true}
);