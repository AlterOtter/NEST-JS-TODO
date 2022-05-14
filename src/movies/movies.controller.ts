import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private movieService:MoviesService){}

    @Get()
    getAll(){
        return this.movieService.getAll();
    }

    @Get('/search')
    getSearch(@Query('year') searchYear:string){
        return `${searchYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId:string){
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.movieService.deleteOne(movieId);
    }


    @Patch('/:id')
    path(@Param('id') movieId:string,@Body() updateData){
        return this.movieService.update(movieId,updateData);
    }


}
