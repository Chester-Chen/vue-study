<template>
  <div class="good-lists">
    <div class="good-item">
      <img src="//gw.alicdn.com/tps/O1CN01OYta872MV6bztXcFh_!!1725149832-0-beehive-scenes.jpg" alt>
      <div class="good-title">温和卸妆水吉林省都放假了多少积都放假林省都放假了多少积都放假林省都放假了多少积都放假了多少积都放假了多少积分</div>
      <div class="good-sell">
        <span class="good-price">￥990</span>
        <span class="good-old-price">999</span>
        <span class="good-sold">已售99999件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="//gw.alicdn.com/tps/TB1vuBuDYPpK1RjSZFFSuu5PpXa.jpg" alt>
      <div class="good-title">温和卸妆水</div>
      <div class="good-sell">
        <span class="good-price">￥600</span>
        <span class="good-old-price">999</span>
        <span class="good-sold">已售99999件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="//gw.alicdn.com/tps/TB16i1NEQzoK1RjSZFlL6Si4VXa_220x10000Q75.jpg_.webp" alt>
      <div class="good-title">温和卸妆水</div>
      <div class="good-sell">
        <span class="good-price">￥600</span>
        <span class="good-old-price">999</span>
        <span class="good-sold">已售99999件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="//gw.alicdn.com/tps/TB1rt_aupkoBKNjSZFkL6T4tFXa_220x10000Q75.jpg_.webp" alt>
      <div class="good-title">温和卸妆水</div>
      <div class="good-sell">
        <span class="good-price">￥600</span>
        <span class="good-old-price">999</span>
        <span class="good-sold">已售99999件</span>
      </div>
    </div>
    <div class="good-item">
      <img src="//gw.alicdn.com/tps/TB19k31DhTpK1RjSZFML6TG_VXa_220x10000Q75.jpg_.webp" alt>
      <div class="good-title">温和卸妆水</div>
      <div class="good-sell">
        <span class="good-price">￥600</span>
        <span class="good-old-price">999</span>
        <span class="good-sold">已售99999件</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.good-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 13px;
  .good-item {
    box-shadow: 1px 1px 8px #ccc;
    border-radius: 10px;
    border: 0px solid #ccc;
    width: 49%;
    height: 267.5px;
    margin: 6px 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .good-title {
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      color: rgb(51, 51, 51);
      text-overflow: ellipsis;
    }
    .good-sell {
        position: relative;

      .good-price {
        color: rgb(163, 60, 250);
        font-size: 16px;
        font-weight: bolder;
      }
      .good-old-price {
        font-size: 11px;
        color: rgb(126, 123, 123);
        text-decoration: line-through;
      }
      .good-sold {
        font-size: 9px;
        color: rgb(126, 123, 123);
        position: absolute;
        right: 3px;
        bottom: 0;
      }
    }
    img {
      width: 140px;
      height: 140px;
    }
  }
}
</style>
