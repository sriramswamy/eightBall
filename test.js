'use strict';

var eightBall = require('./');
var assert = require('assert');

describe('eightBall', function() {
	it('should return a random prediction', function() {
		assert.equal(true, eightBall().length > 0)
	})

	it('should return all predictions', function() {
		assert(true, Array.isArray(eightBall.words));
		assert(true, eightBall.predictions[2].length > 0)
	})	
});