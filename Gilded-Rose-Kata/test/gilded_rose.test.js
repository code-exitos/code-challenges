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

  it("should create an Shop with Items  ", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it('should increase the quality for Aged Brie', () => {
    const updatedItems = shop.updateQuality();
    expect(updatedItems[1].quality).toBe(1)
  });

  it('should increase the quality twice fast for Aged Brie when sellIn in below 0', () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5)
  });

  it('should not decrease the quality for Sulfuras', () => {
    const updatedItems = shop.updateQuality();
    expect(updatedItems[3].quality).toBe(80)
    expect(updatedItems[4].quality).toBe(80)
  });

  it('should increase the quality for Backstage passes in two if sellDay is between 10 and 6 but quality should never be more than 50', () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 15),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(17);
    expect(updatedItems[1].quality).toBe(50);
    expect(updatedItems[2].quality).toBe(22);
  });

  it('should increase the quality for Backstage passes in three if sellDay is between 5 and 0 but quality should never be more than 50', () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(18);
    expect(updatedItems[1].quality).toBe(50);
    expect(updatedItems[2].quality).toBe(23);
  });

  it('should decrease the quality for Backstage passes to 0 if sellDay is lower than 0', () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 49),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
    expect(updatedItems[1].quality).toBe(0);
  });

  it('should decrase twice fast the quality after the seling day', () => {
    const items = [
      new Item("Elixir of the Mongoose", -1, 8),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(6);
  });

});

