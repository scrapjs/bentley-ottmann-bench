# Self intersection polygon benchmark

Packages being tested

* [bentley-ottman-sweepline](https://npmjs.org/package/bentley-ottman-sweepline)
* [polygon-selfintersect](https://npmjs.org/package/polygon-selfintersect)
* [2d-polygon-self-intersections](https://npmjs.org/package/2d-polygon-self-intersections)
* [@turf/kinks](https://npmjs.org/package/@turf/kinks)
* [@turf/unkink-polygon](https://npmjs.org/package/@turf/unkink-polygon)
* [simplepolygon](https://npmjs.org/package/simplepolygon)
* [clean-pslg](https://npmjs.org/package/clean-pslg)

```
# bentley-ottman-sweepline
ok ~234 ms (0 s + 234100000 ns)

# polygon-selfintersect
ok ~40 ms (0 s + 40100000 ns)

# 2d-polygon-self-intersections
ok ~115 ms (0 s + 115200000 ns)

# @turf/kinks
ok ~25 ms (0 s + 24900000 ns)

# @turf/unkink-polygon
ok ~476 ms (0 s + 475800000 ns)

# simplepolygon
ok ~600 ms (0 s + 600000001 ns)

# clean-pslg
ok ~1.62 s (1 s + 616800000 ns)
```
