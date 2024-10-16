import { AbstractMapper } from 'src/generic/mapper/base.mapper';
import { PostOneDto } from './dto/post.one.dto';
import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostMapper extends AbstractMapper<Post, PostOneDto> {}
