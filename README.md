# Fit text

[fit.js](fit.js) will downsize a text to fit on one line within its container (within limits).

## Use case

The primary (and likely only) use case is for translated content where truncation isn't applicable. You may have a CTA where you'd prefer the text to be on one line, but the translation can be much longer than the original.

## Just use CSS?
For a few specific texts, you could instead use CSS with locale-specific selectors to adjust the font-size as needed (e.g. `*[lang='fr'] #signup-cta {font-size: 80%}`). If that works for you, great!

However, when your content and translations are subject to change, you may need something more dynamic.

## Usage
1. Include the script in your project.
2. Add the `fit-text` class to any elements whose texts need to fit.

See [index.html](index.html) for an example.