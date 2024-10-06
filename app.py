from time import sleep
from config import PUBLIC_FOLDER, STATIC_FOLDER, create_app
from flask import request, send_from_directory
from flask_inertia import render_inertia

app = create_app()

@app.get("/")
def index():
    return render_inertia("Index")


@app.get("/about")
def about():
    return render_inertia("About", props={"amount": "$7,000"})


@app.post("/data")
def data():
    return {"dollars": 100}

@app.post("/jobs")
def submit_jobs():
    req = request.json or {}
    kind = req.get("kind")
    start_date = req.get("startDate")
    end_date = req.get("endDate")
    sleep(3)
    command = ""
    match kind:
        case "date-range":
            if end_date is None:
                command = f"bash start_jobs.sh --start_date {start_date}"
            elif start_date is None:
                command = f"bash start_jobs.sh --end_date {end_date}"
            else:
                command = f"bash start_jobs.sh --start_date {start_date} --end_date {end_date}"
        case "ytd":
            command = "bash start_jobs.sh --year-to-date"
        case "last-month":
            command = "bash start_jobs.sh --last_month"
    return {"command": command}


@app.get("/<path:path>")
def static_folder(path):
    return send_from_directory(STATIC_FOLDER, path)


@app.get("/favicon.ico")
def public_folder():
    return send_from_directory(PUBLIC_FOLDER, "favicon.ico")


if __name__ == "__main__":
    app.run()
