const tileset_image = require('./images/tileset.png');
const PIXI = require('pixi.js');
const TextureCache = PIXI.utils.TextureCache;
const Rectangle = PIXI.Rectangle;
const Sprite = PIXI.Sprite;
const loader = PIXI.loader;

const ele_width = 64;
//create view
const width = 12;
const height = 10;
let ele = document.createElement('div');
ele.id = 'view';
let left = (window.innerWidth - width * ele_width) / 2
ele.style.marginLeft = left + 'px';
document.body.appendChild(ele);

window.onresize = function() {
    let left = (window.innerWidth - width * ele_width) / 2
    ele.style.marginLeft = left + 'px';
};

//create app
let app = new PIXI.Application();
app.renderer.autoResize = true;
app.renderer.resize(width * ele_width, height * ele_width);
app.renderer.backgroundColor = 0x061639;
document.getElementById('view').appendChild(app.view);

//add image
loader.add(tileset_image).load(setup);

function setup() {
    let texture = TextureCache[tileset_image];
    let x = Math.floor(Math.random() * 5) * ele_width;
    let y = Math.floor(Math.random() * 6) * ele_width;
    let rectangle = new Rectangle(x, y, 64, ele_width);
    //Tell the texture to use that rectangular section
    texture.frame = rectangle;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let rocket = new Sprite(texture);
            rocket.x = i * ele_width;
            rocket.y = j * ele_width;
            app.stage.addChild(rocket);
        }
    }
    app.renderer.render(app.stage);
}

document.getElementById('view').onclick = setup;
