//BUDGET CONTROLLER
var budgetController = (function() {

    
    
})()


//UI CONTROLLER
var UIController = (function(){
    // Some Code
})()


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function() {
        
        // 1. Get the field input data

        // 2. add the item to the budget controller
        
        // 3. add the item to the ui controller
        
        // 4. calculatet he budget
        
        // 5. display the budget on the ui
        
        console.log('It Works')
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem()          
        }
    })
    
})(budgetController, UIController)