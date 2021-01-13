class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgiedBrie extends Item {
  constructor(sellIn, quality){
    super('Aged Brie', sellIn, quality)
  }
  updateQuality(){
    if(this.quality < 50){
      this.quality += 1;
    }
    if(this.sellIn < 0){
      this.quality += 1;
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
    this.BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
    this.AGIED_BRIE = "Agied Brie";
    this.SULFURAS = "Sulfuras, Hand of Ragnaros";
  }

  changeQualityOf(item, value = 1) {
    if (item.quality < 50) item.quality += value;
  }

  changeSellInOf(item) {
    if (item.name !== this.SULFURAS) {
      item.sellIn -= 1;
    }
  }

  updateQuality() {
    this.items.forEach((item) => {
      const name = item.name;

      if(name == this.AGIED_BRIE){
        item.updateQuality();
      }
      
      if (
        ![this.AGIED_BRIE, this.BACKSTAGE_PASSES, this.SULFURAS].includes(name) &&
        item.quality > 0
      ) {
        this.changeQualityOf(item, -1);
      } else {
        if(name !== this.AGIED_BRIE){
          this.changeQualityOf(item);
        }
        if (name === this.BACKSTAGE_PASSES) {
          if (item.sellIn < 6) {
            this.changeQualityOf(item, 2);
          } else if (item.sellIn < 11) {
            this.changeQualityOf(item);
          }
        }
      }
      
      this.changeSellInOf(item);

      if (item.sellIn < 0) {
        if (name != this.AGIED_BRIE) {
          if (name != this.BACKSTAGE_PASSES) {
            if (item.quality > 0 && name != this.SULFURAS) {
              this.changeQualityOf(item, -1);
            }
          } else {
            item.quality = 0;
          }
        } else {
          // this.changeQualityOf(item);
        }
      }
      
    });

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
  AgiedBrie
};
