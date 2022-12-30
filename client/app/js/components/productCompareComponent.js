Vue.component('compare', {
  props: ['playername','lowestprice','playerid','price', 'productleft', 'lowpricecurrent'],
  template: `
  <div class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetail">
    <div class="marketMainSectionRightItemsSellOnlinePurchaseNotLow" v-if='!lowpricecurrent'>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailSeller">{{playername}}({{playerid}})</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailPrice">{{price}}</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailLeft">{{productleft}}개 남음</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailBuy">구매하기</span>
    </div>
    <div class="marketMainSectionRightItemsSellOnlinePurchaseLow" v-if='lowpricecurrent'>
    <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailNoticeLowest">최저가</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailSeller">{{playername}}({{playerid}})</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailPrice">{{price}}</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailLeft">{{productleft}}개 남음</span>
      <span class="marketMainSectionRightItemSellOnlinePurchaseItemStatusDetailBuy">구매하기</span>
    </div>
  </div>
  `
});