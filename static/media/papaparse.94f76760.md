# Is there any way I can load the `csv` file asynchronously with the file path in my folder?

You will want to use Papa parse's "parse remote file" function that you can see from their documents https://www.papaparse.com/docs

Because it will be a URL accessible by local, and same for when you upload it to gh pages. You would likely want something like this:

```js
Papa.parse('path/to/csv.csv', {
  download: true,
  complete: function(r) {
    console.log(r.data);
  }
});
```

The path to CSV you use will be relative to the HTML file, *not* the JavaScript file. If you encounter some cross origin error in your console, you may need to download this add on to Chrome which allows cross origin (just disable when not in use) https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en&fbclid=IwAR0AravGRDY-ooInmbC8UflfGpEGeLZhr2TCv26ALoTBQsCWEcjzvLRfPiI

---

[< Back to Info tutor hub](/blog/infotutor-home)