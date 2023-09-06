const COLORS = ['#f00000', '#e34e09', '#f09516', '#b82f11'];

class Particle {
    constructor(x, y) {
        this._x = x;
        this._y = y;

        this._r = Math.floor(Math.random() * 10 + 5);

        this._direction = {
            x: Math.random() * 3 - 1,
            y: Math.random() * 3 - 1
        };

        this._speed = Math.floor(Math.random() * 20 + 10);

        this._c = COLORS[Math.floor(Math.random() * (COLORS.length))];

        this._alive_time = 1000;
    }

    Update(t) {
        this._x += this._direction.x * this._speed * t;
        this._y += this._direction.y * this._speed * t;

        this._r -= 2.5 * t;
    }
}

export { Particle }