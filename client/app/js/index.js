const app = new Vue({
  el: '#app',
  data: {
    usermoney: 100000000,
    sellTest: TEST,
    currentSale: [],
    productcompare: PRODUCTCOMPARE,
    itemInfo: [],
    sellMod: false,
    userName: "이즈",
    registeredItem: "1",
    visible: false,
  },
  methods: {
    UPDATE: function (data) {
      Object.keys(data).map((key) => {
        this[key] = data[key];
      });
    },
    ADD_ITEM_LIST: function(data) {
      console.log(data)
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
      fetch('https://market/close', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({}),
      });
    }
  },
  created: function() {
    window.addEventListener('keydown', (event) => {
      if (event.key.toUpperCase() === 'ESCAPE'){
        this.CLOSE();
      }
    })

    window.addEventListener('message', (event) => {
      const { data } = event;
      if (!data.type) {
        return
      }

      (async () => {
        this[data.type](data.data)
      })();
    });
  },
});
