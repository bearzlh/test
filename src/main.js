require("./index.css");
const chrom_image = require('./chrom.png');
const tileset_image = require('./images/tileset.png');
const PIXI = require('pixi.js');
const TextureCache = PIXI.utils.TextureCache;
const Rectangle = PIXI.Rectangle;
const Sprite = PIXI.Sprite;
const loader = PIXI.loader;
let app = new PIXI.Application();
document.body.appendChild(app.view);
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.backgroundColor = 0xaaaaaa;
app.renderer.resize(window.innerWidth, window.innerHeight);
const chrom = new PIXI.Sprite.fromImage(chrom_image);
app.stage.addChild(chrom);
chrom.anchor.x = 0.5;
chrom.anchor.y = 0.5;
chrom.x = 100;
chrom.y = 100;
loader.add(tileset_image).load(setup);

function setup() {
    let texture = TextureCache[tileset_image];
    let x = (Math.ceil(Math.random() * 5) - 1) * 64;
    let y = (Math.ceil(Math.random() * 6) - 1) * 64;
    let rectangle = new Rectangle(x, y, 64, 64);
    //Tell the texture to use that rectangular section
    texture.frame = rectangle;
    let rocket = new Sprite(texture);
    app.stage.addChild(rocket);
    app.renderer.render(app.stage);
}
window.document.body.onclick = function() {
    //chrom.scale.x = Math.random();
    //chrom.scale.y = Math.random();
    //chrom.visible = !chrom.visible;
    //chrom.rotation += 0.2
    //chrom.x = Math.random() * window.innerWidth;
    //chrom.y = Math.random() * window.innerHeight;
    app.stage.removeChild();
    setup();
};
