
var app = new function() {
    this.el= document.getElementById('dishes');

    this.dishes=[]



    this.FetchAll = function() {
        var data = '';

        if(this.dishes.length>0){
            for(i=0;i<this.dishes.length;i++){
                data += '<tr>';
                data += '<td>'+(i+1)+'. '+this.dishes[i]+'</td>';
                data += '<td><button onclick="app.Edit(' + i + ')" class="editButton">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')" class="deleteButton">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.dishes.length);
        return this.el.innerHTML = data
    };

    this.Add = function (){
        el = document.getElementById('add-todo');
        // Get the value
        var dish = el.value;

        if(dish.indexOf("English") > -1 || dish.indexOf("english") > -1 || dish.indexOf("ENGLISH") > -1 || dish.indexOf("British") > -1 || dish.indexOf("BRITISH") > -1 || dish.indexOf("british") > -1) {
            alert("Oi 'ello gobnah, we refuse to add such grub to this lis'. ");
            return;
        }

        if(dish){
            // Add the new value
            this.dishes.push(dish.trim());
            // Reset input value
            this.el.value='';
            // Display the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var el = document.getElementById('edit-todo');
        // Display value in the field
        this.el.value = this.dishes[item]
        // Display fields
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            // Get value
            var dish = el.value;

            if (dish) {
                // Edit value
                self.dishes.splice(item, 1, dish.trim())
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };

    this.Delete = function(item){
        this.dishes.splice(item, 1)
        this.FetchAll();
    };

    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'dishes';
        if(data){
            if(data == 1){
                name = 'dish';
            }
            el.innerHTML = data+' '+name;
        }
        else{
            el.innerHTML = "No "+ name; 
        }
    };


}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}