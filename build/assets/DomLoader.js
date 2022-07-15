import ResourceLoader from './ResourceLoader.js';
export default class DomLoader extends ResourceLoader {
    _parser;
    constructor() {
        super('text/html', 'text/xml', 'application/xml', 'application/xhtml+xml', 'image/svg+xml');
        this._parser = new DOMParser();
    }
    async load(response) {
        const text = await response.text();
        const mimeType = response.headers.get('content-type').split(';').shift();
        return this._parser.parseFromString(text, mimeType);
    }
}
