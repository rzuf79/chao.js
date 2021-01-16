# chao.js
![Easier than opening a boutique](https://i.imgur.com/3S5f9TE.png "")

chao.js

aka

Taking things I like from other game frameworks and throwing them into an entity-component flavored goulash.

Mind that it's not something I intend to be used by anyone but myself. This framework is a result of lots and lots of questionable habits I developed over the many years of making games.


# Goals

- small, with no extra dependencies
- no need for a http server, just launch the html file locally in your browser
- modular, easily extendable via simple components system
- no modern html5 apis (like for the audio, we're still rocking the good old api!)
- the whole framework code with some core components in a single file
- at some point make a native wrapper for chao.js games with somehing like Duktape.

***

# Credits

Other people's work I was inspired by or just stole some code from.

Seth Robinson's [Proton SDK](http://www.rtsoft.com/wiki/doku.php?id=proton) - blew my mind back when it was released. And it's still awesome!

Sos Sosowki's [allegro.js](https://github.com/TheSos/allegrojs), from which I shamelessly took most of the core code - images loading and manipulation or keyboard and mouse input among many other things.

Rex van der Spuy's [ga.js](https://github.com/kittykatattack/ga) - some input, audio and viewport scaling code is stolen from this guy's framework.

Photonstorm's [Phaser](https://github.com/photonstorm/phaser) - took the Visibility Handler from there and possibly some other minor things I don't remember.

