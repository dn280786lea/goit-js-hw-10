!function(){var e="live_hsz8LgxGKg2EdraBaRAoqT1NfEDzIXDGDgW167CQBZhFlPZGlomO9Uew9cUHBXoV",t="https://api.thecatapi.com/v1";var n=document.querySelector(".breed-select");fetch("".concat(t,"/").concat("breeds","?api_key=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){!function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))}(e)})).catch((function(e){console.error("Error fetching breeds:",e)}))}();
//# sourceMappingURL=index.ab3e3108.js.map
