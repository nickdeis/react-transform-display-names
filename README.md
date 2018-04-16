# react-transform-display-names

This is a [react-transform](https://github.com/gaearon/babel-plugin-react-transform) that retains display names even after the src has been uglified/mangled.  
This is useful when you need to debug a React application that has been minified using React Devtools.

### Usage

`npm i react-transform-display-names --save-dev`

Add this to your `.babelrc`. 

```js
{
  "presets": [
    "react"
  ],
  "plugins": [
    ["react-transform", {
      "transforms": [{
        "transform": "react-transform-display-names"
      }]
    }]
  ]
}
```

### Limitations

Because of how react-transform works, functional components may not retain their display names.

### Thanks

Special thanks to [pwmckenna](https://github.com/pwmckenna) for creating the start kit [react-transform-noop](https://github.com/pwmckenna/react-transform-noop)