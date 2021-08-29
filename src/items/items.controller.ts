import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  create(@Body() item: CreateItemDto): string {
    return `Name: ${item.name} Desc is ${item.description}`;
  }

  // Get One Record

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  // A more verbose version of passing params

  @Put(':id')
  update(@Param() param, @Body() Item: CreateItemDto): string {
    return `Updated record ${param.id}  Whose Name is ${Item.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted record: ${id}`;
  }
}
