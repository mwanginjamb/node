/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

   constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){}

    async Items() : Promise<Item[]> {
        return await this.itemModel.find();
    }

    async fetchItem(id: string): Promise<Item> {
      return  await this.itemModel.findOne({_id: id});
    }

    async create(item: Item): Promise<Item> {
      const newItem =  new this.itemModel(item);
      return await newItem.save();
    }

    async update(id: string, item: Item): Promise<Item> {
      return await this.itemModel.findByIdAndUpdate(id, item, { new: true});
    }

    async delete(id: string): Promise<Item> {
      return await this.itemModel.findByIdAndRemove(id);
    }

}
