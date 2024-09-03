<script lang="ts">
    export let amount;
    import ky from "ky";
    let name = "New Wallet";
    type Data = {
        dollars: number;
    };
    const response = ky.post<Data>("/data").json();
</script>

<section class="p-2 text-red-500">
    {name} - {amount} |
    {#await response then resp}
        <span>{resp.dollars}</span>
    {:catch error}
        <span>Error: {error.message}</span>
    {/await}
</section>
