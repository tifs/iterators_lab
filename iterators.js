var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

    each: function (callBack, arr) {
      var arr = [];
      for (var i = 0; i < arr.length; i++) {
        arr[i] + callBack;
      }
    }

    // map: function () {}
    // filter: function () {}


  };

module.exports = iterators;
