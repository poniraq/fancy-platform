const getPlatform = require('os').platform;

/**
 * TODO: Implement more robust solution OR replace with already implemented library
 */

const platform = getPlatform();
const isWindows = platform === 'win32';
const isMacOS = platform === 'darwin';
const isLinux = platform === 'linux';
const isAndroid = platform === 'android';
const isIOS = !isWindows && !isMacOS && !isLinux && !isAndroid;

const PLATFORMS = {
	Windows: isWindows,
	MacOS: isMacOS,
	Linux: isLinux,
	Android: isAndroid,
	iOS: isIOS
};

class Select {
	constructor(types) {
        this._not = false;
		this.types = Array.isArray(types) ? types : [types];
	}

	get not() {
		this._not = !this._not;
		return this;
	}

	_matches() {
		return this.types.some(type => PLATFORMS[type]);
	}

	then(callback) {
		if (this._matches()) {
			callback();
		}

		return this;
	}

	else(callback) {
		if (!this._matches()) {
			callback();
		}

		return this;
	}
}

function SelectFactory(types) {
	return new Select(types);
}

module.exports = {
    is: PLATFORMS,
    if: SelectFactory
};
