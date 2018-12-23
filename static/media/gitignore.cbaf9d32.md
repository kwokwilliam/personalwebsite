# Git ignore

Git ignoring will make it so files that are specified will not be pushed to the git repository. They will never be included within staging or committing. You will be able to see what files are currently ignored by opening up a hidden `.gitignore` file. 

> Note: You will want to make sure you can see hidden files and folders. You can see these in your command prompt with `ls -a`. You can also see these in Finder/Explorer by following these instructions: 
>
> Mac: https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/
>
> Windows: https://support.microsoft.com/en-us/help/4028316/windows-view-hidden-files-and-folders-in-windows-10

You can ignore single files or entire folders. Here is an example of what a git ignore file might look like.

```bash
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## Why?

Why does something like this exist? For one, it can be used for secret keys that you don't want to share. For example, external APIs often have an API key associated with them. You might not want to share this key with *anyone*. You would put this key inside another file and then access that file through a different file.

### An example in R:

Git ignored file: config.R
```r
APIKey <- "secret_key_insert_here_123"
```

Other file:
```r
source("config.R")

print(APIKey)
```

### An example in JavaScript ES6 with Babel/React:

Git ignored file: Config.js
```js
const ApiKey = "secret_key_insert_here_123";
export default ApiKey; // or "export {ApiKey}"
```

Other file:
```js
import ApiKey from "./Config"; // or "import {ApiKey} fro..."
console.log(ApiKey);
```

### An example in vanilla JavaScript:

Git ignored file: Config.js
```js
const ApiKey = "secret_key_insert_here_123";
module.exports = ApiKey; // or "module.exports = {ApiKey};
```

Other file:
```js
const ApiKey = require("./Config");
console.log(ApiKey);
```



---

[< Back to Info tutor hub](/blog/infotutor-home)