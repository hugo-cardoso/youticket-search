import HttpService from './HttpService';

class TicketMasterService {

    constructor() {

        this.KEY = 'q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG';
        this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
    }

    searchAtraction( query ) {

        const url = `${ this.BASE_URL }/attractions.json?apikey=${ this.KEY }&keyword=${ query }`;

        return HttpService.getData( url );
    }
}

export default TicketMasterService;