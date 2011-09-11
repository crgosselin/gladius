/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global paladin: false, document: false, window: false, module: false, start,
  test: false, expect: false, ok: false, notEqual: false, stop, QUnit: false */

(function() {

  var engine = null;

  module( 'core/Scene', {
    setup: function () {
      stop();

      paladin.create( { debug: true }, function( instance ) {       
          engine = instance;
          start();
      });
    },

    teardown: function () {
      engine = null;
    }
  });

  test( 'Construction', function () {
    expect( 3 );

    var scene = new engine.Scene();
    ok(
        scene,
        'New scene is constructed.'
    );

    var entity = new scene.Entity();
    ok(
        entity,
        'New entity is constructed.'
    );
    ok(
        entity.manager === scene,
        'Entity manager is the scene.'
    );
  });

}());