
# Table of Contents

1.  [Evil Surround](#orgdee726e)
    1.  [String Example](#org6075268)
    2.  [HTML example](#org0381a25)
    3.  [Deleting](#org6279a7d)


<a id="orgdee726e"></a>

# Evil Surround

Today, I find myself excited about [evil-surround](https://github.com/emacs-evil/evil-surround), an excellent Emacs package
based on [vim-surround](https://github.com/tpope/vim-surround) by [Tim Pope](https://github.com/tpope). And one that's in [Spacemacs](http://spacemacs.org/) (❤️) by default.
It's great for doing edits that have to do with surrounding characters such as:

-   `"` - double quotes
-   `'` - single quotes
-   `[` - brackets
-   `<p>` - tags


<a id="org6075268"></a>

## String Example

Let's say you have a string that looks like this.

    var myString = "This is my string with double quotes.";

But you would rather it be a single-quoted string than a double-quoted one.

    var myString = 'This is my string with double quotes.';

[evil-surround](https://github.com/emacs-evil/evil-surround) to the rescue!

1.  Put your cursor somewhere inside the double quoted string. (`|` is your cursor location.)
    
        var myString = "This is my stri|ng with double quotes.";

2.  Type `cs"'` - That's [c]hang [s]urrounding ["] double quotes to ['] single quotes

3.  Profit (and try to not notice that the contents of the string no longer make
    sense)
    
        var myString = 'This is my stri|ng with double quotes.';

I think my favorite part about this is how minimal the cursor movement is. Your
cursor can be anywhere inside of the double quotes!


<a id="org0381a25"></a>

## HTML example

Oh, and evil-surround is smarter that just changing quotes, it always works with html.

Say you have this HTML.

    <div>
      This is a div, but probably should have been a &lt;p&gt;
    </div>

But you want it to look like this HTML.

    <p>
      This is a div, but probably should have been a &lt;p&gt;
    </p>

1.  Put your cursor somewhere inside the double quoted string. (| is your cursor location)
    
        <div>
          This is a div,| but probably should have been a &lt;p&gt;
        </div>

2.  Type `cst<p>` - That's [c]hange [s]urrounding [t]ag to a [ `<p>` ]aragraph tag.

3.  Profit (and also don't notice that the contents of the tag no longer make
    sense)
    
        <p>
          This is a div,| but probably should have been a &lt;p&gt;
        </p>


<a id="org6279a7d"></a>

## Deleting

The previous examples were all about changing surrounding characters, but
sometimes (especially in html), you want to get rid of surround characters. To
do this, all you need to do is change the first character from [c]hange [d]elete.

1.  Before
    
        <div>
          <div>Turns out I |don't (for whatever reason) need this inner div anymore.</div>
        </div>

2.  `dst` - [d]elete [s]urrounding [t]ag
    
        <div>
          Turns out I |don't (for whatever reason) need this inner div anymore.
        </div>

