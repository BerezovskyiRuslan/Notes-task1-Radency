export default class CreateNotes {
    constructor(create = true, category = [], elem = document.body,
        data = {
            id: '',
            name: '',
            icon: '',
            category: '',
            dates: [],
            dates: [],
            content: '',
            created: '',
            archive: false
        }
    ) {
        this.data = data;
        this.create = create;
        this.category = category;
        this.elem = elem;
    }                                   
    getCategotyTemplate(category) {
        let options = '';
        let index = 0;
        if (category.length) {
            this.category.forEach((item, idx) => {
                if (item.name === category) {
                    index = idx
                }
            })
        }

        for (let i = 0; i < this.category.length; i++) {
            if (i == index) {
                options += `<option value="${this.category[i].name}" selected>${this.category[i].name}</option>`;
                continue;
            }
            options += `<option value="${this.category[i].name}">${this.category[i].name}</option>`;
        }

        return `<select class="container-create-item-select" id="select-create-note">
                    ${options}
                </select>`;
    }

    getCreatOrEditTemplate() {
        let form = this.create ? { 
            title: "Create New Note",
            name: "Add new note",
            id: "create-new-note"
        } : {
            title: "Edit",
            name: "Save edit note",
            id: "save-edit-note"
        };
        
        let category = this.getCategotyTemplate(this.data.category);

        return `<div class="container-create">
                    <h1 class="container-create-title">
                        ${form.title}
                        <button id="close-form">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </h1>
                   <div class="container-create-item">
                        <label class="container-create-item-label" for="name-category">Title</label>
                        <input type="text" id="name-create-note" value="${this.data.name}" />
                    </div>
                    <div class="container-create-item">
                        <label class="container-create-item-label" for="select-category">Category</label>
                        ${category}
                    </div>
                    <!--<div class="container-create-item">
                        <h3 class="container-create-item-title">Calendar</h3>
                        <div>
                            <label class="container-create-item-label-date" for="with-calendar-create-note">From what date</label>
                            <input class="container-create-item-input-date" id="with-calendar-create-note" type="date" value="2012-04-10" />
                            <label class="container-create-item-label-date" for="from-calendar-create-note">By what number</label>
                            <input class="container-create-item-input-date" id="from-calendar-create-note" type="date" value="2012-04-10" />
                        </div>
                    </div>-->
                    <div class="container-create-item">
                        <textarea class="container-create-item-textarea" name="" id="content-create-note" cols="30" rows="10">${this.data.content}</textarea>
                    </div>
                    <button class="button-create" id="${form.id}" name="${this.data.id}">${form.name}</button>
                </div>`
    }

    renderCreateOrEditNote() {
        let render = this.getCreatOrEditTemplate();

        elem.innerHTML += render;
    }
}