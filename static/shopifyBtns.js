const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url')

function goto(endpoint) {
    return function() {
        window.location.href = endpoint
    }
}

document.getElementById("AIOMOJI").addEventListener("click", goto("https://www.aiomoji.io/quicktask/add?quicktask=" + url));

document.getElementById("ANB AIO").addEventListener("click", goto("http://127.0.0.1:54685/discorLink?url=" + url));

document.getElementById("ATOM AIO").addEventListener("click", goto("https://atomaio.com/dashboard/quicktask?url=" + url));

document.getElementById("BALKO BOT").addEventListener("click", goto("http://localhost:6776/?url=" + url));

document.getElementById("CYBERSOLE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?url=" + url));
document.getElementById("CYBERSOLE SAFE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?url=" + url + "&properties[mode]=safe"));
document.getElementById("CYBERSOLE CHANGE").addEventListener("click", goto("https://cybersole.io/dashboard/tasks?linkchange=" + url));

document.getElementById("DASHE").addEventListener("click", goto("https://api.dashe.io/v1/actions/quicktask?url=" + url));

document.getElementById("EVE ROBOTICS").addEventListener("click", goto("http://remote.eve-backend.net/api/v2/quick_task?link=" + url));

document.getElementById("KILO SOFTWARE").addEventListener("click", goto("http://127.0.0.1:4555/qt?link=" + url));

document.getElementById("OCULUS AIO").addEventListener("click", goto("https://oculusapis.com/ac/rt?url=" + url));

document.getElementById("POLARIS").addEventListener("click", goto("http://localhost:9099/product?url=" + url));

document.getElementById("PRISM").addEventListener("click", goto("https://www.prismaio.com/dashboard?url=" + url));

document.getElementById("PROJECT DESTROYER").addEventListener("click", goto("https://api.destroyerbots.io/quicktask?url=" + url));

document.getElementById("SOLE AIO").addEventListener("click", goto("http://localhost:4444/?url=" + url));

document.getElementById("SOLE TERMINATOR").addEventListener("click", goto("https://soleterminator.io/dashboard?url=" + url));

document.getElementById("SWIFT AIO").addEventListener("click", goto("https://swftaio.com/pages/quicktask?input=" + url));

document.getElementById("THE KICK STATION").addEventListener("click", goto("https://thekickstationapi.com/quick-task.php?link=" +url + "&autostart=true"));

document.getElementById("TOHRU").addEventListener("click", goto("https://tohru.io/#/dashboard/tasks?quicktask=" + url));

document.getElementById("WHATBOT").addEventListener("click", goto("http://localhost:9099/product?url=" + url));

document.getElementById("WOP").addEventListener("click", goto("https://client.wopbot.com/createTask?url=" + url));

document.getElementById("WRATH").addEventListener("click", goto("http://localhost:32441/qt?input=" + url));
