class Video {

    constructor( data ) {

        this._title = data.title || '';
        this._description = data.description || '';
        this._dataPublished = data.dataPublished || '';
        this._thumbnail = data.thumbnail || '';
        this._id = data.id || '';
        this._channel = data.channel || ''; 
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dataPublished() {
        return this._dataPublished;
    }

    get link() {
        return `https://www.youtube.com/watch?v=${ this._id }`;
    }

    get thumbnail() {
        return this.thumbnail;
    }

    get id() {
        return this._id;
    }

    get channel() {
        return this._channel;
    }
}

export default Video;