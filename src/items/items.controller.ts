/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';



@Controller('items')
export class ItemsController {

  constructor(private readonly itemSvc: ItemsService) {

  }


  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemSvc.Items()
  }

   // Get One Record

   @Get(':id')
   async findOne(@Param('id') id): Promise<Item> {
     return this.itemSvc.fetchItem(id);
   }


   // A dto stands for a data transfer object -  basically a model/schema
  @Post()
   create(@Body() itemDto: CreateItemDto): Promise<Item> {
    return this.itemSvc.create(itemDto);
  }

  // A more verbose version of passing params

  @Put(':id')
   update(@Param() param, @Body() ItemDto: CreateItemDto): Promise<Item> {
   return  this.itemSvc.update(param.id, ItemDto);
  }

  // A cleaner way to pass params
  @Delete(':id')
   delete(@Param('id') id): Promise<Item> {
    return  this.itemSvc.delete(id);
  }
}
