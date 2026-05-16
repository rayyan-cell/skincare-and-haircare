class ReminderApp {
    constructor() {
        this.reminders = this.loadReminders();
        this.form = document.getElementById('reminderForm');
        this.remindersList = document.getElementById('remindersList');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.renderReminders();
    }

    loadReminders() {
        const stored = localStorage.getItem('reminders');
        return stored ? JSON.parse(stored) : [];
    }

    saveReminders() {
        localStorage.setItem('reminders', JSON.stringify(this.reminders));
    }

    handleSubmit(e) {
        e.preventDefault();

        const title = document.getElementById('reminderTitle').value.trim();
        const dueDate = document.getElementById('reminderDate').value;

        if (!title || !dueDate) return;

        const reminder = {
            id: Date.now(),
            title: title,
            dueDate: new Date(dueDate).toISOString(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.reminders.push(reminder);
        this.saveReminders();
        this.renderReminders();
        this.form.reset();
    }

    sortReminders() {
        return this.reminders.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    }

    getStatus(reminder) {
        if (reminder.completed) return 'completed';
        const now = new Date();
        const dueDate = new Date(reminder.dueDate);
        return dueDate < now ? 'overdue' : 'upcoming';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    }

    toggleComplete(id) {
        const reminder = this.reminders.find(r => r.id === id);
        if (reminder) {
            reminder.completed = !reminder.completed;
            this.saveReminders();
            this.renderReminders();
        }
    }

    deleteReminder(id) {
        this.reminders = this.reminders.filter(r => r.id !== id);
        this.saveReminders();
        this.renderReminders();
    }

    renderReminders() {
        if (this.reminders.length === 0) {
            this.remindersList.innerHTML = '<p class="empty-state">No reminders yet. Create one above!</p>';
            return;
        }

        const sortedReminders = this.sortReminders();

        this.remindersList.innerHTML = sortedReminders.map(reminder => {
            const status = this.getStatus(reminder);
            const statusClass = `status-${status}`;
            const completedClass = reminder.completed ? 'completed' : '';

            return `
                <div class="reminder-card ${completedClass}">
                    <div class="reminder-header">
                        <h3 class="reminder-title">${this.escapeHtml(reminder.title)}</h3>
                    </div>
                    <p class="reminder-date">Due: ${this.formatDate(reminder.dueDate)}</p>
                    <span class="reminder-status ${statusClass}">
                        ${status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                    <div class="reminder-actions">
                        <button class="btn btn-complete" onclick="app.toggleComplete(${reminder.id})">
                            ${reminder.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button class="btn btn-delete" onclick="app.deleteReminder(${reminder.id})">
                            Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

const app = new ReminderApp();
