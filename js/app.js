// Initialize your app
var myApp = new Framework7({
        modalTitle: 'Groove Guide',
        material: true,
        pushState : true
    });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


myApp.onPageInit('gallery',function(page){
        $$(".img-responsive").on('click',function(e){
            e.preventDefault();
            var src = $$(this).attr('src');
            var href = "<img src='"+src+"' class='img-responsive2'>";
            myApp.alert(href);
        });
    });
