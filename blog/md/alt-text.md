#data-attr

in pseudo elements,

```html
<span class="icon" data-alt="Tooltip">Example</span>
```

```scss
.element {
	&:before {
		content: attr(data-alt);
	}
}
```

```scss
.element:before {
	content: attr(data-alt);
}
```

tooltips/alt text for none images, add some JS to enhance

https://css-tricks.com/css-attr-function-got-nothin-custom-properties/
