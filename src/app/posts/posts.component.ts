import { NotFoundError } from './../common/errors/not-found-error';
import { BadInput } from './../common/errors/bad-input';
import { AppError } from './../common/errors/app-error';
import { PostService } from './../common/services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) { 
   
  }

  ngOnInit() {  
    this.loadPosts();
  }

  loadPosts () {
    this.postService.getAll()
    .subscribe(response =>  this.posts = response);
  }

  addPost (input: HTMLInputElement) {
      let post = {title: input.value};
      input.value='';
      this.postService.add(post).subscribe(response => {
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
      },(error: AppError) => {
        if(error instanceof BadInput){
            console.log('bad');
        }
      });
  }

  updatePost(post){
    this.postService.update({
      id:post.id,
      isRead:true
    }).subscribe(response => {
      console.log(response.json());
    });
  }

  deletePost(post){
    this.postService.delete(post.id).subscribe(response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
    }, (error: AppError) => {
        if(error instanceof NotFoundError){
            console.log('bad');
        }
    }); 
  }

  
}
