import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})

export class FeedPage {

  public feed = {
    titulo: "Iord Neto",
    data: "Outubro 16, 2017",
    descricao: "Estou criando um aplicativo com Ionic",
    quantidade_likes: 845,
    quantidade_comentarios: 666,
    hora_comentario: "10h atrás"
  }

  public lista_filmes = new Array<any>();
  public nome_usuario: string = "Iord Neto";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) { }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const dados = JSON.parse(response._body);
        this.lista_filmes = dados.results;
        console.log(dados);
      },
      error => {
        console.log(error);
      }
    );

  }

}
