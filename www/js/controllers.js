angular.module('starter.controllers', [])


   .controller('TestCtrl', ['$scope',function($scope) {

   $scope.clicked = function(){
        alert("Your Superhero successfully submitted.");
    }
}])
.controller('MyCtrl', function($scope) {
  
  
  $scope.quetions = [
     'How much is the registration fee?',
     'What all do I get as part of the registration?',
     'Are accommodation charges different from the registration charge?',
     'I can come only during day 2 of Solstice. Do I still need to pay the entire registration fee?',
     'What is the fee for on-the-spot registration?',
     'How many of my class mates are coming?',
     'What if I have been overcharged for my accomodation?',
     'Can I get my friends who are not alumni of the school for Solstice?',
     'Who is the key note speaker?',
     'Which band is playing?',
     'Are there any activities/events for my spouse/kids?',
     'I do not drink, which events/activities will be of interest to me?',
     'None of the events interests me, why should I come?',
     'Can I get accommodation in campus? (EH, studio, quad?)',
     'How many people can stay in a quad room?',
     'What are the tarrifs for the same?',
     'My friend and I have registered separately. Can we be put in adjacent rooms?',
     'Can the outside guests be accommodated in the campus itself?',
     'What are the alternate accommodation arrangements in case I do not accommodation in campus?',
     'Logistics and travel partners?',
     'What are the hotel tariffs?'
  ]

  $scope.answers = [ 'Alum - 2,500 INR Spouse - 2,000 INR Significant other - 2,000 INR Child - 700 INR',
                        'Food coupons and few other goodies',
                        'Yes, it is. Accommodation is provided by ISB (based on the time of request for accommodation (FCFC)) and external hospitality partners and respective tariffs would apply',
                        'Yes you do since we block the quad/studio for you which cannot be given to anyone else just for the third day. We also need to inform the catering vendor about the food as per which we block the money with him.',
                        'Alum - 3,500 INR Spouse - 2,500 INR Significant other - 2,500 INR Child - 700 INR We provide concession for the Early-bird registrations',
                        'We would keep sharing the updated list with you',
                        'The Alumni office is ensuring that everyone is charged the right amount for accommodation (2 nights) and is personally getting in touch with every alumnus who has been overcharged. The refund process for the same will be initiated post Solstice.',
                        'Solstice is an alumni event only for ISB students so unfortunately it is meant only for ISB students and their spouses, parents & kids.',
                        'We are still deciding on the key note speaker. Last year we had Shashi Tharoor so it would be somebody of his stature.',
                        'We are in talks with the guys from Coke Studio – the flavor of the current season.',
                        'Of course! Like mentioned earlier, Solstice is for ISB students families, so there would be events for kids and spouses. Not to worry!',
                        'Plenty of events. You were part of ISB so you know Solstice is more than alcohol! We have band performances, networking sessions, key note speaker sessions, Deans dinner, stand up comedy, treasure hunt, sports.',
                        'Its Solstice! You get to meet your classmates, professors, the Dean and the new Dean, current class and AIKYA families. The spirit of Solstice lies in connecting with your classmates and Alma mater after a really long time. Trust us and come for Solstice, you will not regret it!',
                        'Campus accommodation is available on first-come, first-serve basis. What are you waiting for? Sign up now.',
                        'Alumni can choose between a single quad or quad sharing with alum',
                        'Quad sharing with alum – 1500/day Single Quad – 3000/day',
                        'We will try our best to accommodate the both of you in adjacent rooms.',
                        'Only parents, spouses & kids allowed to attend events so they would be staying with the alumnus on campus if we can accommodate everyone',
                        'Our hospitality partners Holiday Inn, Ella Hotels and Oyo rooms provide luxurious stay at a discounted price',
                        'Yes!  Jet Airways is offering a 10% discount to all homecoming ISB heroes. Use the coupon code given below to avail the 10% discount. Coupon is valid for air-travel taken between 16th to 22nd December. Coupon Code:  9WISBHYD15',
                        'Holiday Inn, Gachibowli Superior Room Single occupancy: Rs 3300 + Taxes Double occupancy: Rs 3800 + Taxes. The above rate is inclusive of the following:  1. Complimentary Express Breakfast in the Great Room. 2. Option of Complementary Grab N Go Breakfast. 3. Complimentary 24hrs High Spped Wi-Fi. 4. Stay connected to WiFi (in cab) while you travel. 5. Two ways transfers to Indian School of Business. 6. 10% discount at Jonathans Kitchen & Komatose Pub Features and benefits. 7. Standard check in time: 14:00 Hrs and standard check-out; 12:00 Hrs. 8. Complimentary Tea/coffee making facilities in the room. 9. I-pod docking station and mini-fridge (stock it up as per your choice). 10. Complimentary use of fitness centre. 11. In-room safe and "32" inch LED Television. 12. Power shower and hairdryer in the bathroom. 13. Choice of soft and firm pillows on comfortable bedding. 14. Ergonomic work area. Ella Suites, Gachibowli Superior Room Single/ Double Occupancy @ Rs. 3,500/ 4500 + Taxes (15.91%) with Breakfast Single/Double Occupancy @ Rs. 3,200/ 4200 + Taxes (15.91%) without Breakfast. The above rate is inclusive of the below: 1. Complimentary usage of Swimming pool. 2. Complimentary usage of Gym. 3. Complimentary Mineral water bottle in the room. 4. Complimentary Cookies in the Room. 5. 15% discount on all Spa Services. 6. Complimentary Wi-Fi in the room. 7. 2 Way ISB transfers complimentary.Please contact Mr. Uday Chandra at +91 8008402550 or via email at asm@ellaahotels.com for the booking. Other Accommodation: Book any OYO rooms in Hyderabad and avail a flat 30% discount specially for Solstice attendees. Simply use the code OYOISB to redeem. Terms & conditions: 1. Maximum discount value is Rs. 1000. 2. Minimum qualifying amount is Rs 1499. 3. Applicable on bookings through the mobile app and website only. 4. Coupon valid till Nov 30th, 2015 only. 5. Valid for check ins till 31st December 2015 only. 6. Coupon valid for maximum usage by one person only.'
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
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
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
