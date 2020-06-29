import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100000, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.sort();
linkedList.print();