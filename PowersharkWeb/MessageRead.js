var app = angular.module('PowersharkApp', ['ngMaterial'], function ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '400',
        });
});

app.controller('PowersharkCtrl', function ($scope, $mdToast, $log) {
   

    var config = {
        apiKey: "AIzaSyA06iUNo3z1cw2N_vg9w3EtxFaMP5647f8",
        authDomain: "powershark-9df9f.firebaseapp.com",
        projectId: "powershark-9df9f",
        appId: "1:657128778529:web:7af626c2f4aad4f8ec2c60"
    };

    //apiKey: "AIzaSyA06iUNo3z1cw2N_vg9w3EtxFaMP5647f8",
    //    authDomain: "powershark-9df9f.firebaseapp.com",
    //        projectId: "powershark-9df9f",
    //            storageBucket: "powershark-9df9f.appspot.com",
    //                messagingSenderId: "657128778529",
    //                    appId: "1:657128778529:web:7af626c2f4aad4f8ec2c60",
    //                        measurementId: "G-2Y0DGBCB2B"
  
    firebase.initializeApp(config);

    Office.onReady(function () {


        $scope.googleLogin = function () {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function (result) {
                    // Successful login
                    var user = result.user;
                    console.log(user);


                    $scope.profilePic = user.photoURL;

                    // Perform any necessary actions
                })
                .catch(function (error) {
                    // Handle login error
                    console.error(error);
                });
        };



        $scope.Firebase = function () {

           

          // var auth = firebase.auth();

           

        };

        $scope.secoundCall = function () {

            const user = auth.signInWithEmailAndPassword('your_email_address', 'your_password');
            console.log(user);
        };




        item = Office.context.mailbox.item;

        console.log(item.start);

        //function getStartTime() {
        //    item.start.getAsync(
        //        function (asyncResult) {
        //            if (asyncResult.status == Office.AsyncResultStatus.Failed) {
        //                write(asyncResult.error.message);
        //            }
        //            else {
        //                // Successfully got the start time, display it, first in UTC and 
        //                // then convert the Date object to local time and display that.
        //                write('The start time in UTC is: ' + asyncResult.value.toString());
        //                write('The start time in local time is: ' + asyncResult.value.toLocaleString());
        //            }
        //        });
        //}





    });

    



    function ProgressLinearActive() {
        $("#StartProgressLinear").show(function () {

            $("#ProgressBgDiv").show();
            $scope.ddeterminateValue = 15;
            $scope.showProgressLinear = false;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        });
    };
    function ProgressLinearInActive() {
        $("#StartProgressLinear").hide(function () {
            setTimeout(function () {
                $scope.ddeterminateValue = 0;
                $scope.showProgressLinear = true;
                $("#ProgressBgDiv").hide();
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }, 500);
        });
    };
    function loadToast(alertMessage) {
        var el = document.querySelectorAll('#zoom');
        $mdToast.show(
            $mdToast.simple()
                .textContent(alertMessage)
                .position('bottom')
                .hideDelay(4000))
            .then(function () {
                $log.log('Toast dismissed.');
            }).catch(function () {
                $log.log('Toast failed or was forced to close early by another toast.');
            });
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };

});