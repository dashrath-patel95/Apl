// ============================================
// APL TOURNAMENT DATA
// All villages, teams, and players stored here
// ============================================

const aplData = {
    // All 11 villages with their teams
    villages: [
        {
            id: 1,
            name: "Aaldi",
            icon: "🏛️",
            teams: [
                {
                    id: 1,
                    name: "Aanjana Royal Warriors Aaldi",
                    captain: "Naveen",
                    players: [
                        "Naveen (C)",
                        "Raju",
                        "Ramesh",
                        "Jaisa",
                        "Madha Ram",
                        "Naveen",
                        "Khimaram",
                        "Bhawar Lal",
                        "Hitesh",
                        "Pura Ram",
                        "Ramaram",
                        "Harsan",
                        "Khimaram Bag",
                        "Vardha Ram",
                        "Narsa Ram"
                    ]
                },
                {
                    id: 2,
                    name: "Kalbi Super Kings Aaldi",
                    captain: "Vinod",
                    players: [
                        "Vinod (C)",
                        "Jabra Ram (VC)",
                        "Ashok R",
                        "Mukesh",
                        "Ashok Malvi",
                        "Ajay",
                        "Ramesh",
                        "Mangilal",
                        "Kamlesh",
                        "Jitendra",
                        "Paras",
                        "Naresh",
                        "Ashok Muji",
                        "Dayaram",
                        "Okesh"
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Pawli",
            icon: "⚔️",
            teams: [
                {
                    id: 3,
                    name: "Aanjana Tiger Force (ATF)",
                    captain: "Karan",
                    players: [
                        "Karan (C)",
                        "Dinesh (VC)",
                        "Lalit",
                        "Dinu",
                        "Bhavesh",
                        "Dr Patel",
                        "Ramesh",
                        "Mukesh",
                        "Dinesh",
                        "Ramu",
                        "Babulal",
                        "Kartaram",
                        "Vinod",
                        "Shrwan D",
                        "Shrwan"
                    ]
                },
                {
                    id: 4,
                    name: "Dudheshwar Kalbi King Pawli",
                    captain: "Ganesh",
                    players: [
                        "Ganesh (C)",
                        "Heeraram (VC)",
                        "Gigaram",
                        "Dinesh",
                        "Gopal Chand",
                        "Ravi",
                        "Suresh Kumar",
                        "Krishna",
                        "Jagdish",
                        "Ashok",
                        "Hotiram",
                        "Suresh Choudhary",
                        "Dinesh Choudhary",
                        "Karnaram",
                        "Kamlesh"
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Karlu",
            icon: "🔱",
            teams: [
                {
                    id: 5,
                    name: "Boteshwar Tiger Karloo (BTK)",
                    captain: "Ramesh",
                    players: [
                        "Ramesh (C)",
                        "Chhagna Ram (VC)",
                        "Raju",
                        "Gopal",
                        "Dinesh",
                        "Makna Ram",
                        "Laxman",
                        "Govind",
                        "Ravindra",
                        "Vardha Ram",
                        "Hitesh",
                        "Raju P",
                        "Mahendra",
                        "Tejpal",
                        "Karta Ram"
                    ]
                },
                {
                    id: 6,
                    name: "Kalbi King Karlu (KKK)",
                    captain: "Ramesh",
                    players: [
                        "Ramesh (C)",
                        "Rakesh (VC)",
                        "Mahendra",
                        "Chagna Ram",
                        "Karan",
                        "Mukesh",
                        "Praveen",
                        "Jitu Kodli",
                        "Naresh",
                        "Shrawan",
                        "Shrawan Hun",
                        "Jitu",
                        "Krishna",
                        "Bharat",
                        "Mahendra P"
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Gajeepura",
            icon: "🏹",
            teams: [
                {
                    id: 7,
                    name: "Gajeepura Royal",
                    captain: "Jitendra",
                    players: [
                        "Jitendra (C)",
                        "Prahlad (VC)",
                        "Dinesh S",
                        "Chela Ram",
                        "Arjun",
                        "Javana Ram",
                        "Shrawan A",
                        "Joita Ram",
                        "Rupa Ram",
                        "Khimaram",
                        "Laxman O",
                        "Dinesh A",
                        "Shrawan V",
                        "Laxman N"
                    ]
                },
                {
                    id: 8,
                    name: "Gajeepura Warriors (GW)",
                    captain: "Vardha Ram",
                    players: [
                        "Vardha Ram (C)",
                        "Ramesh (VC)",
                        "Hitesh",
                        "Taga Ram",
                        "Yaswant",
                        "Arjun",
                        "Mahadeva Ram",
                        "Krishna",
                        "Suresh",
                        "Raju",
                        "Ashok Kodli",
                        "Ashok",
                        "Gheva Ram",
                        "Khusal",
                        "Anil"
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Savidhar",
            icon: "🛡️",
            teams: [
                {
                    id: 9,
                    name: "Hanuman Warriors Savidhar (HWS)",
                    captain: "Himta Ram",
                    players: [
                        "Himta Ram (C)",
                        "Jaisa Ram (VC)",
                        "Laxman",
                        "Adra Ram",
                        "AK_47",
                        "Arjun",
                        "Ashok",
                        "Dinesh Choudhary",
                        "Dinesh N",
                        "Harsan",
                        "Jithu",
                        "Kishan",
                        "Mahendar",
                        "Manaram",
                        "Raja Ram"
                    ]
                },
                {
                    id: 10,
                    name: "Ramdev Champion Savidhar",
                    captain: "Harji Ram",
                    players: [
                        "Harji Ram (C)",
                        "Jasa Ram (VC)",
                        "Panna Ram",
                        "Harsan",
                        "Arvind",
                        "Sawla Ram",
                        "Mana Ram",
                        "Shrawan",
                        "Ganpat",
                        "Dinesh",
                        "Hitesh",
                        "Badha Ram",
                        "Aakash",
                        "Tarun",
                        "Rahul"
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "Kodi",
            icon: "🎯",
            teams: [
                {
                    id: 11,
                    name: "Kodi Super Kings (KK)",
                    captain: "Vishnu",
                    players: [
                        "Vishnu (C)",
                        "Achala Ram (VC)",
                        "Jabra Ram",
                        "Mula Ram",
                        "Lila Ram",
                        "Jitu Patel",
                        "Prakash",
                        "Ramesh",
                        "Dinesh",
                        "Raju",
                        "Tara Ram",
                        "Mula Ram C",
                        "Ashok",
                        "Okha Ram",
                        "Bharat"
                    ]
                }
            ]
        },
        {
            id: 7,
            name: "Khanpur",
            icon: "👑",
            teams: [
                {
                    id: 12,
                    name: "Royal Khanpur 11 (RK 11)",
                    captain: "Raju Choudhary",
                    players: [
                        "Raju Choudhary (C)",
                        "Vikash (VC)",
                        "Ashok",
                        "Bharat",
                        "Hitesh",
                        "Jitu",
                        "JR Choudhary",
                        "Mangilal",
                        "Mahendra",
                        "Narpat",
                        "Praveen",
                        "Ramesh",
                        "Shrawan D",
                        "Suresh B",
                        "Suraj"
                    ]
                }
            ]
        },
        {
            id: 8,
            name: "Dantlawas",
            icon: "⚡",
            teams: [
                {
                    id: 13,
                    name: "Royal Marwadi Dantlawas (RMD)",
                    captain: "Ram Patel",
                    players: [
                        "Ram Patel (C)",
                        "Krishna (VC)",
                        "Manoj",
                        "Ramesh 45",
                        "Ramesh",
                        "Mafaram",
                        "Suresh",
                        "Maknaram",
                        "Harchand",
                        "Tejendra",
                        "Arvind",
                        "Ranaram",
                        "Bharat",
                        "Dinesh J",
                        "Dinesh A"
                    ]
                }
            ]
        },
        {
            id: 9,
            name: "Goluaa",
            icon: "🌟",
            teams: [
                {
                    id: 14,
                    name: "Somnath Royals Goluya (SRG)",
                    captain: "Navaram",
                    players: [
                        "Navaram (C)",
                        "Kevaram (VC)",
                        "Talsa Ram",
                        "Jabra Ram",
                        "Thakriram",
                        "Naresh",
                        "Arjun",
                        "Dungra Ram",
                        "Rama Ram",
                        "Suresh",
                        "Bhagraj",
                        "Praveen",
                        "Krishna",
                        "Himaram",
                        "Pratap"
                    ]
                }
            ]
        },
        {
            id: 10,
            name: "Rajikavash",
            icon: "🔥",
            teams: [
                {
                    id: 15,
                    name: "Royal Rangers",
                    captain: "Ramesh",
                    players: [
                        "Ramesh (C)",
                        "Jonaram (VC)",
                        "Dr Laxman",
                        "Champalal",
                        "Karnaram",
                        "Sharwan",
                        "Harka Ram",
                        "Masraram",
                        "Bhupsa",
                        "Karmi Ram",
                        "Kailash",
                        "Mukesh",
                        "Vijay",
                        "Dinesh",
                        "Bharat"
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Chitrodi",
            icon: "💎",
            teams: [
                {
                    id: 16,
                    name: "Chamunda Champions (CM)",
                    captain: "Sunil Kukal",
                    players: [
                        "Sunil Kukal (C)",
                        "Uday (VC)",
                        "Paras",
                        "Suresh",
                        "TR Kukal",
                        "Tejpal",
                        "BR Kukal",
                        "Kiran",
                        "Ashok",
                        "Ashok Kag",
                        "Mahendra",
                        "Sonu Kukal",
                        "Madharam",
                        "Paras Kag",
                        "Naresh"
                    ]
                }
            ]
        }
    ]
};

// Helper function to get all teams (for future use if needed)
function getAllTeams() {
    let allTeams = [];
    aplData.villages.forEach(village => {
        village.teams.forEach(team => {
            allTeams.push({
                ...team,
                villageName: village.name,
                villageId: village.id
            });
        });
    });
    return allTeams;
}

// Helper function to get team by ID
function getTeamById(teamId) {
    for (let village of aplData.villages) {
        for (let team of village.teams) {
            if (team.id === teamId) {
                return {
                    ...team,
                    villageName: village.name,
                    villageId: village.id
                };
            }
        }
    }
    return null;
}

// Helper function to get village by ID
function getVillageById(villageId) {
    return aplData.villages.find(v => v.id === villageId);
                      }
                  
