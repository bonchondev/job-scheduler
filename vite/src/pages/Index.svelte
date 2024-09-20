<script lang="ts">
    import ky from "ky";
    import Button from "../components/Button.svelte";
    export let url = "";
    let loading = false;
    let error: string | null;
    let ranCommand = "";
    let startDate: string | null = null;
    let endDate: string | null = null;
    type Jobs = {
        command: string;
    };
    const sendJob = async (kind: string) => {
        error = null;
        if (!startDate && !endDate && kind === "date-range") {
            error =
                "Please provide start date and/or end date before submitting";
            return;
        }
        const response = ky
            .post<Jobs>(`${url}/jobs`, {
                timeout: 30000,
                json: { kind, startDate, endDate },
                hooks: {
                    beforeRequest: [
                        (_) => {
                            ranCommand = "";
                            loading = true;
                        },
                    ],
                },
            })
            .json();
        response
            .then((data) => {
                loading = false;
                ranCommand = data.command;
            })
            .catch((err) => {
                loading = false;
                ranCommand = err.message;
            });
    };
</script>

<main class="py-10 px-5">
    <nav class="font-bold text-6xl pb-5 pl-1 text-blue-700">Job Submission</nav>
    <section id="user-info" class="px-1 pb-6 text-base">
        <p>
            Choose one of the three <span class="font-bold">(3)</span> options to
            submit a job
        </p>
        {#if error}
            <p class="text-red-500 font-bold pt-5">{error}</p>
        {/if}
    </section>
    <section id="date-range">
        <form
            on:submit={(e) => {
                e.preventDefault();
                sendJob("date-range");
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
            <Button size="py-2 px-6" {loading}>Submit</Button>
        </form>
    </section>
    <section class="flex flex-row gap-x-5 py-5" id="preformatted-options">
        <label for="last-month" class="pt-5 pl-1 font-bold"
            >Prefilled Dates:
        </label>
        <Button
            on:click={() => sendJob("ytd")}
            {loading}
            id="ytd"
            size="w-32 h-14">Year to Date</Button
        >
        <Button
            on:click={() => sendJob("last-month")}
            {loading}
            id="last-month"
            size="w-32 h-14">Last Month</Button
        >
    </section>
    <section id="commands-run" class="pt-3">
        <div class="bg-slate-300 h-40 p-3">
            Submitted:
            {#if loading}
                <span class="font-semibold">Loading...</span>
            {:else}
                <span class="font-bold">{ranCommand}</span>
            {/if}
        </div>
    </section>
</main>
