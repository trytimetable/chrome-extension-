let checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', function() {  
    let params = {
    active: true,
    currentWindow: true
    }
    chrome.tabs.query(params, tabs => {
    chrome.tabs.sendMessage(tabs[0].id,"toggle icon");
    });
});