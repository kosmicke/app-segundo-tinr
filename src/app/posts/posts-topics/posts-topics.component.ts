import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsTopicsService } from 'src/app/services/posts-topics.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-topics',
  templateUrl: './posts-topics.component.html',
  styleUrls: ['./posts-topics.component.scss']
})
export class PostsTopicsComponent implements OnInit, OnDestroy {

  public topics: any[] = []
  public subscription: Subscription

  constructor(
    private postsTopicsService: PostsTopicsService
  ) { }

  async loadTopics(){
    try {
      let successRes = await this.postsTopicsService.getList()
      this.topics = successRes.data
      console.log(successRes.data)

    } catch (error) {
      console.log("errorRes", error)
    }
  }

  ngOnInit() {
    this.loadTopics()
    let novoObservable = interval(5000)
    this.subscription = novoObservable.subscribe(times => {
      this.loadTopics()
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
