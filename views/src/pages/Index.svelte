<script lang="ts">
    import ky from "ky";
    import { createMutation } from "@tanstack/svelte-query";
    let { url = '' } = $props();
    let startDate: string | null = $state(null);
    let endDate: string | null = $state(null);
    type Jobs = {
        command: string;
    };
    type ButtonOpts = {
        text: string;
        kind: string;
        size?: string;
    };
    const sendJob = createMutation({
        mutationFn: (kind: string) => {
            if (!startDate) {
                startDate = null;
            }
            if (!endDate) {
                endDate = null;
            }
            if (startDate && endDate && startDate > endDate) {
                throw Error("Please make sure end date is past start date");
            }
            if (!startDate && !endDate && kind === "date-range") {
                throw Error(
                    "Please provide start date and/or end date before submitting",
                );
            }
            return ky
                .post<Jobs>(`${url}/jobs`, {
                    json: { kind, startDate, endDate },
                })
                .json();
        },
    });
</script>

<main class="py-10 px-5">
    <nav class="font-bold text-6xl pb-5 pl-1 text-blue-700">Job Submission</nav>
    <section id="user-info" class="px-1 pb-6 text-base">
        <p>
            Choose one of the three <span class="font-bold">(3)</span> options to
            submit a job
        </p>
        {#if $sendJob.isError}
            <p class="text-red-500 font-bold pt-5">{$sendJob.error}</p>
        {/if}
    </section>
    <section id="date-range">
        <form
            onsubmit={(e) => {
                e.preventDefault();
            }}
            class="flex flex-row gap-x-4"
        >
            <label for="start-date" class="pt-3 pl-1 pr-7 font-bold"
                >Date Range:
            </label>
            <input
                type="date"
                bind:value={startDate}
                id="start-date"
                class="w-50 px-3 py-3 text-lg font-bold text-white placeholder-blue-100 bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white rounded-lg focus:ring-0 focus:ring-white"
            />
            <input
                bind:value={endDate}
                id="start-date"
                type="date"
                class="w-50 px-3 py-3 font-bold text-lg text-white placeholder-blue-100 bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white rounded-lg focus:ring-0 focus:ring-white"
            />
            {@render button({ text: "Submit", kind: "date-range", size: "py-2 px-6" })}
        </form>
    </section>
    <section class="flex flex-row gap-x-5 py-5" id="preformatted-options">
        <label for="last-month" class="pt-5 pl-1 font-bold"
            >Prefilled Dates:
        </label>
        {@render button({ text: "Year to Date", kind: "ytd", size: "w-32 h-14" })}
        {@render button({ text: "Last Month", kind: "last-month", size: "w-32 h-14" })}
        </section>
    <section id="commands-run" class="pt-3">
        <div class="bg-slate-300 h-40 p-3">
            Submitted: {@render result()}
        </div>
    </section>
</main>

{#snippet spinner()}
    <svg
        class="animate-spin h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
        ></circle>
        <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
{/snippet}

{#snippet button(opts: ButtonOpts = {text: '', kind: '',size : "w-40 h-20"})}
    <button
        onclick={()=>$sendJob.mutate(opts.kind)}
        id={opts.kind}
        disabled={$sendJob.isPending}
        class={`
          bg-blue-500
          text-white
          font-bold
          ${opts.size}
          rounded-lg
          transition-all
          duration-150
          ease-in-out
          ${
              $sendJob.isPending
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
            {#if $sendJob.isPending}
                    {@render spinner()}Loading...
            {:else}
                    {opts.text}
            {/if}
        </div>
    </button>
{/snippet}

{#snippet result()}
    {#if $sendJob.isPending}
         <span class="font-semibold">Loading...</span>
    {:else if $sendJob.isSuccess}
         <span class="font-bold">{$sendJob.data.command}</span>
    {/if}
{/snippet}


