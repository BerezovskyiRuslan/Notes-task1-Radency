export default class CreateNotes {
    constructor(create = true, category = [], elem = document.body,
        data = {
            name: '',
            icon: '',
            categoty: '',
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

    // getValue() {
    //     let date = new Date();
    //     let month = date.toLocaleString('en-US', {month: 'long'});
    //     let day = date.getDate();
    //     let year = date.getFullYear();
    //     let title = document.getElementById('createTitile').value || '';
    //     let category = document.getElementById('create-category') || '';
    //     let dates = document.getElementById('create-dates') || '';
    //     let content = document.getElementById('create-content').value || '';

    //     return {
    //         title: title,
    //         category: category,
    //         dates: dates,
    //         content: content,
    //         created: `${month} ${day}, ${year}`,
    //         archive: false,
    //         icon: ''
    //     } 
    // }

    getCategotyTemplate() {
        let options = '';

        for (let i = 0; i < this.category.length; i++) {
            options += `<option value="${this.category[i].name}">${this.category[i].name}</option>`;
        }

        return `<select class="container-create-item-select" id="">
                    ${options}
                </select>`;
    }

    getCreatOrEditTemplate() {
        let title = this.create ? "Create New Note" : "Edit";
        let category = this.getCategotyTemplate();

        return `<div class="container-create">
                    <h1 class="container-create-title">${title}</h1>
                    <div class="container-create-item">
                        <label class="container-create-item-label" for="select-category">Category</label>
                        ${category}
                    </div>
                    <div class="container-create-item">
                        <h3 class="container-create-item-title">Calendar</h3>
                        <div>
                            <label class="container-create-item-label-date" for="with">From what date</label>
                            <input class="container-create-item-input-date" type="date" value="2012-04-10" />
                            <label class="container-create-item-label-date" for="to">By what number</label>
                            <input class="container-create-item-input-date" type="date" value="2012-04-10" />
                        </div>
                    </div>
                    <div class="container-create-item">
                        <textarea class="container-create-item-textarea" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button class="button-create">Add new notes</button>
                </div>`
    }

    renderCreateOrEditNote() {
        let render = this.getCreatOrEditTemplate();

        elem.innerHTML += render;
    }
}