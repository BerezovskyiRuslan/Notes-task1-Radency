export default class NoteListTemplate {

    constructor(data, archive) {
        this.data = data;
        this.archive = archive;
    // constructor(id, name, icon, created, category, content, dates) {
        // this.id = id;
        // this.name = name;
        // this.icon = icon;
        // this.created = created;
        // this.category = category;
        // this.content = content;
        // this.dates = dates;
    }

    getTemplate(data) {
        return `<div class="content-list-notes-item">
                    <div class="w-16 first-content-position content-list-notes-item-text">
                        ${data.icon}
                        <span class="content-list-notes-item-text-span">
                        ${data.name}
                        </span>
                    </div>
                    <div class="w-16 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">
                            ${data.created}
                        </span>
                    </div>
                    <div class="w-16 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">
                        ${data.category}
                        </span>
                    </div>
                    <div class="w-16 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">
                            ${data.content}
                        </span>
                    </div>
                    <div class="w-16 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">
                            ${data.dates}
                        </span>
                    </div>
                    <div class="w-16 content-list-notes-item-text">
                        <button class="content-list-notes-item-actions-button edit-note" name="${data.id}" title="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="content-list-notes-item-actions-button-icon"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                        </button>
                        <button onClick="testings(${data.id})" name="${data.id}" class="add-archive content-list-notes-item-actions-button" title="Add Archive">
                            <svg xmlns="http://www.w3.org/2000/svg" class="content-list-notes-item-actions-button-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fill-rule="evenodd"
                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button name="${data.id}" class="content-list-notes-item-actions-button delete-item" title="Delete">
                            <svg xmlns="http://www.w3.org/2000/svg" class="content-list-notes-item-actions-button-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>`
    }

    getNotesList() {
        console.log(this.archive);
        let notes = this.data.filter(item => item.archive === this.archive);
        console.log(this.data);
        console.log(notes);
        let result = '';

        for (let i = 0; i < notes.length; i++) {
            result += this.getTemplate(notes[i]);
        }

        return result;
    }
    
}