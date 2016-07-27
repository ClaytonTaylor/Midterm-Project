angular.module('callTimeApp', ['ui.router'])
    .config(config);
    
    
    
    

function config ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './home/home.html',
            // leave commented out until added
            // controller: 'homeController as homeCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: './search/search.html',
            // controller active for drop down list
            controller: 'searchController as searchCtrl'
        })
        .state('list', {
            url: '/list',
            templateUrl: './list/list.html',
            // leave commented out until added
            // controller: 'listController as listCtrl'
        });
        $urlRouterProvider.otherwise('/home');
        
}


//=============================Library of Dummy Data================================

/*
var castingDirector = [
    {
        Name:"Kyle Glass",
        Gender: "Male",
        Location: ["Oklahoma City", "Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Daulton Brown",
        Gender: "Male",
        Location: ["Edmond", "Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Beau Palmer",
        Gender: "Male",
        Location: ["Oklahoma City", "Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },

]

var director = [
    {
        Name:"Bunee Tomilson",
        Gender: "Male",
        Location: ["Moore","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Sam Pemberton",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Matthew Stevens",
        Gender: "Male",
        Location: ["Boulder","Colorado"],
        Experience: "Amatuer",
        Equipment: []
    },
    
]

var  firstAssistantDirector("1st A.D.") = [
    {
        Name:"Nick Brown",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Josh Bergevin",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Dyln Phillips",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
    
var   secondAssistantDirector("2nd A.D.") = [
    {
        Name:"Josh Castro",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Slate"]
    },
    {
        Name:"David Jennings",
        Gender: "Male",
        Location: ["Stillwater","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Slate"]
    },
    {
        Name:"Ryan Hunter",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Slate"]
    }
    ]

var  CinematographerDirectorofPhotography ("DP") = [
    {
        Name:"Sam Taylor",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Blackmagic 4K"]
    },
    {
        Name:"Forrest Mankins",
        Gender: "Male",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Sony A7s"]
    },
    {
        Name:"Andy Taylor",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Canon 5D Mk3"]
    }
    ]
var  Camera Operator = [
    {
        Name:"Andrew Winn",
        Gender: "Male",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Professional",
        Equipment: [Canon 5D Mk2]
    },
    {
        Name:"Jordan Winn",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: [Canon 6D]
    },
    {
        Name:"Noah Sampsel",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["RED Epic"]
    }
    ]
var  1st Assistant Camera (1st A.C.) = [
    {
        Name:"Jeff Gunnell",
        Gender: "Male",
        Location: ["Moore","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Lance McDaniel",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Tim Ryan",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  2nd Assitant Camera (2nd A.C.) = [
    {
        Name:"Rebekah Lee",
        Gender: "Female",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Jane Rupp",
        Gender: "Female",
        Location: ["Edmond","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Ben Rupp",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Gaffer = [
    {
        Name:"Michael Matti",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Standard Lighting Kit"]
    },
    {
        Name:"Larry Gunnell",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Small Lighting Kit"]
    },
    {
        Name:"Carter Cox",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Standard Lighting Kit"]
    }
    ]
var  Best Boy (lighting) = [
    {
        Name:"Hannah Lee",
        Gender: "Female",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Aaron Mowery",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Carsyn Abrams",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Lighting Technician = [
    {
        Name:"Jacob Calhoon",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Ash Aragona",
        Gender: "Male",
        Location: ["Moore","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Alex Gillingham",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Grip = [
    {
        Name:"Ryan King",
        Gender: "Male",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Gloves"]
    },
    {
        Name:"Daylen Hoffman",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Gloves"]
    },
    {
        Name:"Alex Rodriguez",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Key Grip = [
    {
        Name:"Zak Coker",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Gloves"]
    },
    {
        Name:"Brenton Little",
        Gender: "Male",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Gloves", "Lighting Kit"]
    },
    {
        Name:"Porsha Keller",
        Gender: "Female",
        Location: ["Oklahoma City"," Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Gloves"]
    }
    ]
var  Dolly Grip = [
    {
        Name:"Davis Simmons",
        Gender: "Male",
        Location: ["Shawnee","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Jake Blalock",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jeremiah Cowan",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Grips (Report to Key Grip) = [
    {
        Name:"Fransua Durazo",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Gloves"]
    },
    {
        Name:"Ceara Euliss",
        Gender: "Female",
        Location: ["Mustang","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Will Gaines",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Gloves"]
    }
    ]

var  Sound Mixer = [
    {
        Name:"Tony Cox",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Sound Cancelling Headphones"]
    },
    {
        Name:"Keaton Nye",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Sound Cancelling Headphones", "Mixer"]
    },
    {
        Name:"Dustin Harris",
        Gender: "Male",
        Location: ["Moore","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Headphones"]
    }
    ]
var  Boom Operator = [
    {
        Name:"Allie Jeffers",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Boom Pole", "Microphone"]
    },
    {
        Name:"Derek Nguyen",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: ["Microphone"]
    },
    {
        Name:"Riley Cole",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]

var  Production Designer = [
    {
        Name:"Kristen Lee",
        Gender: "Female",
        Location: ["Shawnee","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Bryan Daugherty",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Justin Smith",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]

var  Art Director = [
    {
        Name:"Katie Romano",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Eric Lyons",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Preston Kunz",
        Gender: "Male",
        Location: ["Moore","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Set Designer = [
    {
        Name:"Jordan Moore",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Andrew Burkhart",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jameson Ballinger",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Illustrator = [
    {
        Name:"Hunter Youngblood",
        Gender: "Female",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Chris Fields",
        Gender: "Male",
        Location: ["Clinton","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Drew Davis",
        Gender: "Male",
        Location: ["Seattle","Washington"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Set Decorator = [
    {
        Name:"Clint Gilliam",
        Gender: "Male",
        Location: ["Dallas","Texas"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Kylie Brown",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Tim Landis",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Lead Man = [
    {
        Name:"Hailey Joyner",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Bailey Hartman",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Gian Campanon",
        Gender: "Male",
        Location: ["Kansas City","Missouri"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Set Dresser = [
    {
        Name:"Kelsey Saunders",
        Gender: "Female",
        Location: ["Yukon","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Joel Nichols",
        Gender: "Male",
        Location: ["Dallas","Texas"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Katie Best",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Construction Coordinator = [
    {
        Name:"John Ortiguero",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Dylan Vance",
        Gender: "Male",
        Location: ["Denver","Colorado"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Uy Le",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Head Carpenter = [
    {
        Name:"Preston Taylor",
        Gender: "Male",
        Location: ["Salt Lake City","Utah"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Kyle Ko",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Ashten Marting",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Carpenter = [
    {
        Name:"Daniel Mudliar",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Andrew McCoy",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Eric Stults",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Costume Designer = [
    {
        Name:"Morgan Dickenson",
        Gender: "Female",
        Location: ["Edmond","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Carla Gunderman",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Shelby Love",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Costume Supervisor = [
    {
        Name:"Brandi Yates",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Sara Whitton",
        Gender: "Female",
        Location: ["Edmond","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Emily Frazier",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Costumer = [
    {
        Name:"Sarah Tran",
        Gender: "Female",
        Location: ["Seattle","Washington"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Krista Seeley",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Carly Bush",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Key Make-Up Artist = [
    {
        Name:"Lauren Palmer",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Make-Up Truck"]
    },
    {
        Name:"Sarah Hiles",
        Gender: "Female",
        Location: ["Denver","Colorado"],
        Experience: "Professional",
        Equipment: ["Make-Up Truck"]
    },
    {
        Name:"Ellen Fields",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Make-Up Truck"]
    }
    ]
var  Make-Up Artist = [
    {
        Name:"Elizabeth Rush",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Kando Roush",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Rachel Petillo",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Special Effects Supervisor = [
    {
        Name:"Jonathan Burkhart",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["SFX Equipment"]
    },
    {
        Name:"Cole Christiansen",
        Gender: "Male",
        Location: ["Denver","Colorado"],
        Experience: "Professional",
        Equipment: ["SFX Equipment"]
    },
    {
        Name:"Blake Tinkle",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["SFX Equipment"]
    }
    ]
var  Hair Stylist = [
    {
        Name:"Marissa Capra",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Ashley Fravert",
        Gender: "Female",
        Location: ["Moore","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Ashlee Lum",
        Gender: "Female",
        Location: ["Oklahoma City"," Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]

var  Stunt Coordinator = [
    {
        Name:"Britton Cox",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Noah Livingston",
        Gender: "Male",
        Location: ["Dallas","Texas"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Tim Singleton",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Stuntman = [
    {
        Name:"Kevin Dao",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jeff Nine",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Zach Wren",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]

var  Film Editor = [
    {
        Name:"Kara Kliewer",
        Gender: "Female",
        Location: ["Edmond","Oklahoma"],
        Experience: "Professional",
        Equipment: ["iMac"]
    },
    {
        Name:"Dylan Black",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["iMac"]
    },
    {
        Name:"Aaron Newberry",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: ["Mac Pro"]
    }
    ]
var  Visual Effects Producer = [
    {
        Name:"Wincent Crabeo",
        Gender: "Male",
        Location: ["Seattle","Washington"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Joel Cox",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Parker Slack",
        Gender: "Male",
        Location: ["Tulsa","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]

var  Sound Designer = [
    {
        Name:"Sam Elkins",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Catie Parsons",
        Gender: "Female",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Nate Jarboe",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Sound Editor = [
    {
        Name:"Matthew Yarnell",
        Gender: "Male",
        Location: ["Dallas","Texas"],
        Experience: "Amatuer",
        Equipment: []
    },
    {
        Name:"Travis Warren",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Paul Tellefsen",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
var  Music Supervisor = [
    {
        Name:"Austin Borjas",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jordan Nelon",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jonathan Baez",
        Gender: "Male",
        Location: ["Norman","Oklahoma"],
        Experience: "Amatuer",
        Equipment: []
    }
    ]
var  Composer = [
    {
        Name:"Hope Risher",
        Gender: "Female",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Salem Gullo",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    },
    {
        Name:"Jacob Fernandez",
        Gender: "Male",
        Location: ["Oklahoma City","Oklahoma"],
        Experience: "Professional",
        Equipment: []
    }
    ]
    */

//========================= Library of Dummy Data=======================