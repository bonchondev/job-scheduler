<script lang="ts">
    import Spinner from "./Spinner.svelte";

    export let loading: boolean;
    export let size = "w-40 h-20";
</script>

<button
    {...$$props}
    on:click
    disabled={loading}
    class={`
      bg-blue-500
      text-white
      font-bold
      ${size}
      rounded-lg
      transition-all
      duration-150
      ease-in-out
      ${
          loading
              ? `bg-gray-400 text-gray-700 cursor-not-allowed`
              : `border-b-4
      border-blue-700
      hover:bg-blue-600
      hover:border-blue-600
      active:border-blue-700
      active:transform
      active:translate-y-1
      shadow-lg
      hover:shadow-md
      active:shadow-sm`
      }
    `}
>
    <div class="flex flex-row items-center justify-center gap-x-2">
        {#if loading}
            <Spinner /> Loading...
        {:else}
            <slot />
        {/if}
    </div>
</button>
