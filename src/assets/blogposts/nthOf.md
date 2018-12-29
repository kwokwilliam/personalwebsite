# `nth-type-of` vs `nth-child`

If you are using nth-type-of for a table, it may fail some tests. You must use nth-child for this case.

The reason for this is that if you have two charts on the same page, for example, you would want the charts to be identical right? If you use type of, you'll get the output on the left side, because it's on the same page. If you use the child, it's constrained to just be applied on the individual table, so it appears how you want it to.

![nthof vs nthchild](/blogimgs/nthOf/nthOf.png)

---

[< Back to Info tutor hub](/blog/infotutor-home)