import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { BlogsService } from "./blogs.service";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('/blogs')
export class BlogController {
    constructor(private blogsService: BlogsService) { }

    @ApiTags()
    @ApiOperation({summary:'Trae todos lo Blogs creados'})
    @Get()
    getAllBlogs(@Query() query: any) {
        console.log(query)
        return this.blogsService.getBlogs()
    }
    
    @ApiTags()
    @ApiOperation({summary:'Trae un blog segun ID'})
    @Get('/:id')
    getBlog(@Param('id') id:string) {
        return this.blogsService.getBlog(parseInt(id))
    }

    @ApiTags()
    @ApiOperation({summary:'Crear un Blog'})
    @Post()
    createBlog(@Body() blog: CreateBlogDto) {
        console.log(blog)
        return this.blogsService.createBlog(blog)
    }

    @ApiTags()
    @ApiOperation({summary:'Actualiza un Blog'})
    @Put()
    updateBlog(@Body() blog:UpdateBlogDto) {
        return this.blogsService.updateBlog(blog)
    }

    @ApiTags()
    @ApiOperation({summary:'Elimina un Blog'})
    @Delete()
    deleteBlog() {
        return this.blogsService.getBlogs()
    }

    @ApiTags()
    @ApiOperation({summary:'Actualiza parcialmente un Blog'})
    @Patch()
    updateBlogStatus() {
        return this.blogsService.getBlogs()
    }
}