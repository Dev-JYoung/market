const app = new Vue({
  el: '#app',
  data: {
    usermoney: 100000000,
    sellTest: TEST,
    currentSale: CURRENTSALE,
    productcompare: PRODUCTCOMPARE,
    itemInfo: [],
    sellMod: false,
    userName: "오뜨",
    registeredItem: "1",
    visible: false,
  },
  methods: {
    UPDATE: function (data) {
      Object.keys(data).map((key) => {
        this[key] = data[key];
      });
    },
    SET_MOD: function() {
      if(this.sellMod === true) {
        this.sellMod = false;         
      } else if(this.sellMod === false) {
        this.sellMod = true;
      }
    },
    CLOSE: function() {
      this.visible = false;
    }
  }
});
