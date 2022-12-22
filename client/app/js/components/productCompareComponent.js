Vue.component('compare', {
  props: ['playername','lowestprice','playerid','price', 'productleft', 'lowpricecurrent'],
  template: `
  <div class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetail">
    <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailSeller">{{playername}}({{playerid}})</span>
    <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailPrice">{{price}}</span>
    <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailLeft">{{productleft}}개 남음</span>
    <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailBuy">구매하기</span>
  </div>
  `
});