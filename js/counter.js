(function(orbium) {
	orbium.Counter = function(count, xnr, ynr) {
		var activeMarbles = null;

		this.construct = function() {
			activeMarbles = 0;

			orbium.Tile.prototype.construct.call(this, "counter0", null, null,
				count, xnr, ynr);
		};

		this.countActiveMarbles = function() {
			var count = 0;

			for (var i=0; i<orbium.machine.marbles.length; i++) {
				if (!orbium.machine.marbles[i].fresh) {
					count++;
				}
			}

			if (count < 4) {
				activeMarbles = count;
			} else {
				activeMarbles = 4;
			}

			this.setImage1("counter"+activeMarbles);
			this.invalidate();
		};

		this.isLaunchAllowed = function() {
			if (activeMarbles < 4) {
				return true;
			}

			return false;
		};

		this.isFallAllowed = function() {
			if (activeMarbles < 3) {
				return true;
			}

			return false;
		};

		this.construct.apply(this, arguments);
	}; orbium.Counter.prototype = new orbium.Tile();
}(window.orbium = window.orbium || {}));