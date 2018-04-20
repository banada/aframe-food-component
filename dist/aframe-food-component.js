(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /* global AFRAME */

  if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
  }

  /**
   * A-Frame Food Component component for A-Frame.
   */
  AFRAME.registerComponent('food', {
    schema: {
    },

    /**
     * Set if component needs multiple instancing.
     */
    multiple: false,

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () {
      let self = this;

      let cylinder = document.createElement('a-cylinder');
      cylinder.setAttribute('radius', '0.18');
      cylinder.setAttribute('height', '0.01');
      cylinder.setAttribute('src', self.el.getAttribute('src'));
      cylinder.setAttribute('position', '0 0.15 0');

      let bowl = document.createElement('a-obj-model');
      bowl.setAttribute('src', 'https://unpkg.com/aframe-food-component/bowl.obj');
      bowl.setAttribute('mtl', 'https://unpkg.com/aframe-food-component/bowl.mtl');
      bowl.setAttribute('scale', '0.0062 0.0062 0.0062');

      self.el.appendChild(cylinder);
      self.el.appendChild(bowl);
    },

    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     */
    update: function (oldData) { },

    /**
     * Called when a component is removed (e.g., via removeAttribute).
     * Generally undoes all modifications to the entity.
     */
    remove: function () { },

    /**
     * Called on each scene tick.
     */
    // tick: function (t) { },

    /**
     * Called when entity pauses.
     * Use to stop or remove any dynamic or background behavior such as events.
     */
    pause: function () { },

    /**
     * Called when entity resumes.
     * Use to continue or add any dynamic or background behavior such as events.
     */
    play: function () { }
  });

})));
