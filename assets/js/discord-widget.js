const DISCORD_GUILD_ID = "1044728745048674396";

function discordStatusColor(status) {
  return { online: "#3ecf8e", idle: "#f0b132", dnd: "#e5484d" }[status] || "#7d8494";
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

async function loadDiscordWidget() {
  const wrap = document.getElementById("discordWidget");
  if (!wrap) return;

  try {
    const res = await fetch(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`);
    if (!res.ok) throw new Error("widget not available");
    const data = await res.json();
    renderDiscordWidget(wrap, data);
  } catch (err) {
    // Server-Widget ist evtl. nicht aktiviert - Block einfach ausblenden statt kaputt anzeigen.
    wrap.style.display = "none";
  }
}

function renderDiscordWidget(wrap, data) {
  const members = data.members || [];
  const shown = members.slice(0, 12);
  const extra = members.length - shown.length;

  const memberItems = shown.map((m) => `
    <div class="discord-member">
      <span class="discord-avatar" style="background-image:url('${m.avatar_url}');">
        <span class="discord-status-dot" style="background:${discordStatusColor(m.status)};"></span>
      </span>
      <span class="discord-name">${escapeHtml(m.username)}</span>
    </div>
  `).join("");

  wrap.innerHTML = `
    <div class="discord-widget-head">
      <span class="discord-online-dot"></span>
      <span>${data.presence_count} online</span>
    </div>
    ${shown.length ? `<div class="discord-member-grid">${memberItems}</div>` : ""}
    ${extra > 0 ? `<div class="discord-more">+${extra} weitere online</div>` : ""}
  `;
}

document.addEventListener("DOMContentLoaded", loadDiscordWidget);
