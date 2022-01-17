export default class Footer {
    constructor(data, category) {
        this.data = data;
        this.category = category;
    }

    counterCondition() {
        let condition = {};

        for (let i = 0; i < this.category.length; i++) {
            
            condition[this.category[i].name] = {
                name: this.category[i].name,
                icon: this.category[i].icon,
                active: 0,
                archive: 0
            };
            
            for (let j = 0; j < this.data.length; j++) {
                
                if (this.data[j].category === this.category[i].name) {
                    
                    if (this.data[j].archive) {
                        
                        condition[this.category[i].name]['archive'] += 1;
                        
                        continue;
                    }
                    
                    condition[this.category[i].name]['active'] = condition[this.category[i].name]['active'] + 1
                }
            }
        }

        return condition;
    }

    getTemplate(data) {
        return `<div class="content-list-notes-item">
                    <div class="w-50 first-content-position content-list-notes-item-text ">
                        ${data.icon}
                        <span class="content-list-notes-item-text-span">${data.name}</span>
                    </div>
                    <div class="w-25 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">${data.active}</span>
                    </div>
                    <div class="w-25 content-list-notes-item-text">
                        <span class="content-list-notes-item-text-span">${data.archive}</span>
                    </div>
                </div>`
    }

    getFooterList() {
        let condition = this.counterCondition();
        
        let keys = Object.keys(condition);
        console.log(condition);
        let result = '';

        for (let i = 0; i < keys.length; i++) {
            result += this.getTemplate(condition[keys[i]]);
        }

        return result
    }
}