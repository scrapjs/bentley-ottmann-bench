'use strict'

let b = require('nanobench')

let tri = [[0,0], [1,1], [2,-1], [3,0]]
let hourglass = [[-1,1],[1,-1],[-1,-1],[1,1]]



b.skip('bentley-ottman', b => {
	// see https://github.com/ahlusar1989/sweepline/blob/master/test/BentleyOttman.js
	var { RedBlackTree, Point, Polygon, EventQueue, SweepLine } = require('bentley-ottman')

	const geom = hourglass;
	points = geom.map(function (pnt) {
		return new Point(pnt[0], pnt[1]);
	});
	polygon = new Polygon(points);

	b.start()
	assert.ok(!polygon.isSimplePolygon(), "polygon is complex")
	b.end()
})


b('bentley-ottman-sweepline', b => {
	var findIntersections = require('bentley-ottman-sweepline');

	var segments = [
		[[0, 1], [3, 1]],
		[[2, 0], [2, 2]]
	]
	b.start()
	run(()=>findIntersections(segments))
	b.end()

	// prints [[2, 1]]
})

b('polygon-selfintersect', b => {
	var polygonSelfIntersect = require('polygon-selfintersect');

	b.start()
	run(()=>{
		polygonSelfIntersect.findSelfIntersections(hourglass)
		polygonSelfIntersect.getSelfIntersectLines()
	})
	b.end()
})

b('2d-polygon-self-intersections', b => {
	var isects = require('2d-polygon-self-intersections');

	b.start()
	run(()=>isects(hourglass))
	b.end()
})

b('@turf/kinks', b => {
	var kinks = require('@turf/kinks');

	var poly = {
	  "type": "Feature",
	  "geometry": {
	    "type": "Polygon",
	    "coordinates": [hourglass]
	  }
	}

	b.start()
	run(()=>kinks(poly))
	b.end()
})

b('@turf/unkink-polygon', b => {
	var unkink = require('@turf/unkink-polygon');

	var poly = {
	  "type": "Feature",
	  "geometry": {
	    "type": "Polygon",
	    "coordinates": [hourglass]
	  }
	}

	b.start()
	run(()=>unkink(poly))
	b.end()
})

b('simplepolygon', b => {
	var simplepolygon = require('simplepolygon')

	var poly = {
		"type": "Feature",
		"geometry": {
			"type": "Polygon",
			"coordinates": [hourglass]
		}
	};
	b.start()
	run(()=>simplepolygon(poly))
	b.end()
})

b('clean-pslg', b => {
	var clean = require('clean-pslg')

	var points = hourglass.slice()
	var edges = [[0, 1], [1, 2], [2, 3], [3, 0]]

	b.start()
	run(() => clean(points, edges))
	b.end()
})


function run (fn) {
	for (let i = 0; i < 1e4; i++) {
		fn()
	}
}
