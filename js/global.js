const SERVER_URL = "http://dmentor.id/dmentor/php/";

function show(msg) {
    var os = getMobileOperatingSystem();
    if (os == "Android") {
        Native.show(message);
    } else if (os == "iOS") {
        webkit.messageHandlers.callbackHandler.postMessage(message);
    }
}

function showLoadingDialog(msg) {
    var os = getMobileOperatingSystem();
    if (os == "Android") {
        Native.showLoadingDialog(msg);
    }
}

function hideLoadingDialog() {
    var os = getMobileOperatingSystem();
    if (os == "Android") {
        Native.hideLoadingDialog();
    }
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}