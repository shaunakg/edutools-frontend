if (new URLSearchParams(location.search).get("from_old")) {

    let siteHasMovedWarning = document.createElement("div");
    siteHasMovedWarning.innerHTML = "Welcome! We have rebranded to Edutools for Notion, a full suite of education tools for Notion. Everything from before has stayed the same.<br><span class=small>(click to close)</span>";
    siteHasMovedWarning.classList.add("site-has-moved");

    siteHasMovedWarning.onclick = e => {
        e.target.style.display = "none";
    }

    document.querySelector("article").prepend(siteHasMovedWarning);

}

window.api = "https://edutools-2imy5ahygq-uc.a.run.app"