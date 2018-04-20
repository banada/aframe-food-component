## aframe-food-component

[![Version](http://img.shields.io/npm/v/aframe-food-component.svg?style=flat-square)](https://npmjs.org/package/aframe-food-component)
[![License](http://img.shields.io/npm/l/aframe-food-component.svg?style=flat-square)](https://npmjs.org/package/aframe-food-component)

![](food_original.jpg) ![](food_vr.jpg)

Turn any picture of food into a 3D object for [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|   src    |    image    |     null      |

### Usage

```html
<a-entity food src="yourfoodpicture.jpg"></a-entity>
```

You can crop an image for use with this component using [this tool](https://banada.github.io/webvr/aframe-food-component).

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-food-component/dist/aframe-food-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity food src="yourfoodpicture.jpg"></a-entity>
  </a-scene>
</body>
```

