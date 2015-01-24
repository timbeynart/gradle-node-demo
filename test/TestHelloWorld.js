/**
 * Created by Tim on 1/7/15.
 */
var helloworld = {};

QUnit.testStart(function (details) {
    console.log("[TestHelloWorld] start: " + details.name);
    helloworld = new Hello.World();
});
QUnit.testDone(function (details) {
    console.log("[TestHelloWorld] finished: " + details.name);
    helloworld = null;
});
QUnit.test("FAKE TEST", function (assert) {
    assert.equal(1, true, "Karma & QUnit work.");
});
QUnit.test("TEST boringUnitTestDemo", function (assert) {
    var value = helloworld.boringUnitTestDemo("foo.");
    assert.equal(value, "foo.", "Hello World!");
});
