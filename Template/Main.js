chao.init(640, 480, chao.SCALING_MODE_NONE, "canvas");
chao.backgroundColor = "#000000";
chao.setImagesSmoothing(false);

// ----- Them assets
chao.loadImage("sticker", "assets/images/sticker.png");

// -----

chao.switchState(new StateGame());