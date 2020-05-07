import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsTopicsService } from 'src/app/services/posts-topics.service';

@Component({
  selector: 'app-posts-topic-detail',
  templateUrl: './posts-topic-detail.component.html',
  styleUrls: ['./posts-topic-detail.component.scss']
})
export class PostsTopicDetailComponent implements OnInit {

  public topic : any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private postsTopicService: PostsTopicsService
  ) { }

  ngOnInit() {
    let topicId = this.activatedRoute.snapshot.params.id
    this.loadData(topicId)
  }

  async loadData(topicId){
    try {
      let res = await this.postsTopicService.getById(topicId)
      this.topic = res.data
    } catch (error) {
      console.log(error)
    }
  }

}
