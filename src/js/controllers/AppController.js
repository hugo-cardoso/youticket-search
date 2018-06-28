import YoutubeService from '../services/YoutubeService';
import TicketMasterService from '../services/TicketMasterService';

class AppController {

  constructor() {
    
    this.youtubeService = new YoutubeService();
    this.ticketMasterService = new TicketMasterService();

    this.init();
  }

  init() {

    const query = 'eminem';

    this.youtubeService
        .search( query )
        .then(res => console.log( res ) );
  
    this.ticketMasterService
        .searchAtraction( query )
        .then(res => console.log( res ) );
  }
}

export default AppController;