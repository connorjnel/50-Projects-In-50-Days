const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
	insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keycode</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>`;
});

// Event, e, ev. All are usable for event
