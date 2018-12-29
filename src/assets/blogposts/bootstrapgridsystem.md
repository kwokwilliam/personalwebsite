# Understanding Bootstrap's Grid System

I know a lot of you might be struggling a bit with how the grid system in bootstrap might work. Just imagine as if your HTML is a whole big table, similar to tr and td elements from that one music assignment. Now imagine putting a table inside a table-- that is similar to what you can do with the bootstrap grid system!

```xml
<container>
    <row>
        <col>
            <container_with_stuff_inside/>
        </col>
        <col>
            <container_with_stuff_inside/>
        </col>
    </row>
</container>
```

This is generally what the grid system will end up looking like, using psuedo html. The container with stuff inside can have a new set of rows and columns itself-- imagine a single 'cell' is it's own separate grid! Something like this gif but rotated 45 degrees. https://i.gifer.com/OgSz.gif

Hope this helps!

PS something like the above is actually what later on the React-Flexbox-Grid library looks like!

---

[< Back to Info tutor hub](/blog/infotutor-home)