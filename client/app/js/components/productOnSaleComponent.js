Vue.component('usersell', {
  props: ['name', 'left', 'lowestprice'],
  template: `
  <div class="marketMainSectionRightItemSellOnlineCurrent">
    <div class="marketMainSectionRightItemSellOnlineCurrentDetail">
      <div class="marketMainSectionRightItemSellOnlineCurrentDetailText">
        <span class="marketMainSectionRightItemSellOnlineCurrentDetailItemName">{{name}}</span>
        <span class="marketMainSectionRightItemSellOnlineCurrentLowestPrice">최저가 {{lowestprice}} KRW</span>
      </div>
      <div class="marketMainSectionRightItemSellOnlineCurrentDetailLeft">
        <span class="marketMainSectionRightItemSellOnlineCurrentDetailLeftTitle">{{left}}개 남음</span>
      </div>
    </div>
  </div>
  `
});