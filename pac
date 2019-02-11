var domains = {
  "googleadsensetvsite.com": 1,
  "googlesyndication.com": 1, 
  "googletagmanager.com": 1, 
  "googletagservices.com": 1, 
  "googleusercontent.com": 1,
  "google-analytics.com": 1,
  "g.co": 1, 
  "git-scm.com": 1, 
  "github.com": 1, 
  "gmail.com": 1, 
  "golang.org": 1, 
  "google.co.id": 1, 
  "google.co.jp": 1, 
  "google.co.kr": 1,
  "google.co.uk": 1,
  "google.ca": 1,
  "google.cn": 1, 
  "google.de": 1,
  "google.fr": 1,
  "google.it": 1,
  "google.nl": 1,
  "google.com": 1, 
  "google.com.au": 1,
  "google.com.hk": 1,
  "google.com.my": 1,
  "google.com.tw": 1,
  "googleadservices.com": 1, 
  "googleapis.com": 1, 
  "googlecode.com": 1, 
  "googledomains.com": 1, 
  "googledrive.com": 1, 
  "googleearth.com": 1, 
  "googlehosted.com": 1, 
  "googlelabs.com": 1, 
  "googlemail.com": 1, 
  "googlepages.com": 1, 
  "googleplus.com": 1, 
  "googlesource.com": 1, 
  "googlevideo.com": 1, 
  "twitter.com": 1, 
  "twitter.jp": 1, 
  "twitter4j.org": 1, 
  "twittercounter.com": 1, 
  "twitterfeed.com": 1, 
  "twittergadget.com": 1, 
  "twitterkr.com": 1, 
  "twittermail.com": 1, 
  "twittertim.es": 1, 
  "wikia.com": 1, 
  "wikibooks.org": 1, 
  "wikileaks.ch": 1, 
  "wikileaks.de": 1, 
  "wikileaks.eu": 1, 
  "wikileaks.lu": 1, 
  "wikileaks.org": 1, 
  "wikileaks.pl": 1, 
  "wikilivres.info": 1, 
  "wikimapia.org": 1, 
  "wikimedia.org": 1, 
  "wikimedia.org.mo": 1, 
  "wikinews.org": 1, 
  "wikipedia.org": 1, 
  "wikisource.org": 1, 
  "wikiwiki.jp": 1, 
  "youtu.be": 1, 
  "youtube-nocookie.com": 1, 
  "youtube.com": 1, 
  "youversion.com": 1
};
var direct = 'DIRECT;';
var hasOwnProperty = Object.hasOwnProperty;
var proxy = "PROXY 127.0.0.1:1080;";

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
        		return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return direct;
}
