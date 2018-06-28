class VideoList {

    constructor() {

        this._list = [];
    }

    get list() {
        return this._list;
    }

    add( video ) {
        this._list.push( video );
    }

    clear() {
        this._list = [];
    }
}

export default VideoList;