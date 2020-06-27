const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url')

function goto(endpoint) {
    return function() {
        window.location.href = endpoint
    }
}

document.getElementById("CYBERSOLE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?url=" + url));
document.getElementById("CYBERSOLE SAFE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?url=" + url + "&properties[mode]=safe"));
document.getElementById("CYBERSOLE CHANGE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?linkchange=" + url));

document.getElementById("EVE ROBOTICS").addEventListener("click", goto("http://remote.eve-backend.net/api/v2/quick_task?link=" + url));

document.getElementById("PHANTOM").addEventListener("click", goto("https://api.ghostaio.com/quicktask/send?site=FootLockerUS&input=" + url));

document.getElementById("PRISM").addEventListener("click", goto("https://www.prismaio.com/dashboard?url=" + url));

document.getElementById("PROJECT DESTROYER").addEventListener("click", goto("https://api.destroyerbots.io/quicktask?url=" + url));

document.getElementById("THE KICK STATION").addEventListener("click", goto("https://thekickstationapi.com/quick-task.php?link=" +url + "&autostart=true"));

document.getElementById("WHATBOT").addEventListener("click", goto("http://localhost:9099/product?url=" + url));

document.getElementById("WRATH").addEventListener("click", goto("http://localhost:32441/qt?input=" + url));

