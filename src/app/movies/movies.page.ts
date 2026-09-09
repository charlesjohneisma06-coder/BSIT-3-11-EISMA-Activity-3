import { Component, OnInit } from '@angular/core';
import { Movie } from '../attributes/movie';
import { MovieinfoService } from '../services/movieinfo';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: false,
})
export class MoviesPage implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieinfoService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies() ?? [];
  }
}
