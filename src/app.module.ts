import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileController } from './mobile/mobile.controller';
import { MobileService } from './mobile/mobile.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mariadb",
      host:"localhost",
      port:3307,
      username:"root",
      password:"1234",
      database:"management_platform",
      entities:[],
      synchronize:false
    })
  ],
  controllers: [ MoviesController, MobileController],
  providers: [ MoviesService, MobileService],
})
export class AppModule {}
