[![CircleCI](https://circleci.com/gh/varundey/pltr/tree/master.svg?style=svg)](https://circleci.com/gh/varundey/pltr/tree/master)

# pltr

pltr is a browser extension which helps you show the progress you have made with the page as you scroll through

[![Chrome web store](https://raw.githubusercontent.com/varundey/pltr/master/assets/chrome%20web%20store.png)](https://chrome.google.com/webstore/detail/pltr/jnandbgcohcjgonlhmgpjlcpbkaccbnk)
[![Firefox Add-ons](https://raw.githubusercontent.com/varundey/pltr/master/assets/firefox%20add-ons.png)](https://addons.mozilla.org/en-US/firefox/addon/pltr/)
[![Opera addons](https://raw.githubusercontent.com/varundey/pltr/master/assets/opera%20addons.png)](https://addons.opera.com/en/extensions/details/pltr/)
[![Edge Add-ons](https://raw.githubusercontent.com/varundey/pltr/master/assets/microsoft%20add-ons.png)](https://microsoftedge.microsoft.com/addons/detail/innnpngkjjjanfadleaidackgdppicab)

## Permissions

pltr is designed to be minimally invasive and uses only the necessary permissions to function:

### Host Permissions
- `<all_urls>`: This permission is required to allow the extension to add the progress bar to any webpage you visit. The extension only:
  - Adds a small progress bar element at the top of the page
  - Monitors scroll position to update the progress bar
  - Does not read, modify, or collect any page content
  - Does not track your browsing history or send any data anywhere

### Chrome API Permissions
- None! pltr doesn't require any special Chrome API permissions. It operates entirely using standard DOM APIs to:
  - Create and style the progress bar
  - Listen to scroll events
  - Calculate page progress

We believe in transparency and minimal permissions. The extension's source code is open and available for review in this repository.

## Demo:
pltr adds a small ribbon to the top of the page on page load:
![pltr showing small red ribbon on top of page upon load](https://raw.githubusercontent.com/varundey/pltr/master/assets/page%20load%20screenshot.png "Page load")

As you progress through the page, pltr ribbon starts filling width of the screen
![pltr ribbon filling width of page on scrolling to the bottom](https://raw.githubusercontent.com/varundey/pltr/master/assets/page%20scrolled%20screenshot.png "Page scrolled")

Here's a video for a better demo

![pltr video demo showing how the ribbon advances on page progress](https://raw.githubusercontent.com/varundey/pltr/master/assets/pltr%20video.gif "pltr video demo")

## Inspiration
I read a lot of articles on mobile when I am traveling to and from my office. A big part of me deciding whether to read the article at that time or to just save it for reading later solely depends on how lengthy it is. Since I use Firefox for Android and knowing Firefox supports installing add-ons on Android, I decided to solve my own problem.

## Installation
Jump over to [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/pltr/) or [Chrome web store](https://chrome.google.com/webstore/detail/pltr/jnandbgcohcjgonlhmgpjlcpbkaccbnk) and you are good to go. You can also use it if you use Firefox for Android.

## Releases
Past releases of pltr are hosted at [release page](https://github.com/varundey/pltr/releases)

## Build
You can build from the source. This is recommended if you want to add some changes. Make sure you have node and npm installed before proceeding
```shell
git clone https://github.com/varundey/pltr.git
cd pltr
npm i
npm run dev      # for development build
npm run build    # for minified, production build
```
You will get the bundled extension inside `dist/pltr`. Follow the guidelines for your browser on how to side load the extension
- [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Distribution_options/Sideloading_add-ons)
- [Chrome](https://support.google.com/chrome/a/answer/2714278)


[MIT Licensed](https://varundey.mit-license.org/)