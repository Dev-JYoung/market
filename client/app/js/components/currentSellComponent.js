Vue.component('sell', {
  props: ['name', 'price', 'left', 'time'],
  template: `
  <div class="marketMainSectionLeftSellListDetail">
    <span class="marketMainSectionLeftSellListDetailItemName">{{name}}</span>
    <span class="marketMainSectionLeftSellListDetailPrice">{{price}}</span>
    <span class="marketMainSectionLeftSellListDetailLeft">{{left}}</span>
    <span class="marketMainSectionLeftSellListDetailUntilErase">{{time}}</span>
  </div>
  `
});