---
title: Evil Surround
date: "2018-09-02T23:40:00.000Z"
---

Today, I find myself excited about [evil-surround], an excellent Emacs package
based on [vim-surround] by [Tim Pope]. And one that's in [Spacemacs] (❤️) by
default. It's great for doing edits that have to do with surrounding characters
such as:

-   `"double quotes"`
-   `'single quotes'`
-   `[brackets]`
-   `<p>tags</p>`

## String Example

Let's say you have a string that looks like this.

```javascript
var myString = "This is my string with double quotes.";
```

But you would rather it be a single-quoted string than a double-quoted one.

```javascript
var myString = 'This is my string with double quotes.';
```

[evil-surround] to the rescue!

1.  Put your cursor somewhere inside the double quoted string. (`|` is your
    cursor location.)

    ```javascript
    var myString = "This is my stri|ng with double quotes.";
    ```

1.  Type `cs"'` - That's [c]hang [s]urrounding ["] double quotes to ['] single
    quotes

1.  Profit (and try to not notice that the contents of the string no longer make
    sense)
    
    ```javascript
    var myString = 'This is my stri|ng with double quotes.';
    ```

I think my favorite part about this is how minimal the cursor movement is. Your
cursor can be anywhere inside of the double quotes!


## HTML example

evil-surround can do more than just changing quotes, it always works with html.

Say you have this HTML.

```html
<div>
  This is a div, but probably should have been a &lt;p&gt;
</div>
```


But you want it to look like this HTML.

```html
<p>
  This is a div, but probably should have been a &lt;p&gt;
</p>
```

1.  Put your cursor somewhere inside the double quoted string. (| is your cursor
    location)
    
    ```html
    <div>
      This is a div,| but probably should have been a &lt;p&gt;
    </div>
    ```

1.  Type `cst<p>` - That's [c]hange [s]urrounding [t]ag to a [ `<p>` ]aragraph
    tag.

3.  Profit (and also don't notice that the contents of the tag no longer make
    sense)
    
    ```html
    <p>
      This is a div,| but probably should have been a &lt;p&gt;
    </p>
    ```

## Deleting

The previous examples were all about changing surrounding characters, but
sometimes (especially in html), you want to get rid of surround characters. To
do this, all you need to do is change the first character from [c]hange
[d]elete.

1.  Before
    
    ```html
    <div>
      <div>Turns out I |don't (for whatever reason) need this inner div anymore.</div>
    </div>
    ```

2.  `dst` - [d]elete [s]urrounding [t]ag
    
    ```html
    <div>
      Turns out I |don't (for whatever reason) need this inner div anymore.
    </div>
    ```

[evil-surround]: https://github.com/emacs-evil/evil-surround
[vim-surround]: https://github.com/tpope/vim-surround
[Tim Pope]: https://github.com/tpope
[Spacemacs]: http://spacemacs.org/

