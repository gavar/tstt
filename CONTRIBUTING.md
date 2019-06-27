# How to Contribute

## Test
Test are powered by [dtslint](https://github.com/Microsoft/dtslint) provided by [Microsoft](https://github.com/Microsoft)

Test files should be kept in [test](./test) directory organized by the [TypeScript versions](https://github.com/Microsoft/dtslint#specify-a-typescript-version) folder structure.

## Development Workflow
* `yarn lint` - checks the code style.
* `yarn test` - runs the complete test suite.
* `yarn test:watch` - runs an interactive test watcher.

## Git Commit Message Style Guide
Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:
```
<type>@<scope>: <subject>

<body>

<footer>
```
The **header** is mandatory and the **scope** of the header is optional.
Any line of the commit message cannot be longer **100 characters**.

### Type
Must be one of the following:
* **fix**: a bug fix
* **feat**: a new feature
* **docs**: documentation only changes
* **perf**: a code change that improves performance
* **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: a code change that neither fixes a bug nor adds a feature
* **test**: adding missing tests or correcting existing tests
* **build**: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: changes to continuous integration configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)

### Scope
The scope should be the name of the package affected (as perceived by the person reading the changelog generated from commit messages.

Consider using [source code filenames](./src) as scopes:
* [array](./src/array.d.ts)
* [function](./src/function.d.ts)
* [key](./src/key.d.ts)
* [object](./src/object.d.ts)
* [operator](./src/operator.d.ts)
* [predicate](./src/predicate.d.ts)
* [primitive](./src/primitive.d.ts)
* [tuple](./src/tuple.d.ts)

### Subject
The subject contains a succinct description of the change:
* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Body
Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the **what** and **why** of a commit, not the how.

As in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer
Should contain information about
* **breaking changes** 
* [GitHub issues](https://help.github.com/en/articles/closing-issues-using-keywords) that this commit **closes**.

Breaking Changes should start with the word `BREAKING CHANGE`: with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [Angular JS document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y).

### Example Commit Message
```
feat: Summarize changes in around 100 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.
 - Bullet points are okay, too
 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

### References:
[Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide)
[Contributing to Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)
