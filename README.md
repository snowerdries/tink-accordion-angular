# Tink accordion Angular directive

v1.1.4

## What is this repository for?

The Tink accordion Angular directive gives you the ability to open/close panels.

Tink is an in-house developed easy-to-use front-end framework for quick prototyping and simple deployment of all kinds of websites and apps, keeping a uniform and consistent look and feel.

## Setup

### Prerequisites

* nodeJS [http://nodejs.org/download/](http://nodejs.org/download/)
* bower: `npm install -g bower`

### Install

1. Go to the root of your project and type the following command in your terminal:

   `bower install tink-accordion-angular --save`

2. Add the following files to your project:

   `<link rel="stylesheet" href="bower_components/tink-core/dist/tink.css" />` (or one of the Tink themes)

   `<script src="bower_components/tink-accordion-angular/dist/tink-accordion-angular.js"></script>`

   `<script src="bower_components/tink-api-javascript/dist/tink-api-javascript.js"></script>`

   `<script src="bower_components/tink-api-angular/dist/tink-api-angular.js"></script>`

3. Add `tink.accordion` and `tink.tinkApi` to your app module's dependency.

   `angular.module('myApp', ['tink.accordion', 'tink.tinkApi']);`


----------


## How to use

### tink-accordion

### Component

Wrap `tink-accordion` around at least one `tink-accordion-panel` to get the most basic version of an accordion.

```html
<tink-accordion data-start-open="true">
  <tink-accordion-panel data-heading="Basic accordion"></tink-accordion-panel>
</tink-accordion>
```

### Options

#### Accordion

Attr | Type | Default | Details
--- | --- | --- | ---
data-start-open | `boolean` | `false` | Whether the accordion panels are open on load or not. This can be overriden at the panel level.
data-one-at-a-time | `boolean` | `false` | Whether only one panel can be open at once.

#### Accordion panel

Attr | Type | Default | Details
--- | --- | --- | ---
data-is-collapsed | `boolean` | `false` | Whether the panel is collapsed or not.
data-heading | `string` | `''` | The title of the accordion panel.
data-onclick | `function` | `undefined` | Callback function that will be triggered when the accordion heading is clicked.
data-has-padding | `boolean` | `true` | Whether the panel has padding or not.

> Important! `data-is-collapsed` compares by reference, not value. Make sure it's part of an object that can be referenced.


### tink-accordion with callback function

### Component

###### Accordion code: ######
```html
<tink-accordion>
  <tink-accordion-panel data-heading="Accordion with callback function" data-onclick="openAccordion"></tink-accordion-panel>
</tink-accordion>
```

###### Controller code: ######
```javascript
scope.openAccordion = function(action, next) {
  if (action === 'loading') {
    // Do something here
  }
}
```

### tink-accordion externally triggered

### Component

###### Accordion code: ######
```html
<tink-accordion>
  <tink-accordion-panel data-is-collapsed="accordion.collapsed" data-heading="Externally triggered accordion"></tink-accordion-panel>
</tink-accordion>
```

###### Code to trigger accordion: ######
```html
<button data-ng-click="accordion.collapsed=!accordion.collapsed">
  <span data-ng-if="accordion.collapsed">Open accordion</span>
  <span data-ng-if="!accordion.collapsed">Close accordion</span>
</button>
```

###### Controller code: ######
```javascript
$scope.accordion = {
  collapsed: true
};
```

### tink-accordion with multiple panels

### Component

Place multiple instances of the `tink-accordion-panel` inside a `tink-accordion` wrapper.

###### Accordion code: ######
```html
<tink-accordion data-start-open="false" data-one-at-a-time="true">
  <tink-accordion-panel data-is-collapsed="true" data-heading="First accordion panel">
    <p>Only the first panel should be open.</p>
  </tink-accordion-panel>
  <tink-accordion-panel data-is-collapsed="true" data-heading="Second accordion panel">
    <p>Only the second panel should be open.</p>
  </tink-accordion-panel>
  <tink-accordion-panel data-is-collapsed="true" data-heading="Third accordion panel">
    <p>Only the third panel should be open.</p>
  </tink-accordion-panel>
</tink-accordion>
```

## Contribution guidelines

* If you're not sure, drop us a note
* Fork this repo
* Do your thing
* Create a pull request

## Who do I talk to?

* Jasper Van Proeyen - jasper.vanproeyen@digipolis.be - Lead front-end
* Tom Wuyts - tom.wuyts@digipolis.be - Lead UX
* [The hand](https://www.youtube.com/watch?v=_O-QqC9yM28)

## License

The MIT License (MIT)

Copyright (c) 2014 Stad Antwerpen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
