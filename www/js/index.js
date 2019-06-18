var app = {

    appInit: function () {

        sap.ui.getCore().attachInit(function () {
            var oCompContainer = new sap.ui.core.ComponentContainer({
                height: "100%"
            })
            new sap.m.Shell({
                app: oCompContainer,
                showLogout: false
            }).placeAt("content");
            var oComponent = sap.ui.component({
                name: "com.test.login",
                manifestFirst: true,
                async: true
            }).then(function (oComponent) {
                oCompContainer.setComponent(oComponent);
            });
        });

        console.log("Inicio la aplicacion");
    },
    appReady: function () {
        $(".app").hide();
        this.appInit();
        //this.IniciarDB();
    },
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        let db = new Dexie('LoginTest');
        db.version(1).stores({
            users: '++id. user, name'
        })
        this.appReady();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();