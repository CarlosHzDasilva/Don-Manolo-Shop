import { Item } from '../models/item.model';

describe('Item.Model', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });
});
