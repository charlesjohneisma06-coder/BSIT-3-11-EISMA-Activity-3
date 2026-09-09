import { Injectable } from '@angular/core';
import { Movie } from '../attributes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieinfoService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      banner: 'assets/images/title.jfif',
      synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
      gallery: [
        'assets/images/title.jfif',
        'assets/images/ins1.jpg',
        'assets/images/ins2.jpg'
      ]
    },
    {
      id: 2,
      title: 'Interstellar',
      banner: 'assets/images/title2.webp',
      synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      gallery: [
        'assets/images/title2.webp',
        'assets/images/m2.webp',
        'assets/images/m2.1.webp'
      ]
    },
    {
      id: 3,
      title: 'The Matrix',
      banner: 'assets/images/title3.jfif',
      synopsis: 'A hacker discovers the truth about reality and must choose between comfort and freedom.',
      gallery: [
        'assets/images/title3.jfif',
        'assets/images/m3.jfif',
        'assets/images/m3.1.jfif'
      ]
    },
    {
      id: 4,
      title: 'The Dark Knight',
      banner: 'assets/images/title4.jfif',
      synopsis: 'Batman faces the Joker in a battle that tests the city\'s morality and his own limits.',
      gallery: [
        'assets/images/title4.jfif',
        'assets/images/m4.jfif',
        'assets/images/m4.1.jfif'
      ]
    },
    {
      id: 5,
      title: 'Avatar',
      banner: 'assets/images/title5.jfif',
      synopsis: 'A paraplegic marine becomes part of a unique mission on Pandora and finds a deeper connection to nature.',
      gallery: [
        'assets/images/title5.jfif',
        'assets/images/m5.jfif',
        'assets/images/m5.1.jfif'
      ]
    },
    {
      id: 6,
      title: 'Dune',
      banner: 'assets/images/title6.jfif',
      synopsis: 'A noble family becomes embroiled in a deadly struggle over a desert planet and its invaluable resource.',
      gallery: [
        'assets/images/title6.jfif',
        'assets/images/m6.jfif',
        'assets/images/m6.1.jfif'
      ]
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}