import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Movie } from '../attributes/movie';
import { MovieinfoService } from '../services/movieinfo';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false,
})
export class MovieDetailPage implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieinfoService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(movieId);
  }

  goBack() {
    this.navCtrl.back();
  }
}
