class Band{ 

    constructor( data ) {

        this._name = data.name;
        this._image = data.image;
        this._facebook = data.facebook;
        this._instagram = data.instagram;
        this._youtube = data.youtube;
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image ? this._image[0].url : null;
    }

    get facebook() {
        return this._facebook ? this._facebook[0].url : null;
    }

    get instagram() {
        return this._instagram ? this._instagram[0].url : null;
    }

    get youtube() {
        return this._youtube ? this._youtube[0].url : null;
    }
}

export default Band;