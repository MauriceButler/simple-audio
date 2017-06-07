# simple-audio

Small Module to play audio using HTML audio tag

Also addresses the Chrome for Andriod issue [178297](https://code.google.com/p/chromium/issues/detail?id=178297)

## Usage

#### HTML

``` html
<audio class="foo">
    <source src="foo.mp3"></source>
    <source src="foo.wav"></source>
    <source src="foo.ogg"></source>
</audio>
```

#### JavaScript

``` javascript
var audio = require('simple-audio');
audio.playSound('foo');
```
