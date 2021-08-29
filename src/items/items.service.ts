/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [
        {
          id: "1000",
          name: "Oranges",
          description: "Citrous Fruit",
          qty: 20  
        },
        {
            id: "2000",
            name: "Pine Apples",
            description: "Citrous Fruit",
            qty: 45  
        },
        {
            id: "3000",
            name: "Paw Paw",
            description: "Succulent Fruit",
            qty: 35  
        }

    ];

    get Items() : Item[] {
        return this.items;
    }

    fetchItem(id): Item {
      
      return  [... this.items].find(item => item.id === id);

    }

}
