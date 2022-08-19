const visitWrapObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.childNodes.length <= 0) {
            document.querySelector("._no-visits-added").classList.remove("visually-hidden")
        } else {
            document.querySelector("._no-visits-added").classList.add("visually-hidden")
        }
    });    
});

export default visitWrapObserver