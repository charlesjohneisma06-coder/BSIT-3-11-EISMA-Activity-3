import { TestBed } from '@angular/core/testing';
import { MovieinfoService } from './movieinfo';

describe('MovieinfoService', () => {
  let service: MovieinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide six movies with visible poster images', () => {
    const movies = service.getMovies();

    expect(movies.length).toBe(6);
    movies.forEach((movie) => {
      expect(movie.banner).toMatch(/\.(jpg|jpeg|png|gif|jfif|webp)$/i);
      expect(movie.gallery.length).toBeGreaterThan(0);
      movie.gallery.forEach((image) => {
        expect(image).toMatch(/\.(jpg|jpeg|png|gif|jfif|webp)$/i);
      });
    });
  });
});
