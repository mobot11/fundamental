---
title: Developers
keywords: getting started
sidebar: left-navigation-sidebar
toc: false
permalink: getting-started-developers.html
folder: fundamentals
summary: This is an in-development, beta version. Refer to the Fundamental website for details about the current version.
---

<hr>

<h2 class="docs-header-h2">Getting Started</h2>

<h3 class="docs-header-h3">CDN</h3>

<p>Latest minified file is Available via CDN below</p>

```
https://unpkg.com/fundamental-ui@{{site.library_version}}/dist/fundamental-ui.min.css
```

<h3 class="docs-header-h3">NPM</h3>
Install the library.

````
npm install fundamental-ui --save
````
<h3 class="docs-header-h3">Bundle</h3>
Install Bundle dependencies from `docs` directory

````
cd docs
bundle install
````

<h3 class="docs-header-h3">Usage</h3>
Include the full library.

```html
<link href="node_modules/fundamental-ui/dist/fundamental-ui.min.css" rel="stylesheet" />
```

<h3 class="docs-header-h3">Stand alone components</h3>
The components can be used without loading the whole library. 

```
/dist/components/
```

For example, to use only the cards
```html
<link href="node_modules/fundamental-ui/dist/components/card.min.css" rel="stylesheet" />
````

<hr>

<h2 class="docs-header-h2">The project</h2>
Techne 2.0 is a design system and pattern library package. This project packages the library for `npm` and generates the documentation as a static website.

We rely on several core technologies.

* [Node](https://nodejs.org/) (minimum v6.4)
* [Gulp](https://gulpjs.com/)
* Sass
* Nunjucks
* Ruby
* Bundle
* Jekyll

<h3 class="docs-header-h3">Install Gulp</h3>
In addition to Node, you must have Gulp installed globally:

`npm install -g gulp`

<h3 class="docs-header-h3">Install Gems</h3>
The following gems needs to be installed for the documentation site generation

`gem install ruby bundle jekyll`

<h3 class="docs-header-h3">Install dev dependencies</h3>

`npm install`

<h3 class="docs-header-h3">Serve it locally</h3>
The documentation website is served from the `docs/_site` directory which is generated by Jekyll. To generate and lunch the documentation site, simply execute the gulp command in terminal at the root of project directory.

`gulp`

<h3 class="docs-header-h3">Troubleshooting</h3>
Please refer to the [Troubleshooting guide](https://github.com/SAP/techne/wiki/Troubleshooting-&-Known-Issues) if you are having issues with the setup.

<hr>

<h2 class="docs-header-h2">Contributing</h2>
New branches should include the type (feature, bug, or hotfix) and the issue number or release number.

```
git checkout -b feature/000
git checkout -b bug/000
git checkout -b hotfix/000
```

Create a pull request against branch  v2.0  and assign it for review.

When accepted, the reviewer will merge and delete the branch.