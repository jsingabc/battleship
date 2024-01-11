import ships from "./ship"

const test1 = ships("testShip", 2, 0, false)

test('object assignment', () => {
    const test1 = ships("testShip", 2, 0, false)
    expect(test1.name).toEqual("testShip");
  });

  const test2 = ships("testShip", 2, 0, false)
    test2.setHit()
    test2.setHit()
    test2.setSunk()

  test('object assignment', () => {
    
    expect(test2.sunk).toEqual(true)
  });