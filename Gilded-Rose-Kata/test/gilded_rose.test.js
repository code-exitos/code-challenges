const {Shop, Item} = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

describe("Gilded Rose", function() {
  let shop;
  beforeEach(() => {
    shop = new Shop(items)
  })
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it('should decrease the quality for Aged Brie', () => {
    const updatedItems = shop.updateQuality();
    const agedBrie = updatedItems.find(item => item.name === 'Aged Brie')
    expect(agedBrie.quality).toBe(1)
  });

  it('should not decrease the quality for Sulfuras', () => {
    const updatedItems = shop.updateQuality();
    expect(updatedItems[3].quality).toBe(80)
    expect(updatedItems[4].quality).toBe(80)
  });

  it('should increase the quality for Backstage passes to a TAFKAL80ETC concert', () => {
    const updatedItems = shop.updateQuality();
    expect(updatedItems[5].quality).toBe(23);
    expect(updatedItems[6].quality).toBe(50);
    expect(updatedItems[7].quality).toBe(50);
  });

});

