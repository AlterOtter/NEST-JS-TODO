import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:string):Movie{
        const moive=this.movies.find(movie => movie.id === parseInt(id));
        if(!moive){
            throw new NotFoundException(`Movie with Id ${id} not found`);
        }
        
        return moive;
    }

    deleteOne(id:string):boolean{
        this.getOne(id);
        this.movies=this.movies.filter(movie => movie.id !== parseInt(id));
        return true
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData
        });
    }

    update(id:string,updateData){
        const moive = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...moive, ...updateData});
    }
}
