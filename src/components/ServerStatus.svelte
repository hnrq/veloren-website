<script lang="ts">
  import { type ServerInfo } from "../types/server-status";

  const fetchServerStatus = async (): Promise<ServerInfo> => {
    const response = await fetch(import.meta.env.PUBLIC_SERVER_STATUS_URL);
    const data = await response.json();
    console.log(data);

    return data;
  };
</script>

{#await fetchServerStatus()}
  <small class="server-status server-status--loading">Loading...</small>
{:then status}
  <small class="server-status">🟢 {status}</small>
{:catch}
  <small class="server-status">🔴 Could not communicate</small>
{/await}
