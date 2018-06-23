import HttpService from './HttpService'

class YoutubeService {

  constructor() {

    this.KEY = 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc';
    this.BASE_URL = 'https://www.googleapis.com/youtube/v3';
  }

  search( query ) {

    const url = `${ this.BASE_URL }/search?part=snippet&type=video&key=${ this.KEY }&q=${ query }`;

    return HttpService.getData( url );
  }
}

export default YoutubeService;