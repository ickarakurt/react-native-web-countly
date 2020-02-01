import Countly from 'countly-sdk-react-native-bridge';

class CountlyHelper {
    constructor() {
        this.countly = Countly;
        this.countly.init('https://try.count.ly', '93637cc91aa15effdd18b12967fce2104e24e456');
        this.countly.enableCrashReporting();
        this.countly.enableLogging();
        this.countly.start();
    }

    sharedInstance() {
        return this.countly;
    }
}

const CountlyInstance = new CountlyHelper();

export default CountlyInstance;
