import YoutubeService from '../services/YoutubeService';

class AppController {

  constructor() {
    
    this.youtubeService = new YoutubeService();
    this.init();
  }

  init() {

    this.youtubeService
        .search( 'projota' )
        .then(res => console.log( res ) );
  }
}

export default AppController;