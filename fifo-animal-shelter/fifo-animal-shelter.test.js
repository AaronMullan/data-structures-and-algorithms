const AnimalShelter = require('./fifo-animal-shelter');

describe('FifoAnimalShelter', () => {
  
    
  it('can insert into the shelter', () => {
    const shelter = new AnimalShelter();
        shelter.enqueue(dog);
        expect(list.includes(dog)).toEqual(true);

  })
});
