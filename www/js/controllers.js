angular.module('starter.controllers', [])

.controller('MyCtrl', function($scope) {
  
  
  $scope.quetions = [
     'How much is the registration fee?',
     'What all I get as part of the registration?',
     'Are accommodation charges different from the registration charge?',
     'I can come only during day 2 of Solstice. Do I still need to pay the entire registration fee?',
     'What is the fee onthe spot registration?',
     'How many of my mates are coming?',
     'What I have been overcharged my accomodation?',
     'Can I get my friends who are not alumni of the school Solstice?',
     'Who is the key note speaker?',
     'Which band is playing? }',
     'Are there any activities/events my spouse/kids?',
     'I not drink, which events/activities will be of interest to me?',
     'None of the events interests me, why should I come?',
     'Can I get accommodation campus? (EH, studio, quad?)',
     'How many people can stay a quad room?',
     'What are the tarrifs the same?',
     'My friend and I have registered separately. Can we be put adjacent rooms?',
     'Can the outside guests be accommodated the campus itself?',
     'What are the alternate accommodation arrangements I not accommodation campus?',
     'Logistics and travel partners?',
     'What are the hotel tariffs?'
  ]

  $scope.answers = [ 'Expected to be around 2.5 k – 3k',
                        'Food coupons and few other goodies',
                        'Yes, it is. Accommodation is provided by ISB and external hospitality partners and respective tariffs would apply',
                        'Yes you do since we block the quad/studio for you which cannot be given to anyone else just for the third day. We also need to inform the catering vendor about the food as per which we block ',
                        'Expected to be around 3K. We provide concession for the Early-bird registrations',
                        'We would keep sharing the updated list with you',
                        'Solstice is an alumni event only for ISB students so unfortunately it is meant only for ISB students and their spouses, parents & kids'
                        ];

                        $scope.groups = [];
  for (var i=0; i<21; i++) {
    $scope.groups[i] = {
      name: $scope.quetions[i],
      items: []
    };
    
    for (var j=0; j<1; j++) {
      // $scope.groups[i].items.push(i + 'adsfasdfasdfasdfasdfasdf' + j);
      $scope.groups[i].items.push( $scope.answers[i] );
    }
  }
});

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
