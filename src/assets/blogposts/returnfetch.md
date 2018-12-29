# Returning a fetch

A lot of people ran into issues failing the test. The main error is that the function that has `fetch` in it needs to _return_ the `fetch`. This is done by just doing `return fetch.then(...)`. This is not *necessary* to do normally unless you are gung ho about testing, but the thing is that we need this for testing purposes. People may often do this in their own code too.

This is because we are doing what is known as some form of "dependency injection" and "function mocking" in unit testing. We wouldn't want to make over 40 calls to a real itunes endpoint when we're running the tests. Just imagine if a company had their entire team of programmers run their unit tests and called over 20000 real API endpoints, the servers would take a massive hit. Along with that, the server could be down for maintenance and you'll fail the tests just because of that! To counterract this, we use a *fake* `fetch` function in the jest test, that you can actually take a look at-- you'll notice that we use a package that helps us called `fetch-mock`. Jest has a variety of ways to create fake mock functions like this. So now we are testing with fake data that is created _locally_ instead of calling real endpoints.

You also need to return a fetch/promise if you want to use firebase cloud functions.

---

[< Back to Info tutor hub](/blog/infotutor-home)