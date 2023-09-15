# Fit text

[fit.js](fit.js) will downsize a text to fit on one line within its container (within limits).

## Use case

The primary (and likely only) use case is for translated content where truncation isn't applicable. You may have a CTA or title where you'd prefer the text to be on one line, but of course the text content varies with each translation.

## Just use CSS?
For one-offs or a few specific texts, you could instead use CSS with locale-specific selectors and specify a font-size for each translation as needed (e.g. `*[lang='fr'] #signup-cta {font-size: 80%}`). If that works for you, great!

However, when your content and their translations are subject to change, you may need something a little more dynamic.

## Usage
1. Include the script in your project.
2. Add the `fit-text` class to any elements whose texts need to fit.

See [index.html](index.html) for an example.