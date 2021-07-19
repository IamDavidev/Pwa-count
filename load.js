if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
    .then(
        reg => console.log("Correct Registration...")
    ).catch(
        err => console.log(err)
    )

}
