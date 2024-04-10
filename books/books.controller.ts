import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    findall(){
        return "Todos los libros"
    }
    @Get('/:id')
    findOne(@Param() id: string){
        return `Devuelvo el libro ${id}`
    }

    @Post()
    create(@Body() body:any){

        return body
    }

}
