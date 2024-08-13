import { IsString, MinLength } from "class-validator"

export class CreateBlogDto {
    @IsString()
    @MinLength(3)
    title: string

    @IsString()
    @MinLength(3)
    autor: string
    
    @IsString()
    @MinLength(20)
    content: string
}