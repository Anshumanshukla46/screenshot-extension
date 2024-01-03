document.addEventListener("DOMContentLoaded", function () {
    const ScreenshotButton = document.getElementById("ScreenshotButton");

    if (ScreenshotButton) {
        ScreenshotButton.addEventListener("click", takeScreenshot);
    } else {
        console.error("Button not found.");
    }
})


function takeScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (screenshotUrl) {

        const link = document.createElement("a");
        link.href = screenshotUrl;
        link.download = "screenshot.png",
            link.click();

    })
}
