import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  @ViewChildren('player')videoPlayers: QueryList<any>
  currentPlaying = null;

  stickyVideo: HTMLVideoElement = null;
  stickyPlaying = false;
  @ViewChild('stickyplayer') stickyPlayer: ElementRef
  constructor(public navCtrl: NavController, public navParams: NavParams, private renderer: Renderer2) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
    

  }

  didScroll(){
    if(this.currentPlaying && this.isElementInViewport(this.currentPlaying)){
      return;
    }else if(this.currentPlaying && !this.isElementInViewport(this.currentPlaying)){
      //item fora da view, pausar
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }
    this.videoPlayers.forEach(player => {
      console.log('player',player)

      if(this.currentPlaying){
        return;
      }

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if(this.stickyVideo && this.stickyVideo.src == nativeElement.src){
        return;
      }

      if(inView){
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
      }
    })
  }

  openFullScreen(elem){
    if(elem.requestFullscreen){
      elem.requestFullscreen();
    }else if(elem.webkitEnterFullscreen){
      elem.webkitEnterFullscreen();
      elem.enterFullscreen();
    }
  }
  
  playOnSide(elem){
    if(this.stickyVideo){
      this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo)
    }

    this.stickyVideo = elem.cloneNode(true);

    this.renderer.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo)

    if(this.currentPlaying){
      const playPosition = this.currentPlaying.currentTime;
      this.currentPlaying.pause();
      this.currentPlaying = null;
      this.stickyVideo.currentTime = playPosition
    }

    this.stickyVideo.muted = false;
    this.stickyVideo.play();
    this.stickyPlaying = true;
  }

  closeSticky(){
    if(this.stickyVideo){
      this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
      this.stickyVideo = null;
      this.stickyPlaying = false;
    }
  }

  playOrPauseSicky(){
    if(this.stickyPlaying){
      this.stickyVideo.pause();
      this.stickyPlaying = false;
    }else{
      this.stickyVideo.play();
      this.stickyPlaying = true;
    }
  }

  isElementInViewport(el){
    const rect = el.getBoundingClientRect();
    return(
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
      rect.right <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

}
