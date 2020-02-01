import Countly from 'countly-sdk-web';

class CountlyHelper {
    constructor() {
        this.countly = Countly;
        this.countly.init({
            debug: true,
            app_key: '5f1bcd0c736e2dfa0c3625ec466749bd36107def',
            url: 'https://try.count.ly',
        });
        this.countly.track_sessions();
        this.countly.track_pageview();
    }

    sharedInstance() {
        return this.countly;
    }
}

const CountlyInstance = new CountlyHelper();

export default CountlyInstance;
