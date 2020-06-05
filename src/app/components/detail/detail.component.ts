import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  movie: Movie;

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
    });

    this.service.singleMovie.subscribe((movie: Movie) => {
      this.movie = movie;
    });

    this.service.getSingleMovie(this.id);
  }

}
