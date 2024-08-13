import { Module } from "@nestjs/common";
import { BlogController } from "./blogs.controllers";
import { BlogsService } from "./blogs.service";

@Module({
    controllers: [BlogController],
    providers:[BlogsService]
})
export class BlogModule { }
