export default class Sparkles {
    constructor() {
    }

    init(THREE, container, width, height, num) {
        this.spriteMaterial = new THREE.SpriteMaterial({
            map: new THREE.TextureLoader().load(
                `${window.sparkleGlow}`
            ),
            color: 0xffff00,
            blending: THREE.AdditiveBlending
        });

        this.sparkleGeometry = new THREE.SphereBufferGeometry(0.001, 5, 5);
        this.sparkleMaterial = new THREE.MeshBasicMaterial({
            color: 0xfef307
        });
        this.makeSparkles(THREE, container, width, height, num);
    }

    makeSparkles(THREE, container, width, height, num) {
        for (let i = 0; i < num; i++) {
            let sparkle = new THREE.Mesh(this.sparkleGeometry, this.sparkleMaterial);
            sparkle.position.x = this.randomNumber() * width - (width / 2);
            sparkle.position.y = 0.1 * this.randomNumber();
            sparkle.position.z = this.randomNumber() * height - (height / 2);
            let sprite = new THREE.Sprite(this.spriteMaterial);
            sprite.scale.set(0.004, 0.004, 0.004);
            sparkle.add(sprite);
            sparkle.name = "sparkle";
            let num = 0;

            this.moveSparkle(sparkle, num, this.randomNumber() / 10);

            container.add(sparkle);
        }
    }

    moveSparkle(sparkle, num, increaser) {
        sparkle.position.z =
            sparkle.position.z + Math.sin(num * 0.5) / (600 + increaser * 10);
        sparkle.position.y =
            sparkle.position.y + Math.sin(num) / (8000 + increaser * 10);
        sparkle.position.x =
            sparkle.position.x + Math.sin(num) / (600 + increaser * 10);
        sparkle.scale.x = Math.sin(num) + 0.0005;
        sparkle.scale.z = Math.sin(num) + 0.0005;
        sparkle.scale.y = Math.sin(num) + 0.0005;
        num = num + increaser;

        requestAnimationFrame(() => this.moveSparkle(sparkle, num, increaser));
    }

    randomNumber() {
        return Math.random().toFixed(5);
    }
}
