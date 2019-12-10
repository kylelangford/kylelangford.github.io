# Handlebar Helpers

underlying instance of handlebar is not initialy available.

```js
var Handlebars = require('handlebars');
```

## Handlebar Helpers

https://handlebarsjs.com/guide/builtin-helpers.html

## if

```
<div class="entry">
{{#if author}}
<h1>{{firstName}} {{lastName}}</h1>
{{/if}}
</div>
```

## unless

## each

## with

## lookup

## log

```
{{log 'this is a simple log output'}}
```

Included:

## Panini Handlebar Helpers

https://get.foundation/sites/docs/panini.html#custom-helpers

Helpers are special functions that manipulate content on the page. In addition to Handlebars's built-in helpers, Panini includes a few custom helpers and you can add your own.

Included:

##ifequal
Displays the HTML inside the helper if the two values are equal.

```
{{#ifequal foo bar}}

  <p>foo and bar are equal</p>
{{else}}
  <p>foo and bar are not equal}}
{{/ifequal}}
```

##ifpage
Displays the HTML inside the helper only on specific pages. In the below example, the HTML inside the helper will only show up on the index.html page.

```
{{#ifpage 'index'}}

  <p>This is definitely the Index page.</p>
{{/ifpage}}
```

You can also check for multiple pages. If any name in the list matches the current page, the HTML will appear.

```
{{#ifpage 'index' 'about'}}

  <p>This is definitely either the Index or About page.</p>
{{/ifpage}}
```

##unlesspage
The opposite of #ifpage, #unlesspage will only display the HTML inside of it if the current page is not in the parameters.

```
{{#unlesspage 'index'}}

  <p>This is definitely <em>not</em> the Index page.</p>
{{/unlesspage}}
```

##repeat
Repeats the content inside of it n number of times. Use this to easily print lots of duplicate HTML in a prototype.

```html
<ul>
	{{#repeat 5}}
	<li>Five hundred ninety-nine US dollars</li>
	{{/repeat}}
</ul>
```

markdown
Converts Markdown into HTML.

```md
{{#markdown}}

# Heading 1

Lorem ipsum [dolor sit amet](https://example.com), consectetur adipisicing elit. Nam dolor, perferendis. Mollitia aut dolorum, est amet libero eos ad facere pariatur, ullam dolorem similique fugit, debitis impedit, eligendi officiis dolores.
{{/markdown}}
```
