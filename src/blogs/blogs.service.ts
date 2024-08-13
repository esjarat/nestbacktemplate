import { HttpCode, Injectable, NotFoundException } from "@nestjs/common";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";

@Injectable()
export class BlogsService {
    private blogs = []

    getBlogs() {
        return this.blogs
    }

    getBlog(id: number) {
        const blogFound = this.blogs.find(blog => blog.id === id)
        if (!blogFound) {
            return new NotFoundException('no existe tarea')
        }
        return blogFound
    }

    createBlog(blog: CreateBlogDto) {
        this.blogs.push({
            id: this.blogs.length + 1,
            ...blog
        })
        return blog
    }

    updateBlog(blog: UpdateBlogDto) {

        return blog
    }
}