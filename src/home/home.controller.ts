import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@Controller('/')
export class HomeController {
    //Express

    @ApiTags('home')
    @Get()
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hellou'
        })
    }

    @ApiTags('home')
    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'Something Neww'
    }

    @ApiTags('home')
    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @ApiTags('home')
    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route!'
    }
}
