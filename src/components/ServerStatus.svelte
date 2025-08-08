<script lang="ts">
  import { type ServerInfo } from "../types/server-status";

  const fetchServerStatus = async (): Promise<ServerInfo> => {
    const response = await fetch(import.meta.env.PUBLIC_SERVER_STATUS_URL);
    const data = await response.json();
    console.log(data);

    return data;
  };

  let { onlineLabel }: { onlineLabel: string } = $props();
</script>

{#await fetchServerStatus()}
  <small class="server-status server-status--loading">Loading...</small>
{:then status}
  <small class="server-status">
    🟢 {status.players_count}/{status.player_cap}
    {onlineLabel}
  </small>
{:catch}
  <small class="server-status">🔴 Could not communicate</small>
{/await}
