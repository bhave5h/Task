from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# -----------------------------
#  DATABASE CONNECTION FUNCTION
# -----------------------------
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",   # Default for Wamp
            database="task"
        )
        return conn
    except Error as e:
        print("DB Connection Error:", e)
        return None
    
# -----------------------------
#       CREATE TASK API
# -----------------------------
@app.post("/create-task")
def create_task():
    data = request.json

    title = data.get("title")
    description = data.get("description")
    category = data.get("category")
    assigned_to = data.get("assigned_to")
    due_date = data.get("due_date")
    created_by = data.get("created_by")

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "DB connection failed"}), 500

    cursor = conn.cursor()

    query = """
        INSERT INTO tasks 
        (title, description, category, assigned_to, due_date, created_by)
        VALUES (%s, %s, %s, %s, %s, %s)
    """

    cursor.execute(query, (title, description, category, assigned_to, due_date, created_by))
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "Task created successfully"}), 201

@app.get("/employees")
def get_employees():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "DB connection failed"}), 500

    cursor = conn.cursor(dictionary=True)
    query = "SELECT username FROM users WHERE role = 'employee' AND is_active = 1"
    cursor.execute(query)
    employees = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(employees)

@app.get("/tasks/<username>")
def get_tasks_for_employee(username):
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "DB connection failed"}), 500

    cursor = conn.cursor(dictionary=True)
    query = "SELECT * FROM tasks WHERE assigned_to = %s"
    cursor.execute(query, (username,))
    tasks = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify(tasks)
# -----------------------------
#        RUN FLASK APP
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)
