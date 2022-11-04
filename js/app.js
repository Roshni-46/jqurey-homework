$(function(){
    let serach = $('.search')
    let input = $('.menu .input')
    let deleteIcon = $('.menu .delete i')
    
    serach.click(function(){
        input.show(300)
deleteIcon.show(300)  

    });
    deleteIcon.click(function(){
        input.hide(300)
        deleteIcon.hide(300)

    })
 
})