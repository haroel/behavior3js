(function() {
  "use strict";

  /**
   * The Sequence node ticks its children sequentially until one of them 
   * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the 
   * success state, the sequence also returns `SUCCESS`.
   *
   * @module b3
   * @class Sequence
   * @extends Composite
  **/
  b3.Sequence = b3.Class(b3.Composite, {

    /**
     * Node name. Default to `Sequence`.
     * @property {String} name
     * @readonly
    **/
    name: 'Sequence',

    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
    **/
    tick: function(tick) {
      for (var i=0; i<this.children.length; i++) {
        var status = this.children[i]._execute(tick);

        if (status !== b3.SUCCESS) {
          return status;
        }
      }

      return b3.SUCCESS;
    }
  });
  
})();