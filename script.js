// ===================================
// APL WEBSITE - MAIN JAVASCRIPT
// ===================================

// Global state
let currentState = {
    currentSection: 'home',
    selectedVillage: null,
    selectedTeam: null
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('APL Website Loaded!');
    initializeNavigation();
    initializeMobileMenu();
    initializeHomeButtons();
    loadVillages();
    setupBackButtons();
});

// ===================================
// NAVIGATION SYSTEM
// ===================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            showSection(sectionName);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentState.currentSection = sectionName;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===================================
// MOBILE MENU
// ===================================
function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// ===================================
// HOME PAGE BUTTONS
// ===================================
function initializeHomeButtons() {
    // Watch Live Button
    const watchLiveBtn = document.getElementById('watchLiveBtn');
    if (watchLiveBtn) {
        watchLiveBtn.addEventListener('click', function() {
            alert('Live streaming will be available during match days!');
        });
    }
    
    // View Teams Button
    const viewTeamsBtn = document.getElementById('viewTeamsBtn');
    if (viewTeamsBtn) {
        viewTeamsBtn.addEventListener('click', function() {
            showSection('teams');
            updateNavActive('teams');
        });
    }
    
    // Chat Button
    const chatBtn = document.getElementById('chatBtn');
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            alert('Chat feature coming soon!\nFor now, please contact us on Facebook or Instagram.');
        });
    }
}

function updateNavActive(sectionName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-section') === sectionName) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// ===================================
// VILLAGES - LOAD AND DISPLAY
// ===================================
function loadVillages() {
    const villageGrid = document.getElementById('villageGrid');
    if (!villageGrid) return;
    
    villageGrid.innerHTML = '';
    
    aplData.villages.forEach(village => {
        const card = createVillageCard(village);
        villageGrid.appendChild(card);
    });
}

function createVillageCard(village) {
    const card = document.createElement('div');
    card.className = 'village-card';
    
    const teamsCount = village.teams.length;
    const teamText = teamsCount === 1 ? 'Team' : 'Teams';
    
    card.innerHTML = `
        <div class="village-icon">${village.icon}</div>
        <div class="village-name">${village.name}</div>
        <div class="village-teams-count">${teamsCount} ${teamText}</div>
    `;
    
    card.addEventListener('click', function() {
        showVillageTeams(village);
    });
    
    return card;
}

// ===================================
// TEAMS - SHOW VILLAGE TEAMS
// ===================================
function showVillageTeams(village) {
    currentState.selectedVillage = village;
    
    // Update title
    const teamsTitle = document.getElementById('villageTeamsTitle');
    if (teamsTitle) {
        teamsTitle.textContent = `${village.name} Teams`;
    }
    
    // Load teams
    const teamsGrid = document.getElementById('teamsGrid');
    if (!teamsGrid) return;
    
    teamsGrid.innerHTML = '';
    
    village.teams.forEach(team => {
        const card = createTeamCard(team, village.name);
        teamsGrid.appendChild(card);
    });
    
    showSection('villageTeams');
}

function createTeamCard(team, villageName) {
    const card = document.createElement('div');
    card.className = 'team-card';
    
    // Get first letter for logo
    const firstLetter = team.name.charAt(0);
    
    card.innerHTML = `
        <div class="team-card-header">
            <div class="team-card-logo">
                <img src="https://via.placeholder.com/90/FFFFFF/004E89?text=${firstLetter}" alt="${team.name}">
            </div>
            <div class="team-card-name">${team.name}</div>
            <div class="team-card-village">${villageName}</div>
        </div>
        <div class="team-card-body">
            <div class="team-card-captain">Captain</div>
            <div class="team-card-captain-name">${team.captain}</div>
        </div>
    `;
    
    card.addEventListener('click', function() {
        showTeamDetail(team, villageName);
    });
    
    return card;
}

// ===================================
// TEAM DETAIL
// ===================================
function showTeamDetail(team, villageName) {
    currentState.selectedTeam = team;
    
    // Update team info
    const teamName = document.getElementById('teamName');
    const teamVillage = document.getElementById('teamVillage');
    const teamCaptain = document.getElementById('teamCaptain');
    const teamLogo = document.getElementById('teamLogo');
    
    if (teamName) teamName.textContent = team.name;
    if (teamVillage) teamVillage.textContent = villageName;
    if (teamCaptain) teamCaptain.textContent = team.captain;
    
    // Update logo
    if (teamLogo) {
        const firstLetter = team.name.charAt(0);
        teamLogo.src = `https://via.placeholder.com/140/FFFFFF/004E89?text=${firstLetter}`;
    }
    
    // Load players
    loadPlayers(team.players);
    
    showSection('teamDetail');
}

function loadPlayers(players) {
    const playersList = document.getElementById('playersList');
    if (!playersList) return;
    
    playersList.innerHTML = '';
    
    players.forEach((player, index) => {
        const item = createPlayerItem(player, index + 1);
        playersList.appendChild(item);
    });
}

function createPlayerItem(playerName, number) {
    const item = document.createElement('div');
    item.className = 'player-item';
    
    const formattedNumber = number.toString().padStart(2, '0');
    
    item.innerHTML = `
        <div class="player-number">#${formattedNumber}</div>
        <div class="player-name">${playerName}</div>
    `;
    
    return item;
}

// ===================================
// BACK BUTTONS
// ===================================
function setupBackButtons() {
    // Back to villages
    const backToVillages = document.getElementById('backToVillages');
    if (backToVillages) {
        backToVillages.addEventListener('click', function() {
            showSection('teams');
            updateNavActive('teams');
            currentState.selectedVillage = null;
        });
    }
    
    // Back to teams
    const backToTeams = document.getElementById('backToTeams');
    if (backToTeams) {
        backToTeams.addEventListener('click', function() {
            if (currentState.selectedVillage) {
                showVillageTeams(currentState.selectedVillage);
            } else {
                showSection('teams');
                updateNavActive('teams');
            }
        });
    }
}

// ===================================
// FOOTER SOCIAL LINKS
// ===================================
// function setupFooterLinks() {
const facebookLink = document.getElementById('facebookLink');
const instagramLink = document.getElementById('instagramLink');

if (facebookLink) {
    facebookLink.href = "https://www.facebook.com/yourusername";
    facebookLink.target = "_blank";
}

if (instagramLink) {
    instagramLink.href = "https://www.instagram.com/yourusername";
    instagramLink.target = "_blank";
}
// }

// ===================================
// SCORES SECTION (Backend Ready)
// ===================================
const sampleMatchData = {
    live: [],
    upcoming: [],
    recent: []
};

function renderLiveMatches(matches) {
    const container = document.getElementById('liveMatches');
    if (!container) return;
    
    if (!matches || matches.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🏏</div>
                <p>No live matches</p>
                <span>Check back during match days!</span>
            </div>
        `;
        return;
    }
    
    // Render match cards here when data is available
}

function renderUpcomingMatches(matches) {
    const container = document.getElementById('upcomingMatches');
    if (!container) return;
    
    if (!matches || matches.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📅</div>
                <p>Schedule coming soon</p>
            </div>
        `;
        return;
    }
}

function renderRecentMatches(matches) {
    const container = document.getElementById('recentMatches');
    if (!container) return;
    
    if (!matches || matches.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📊</div>
                <p>Tournament starting soon</p>
            </div>
        `;
        return;
    }
}

// Initialize scores
renderLiveMatches(sampleMatchData.live);
renderUpcomingMatches(sampleMatchData.upcoming);
renderRecentMatches(sampleMatchData.recent);

// ===================================
// UTILITY FUNCTIONS
// ===================================
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

// Log info
console.log(`Total Villages: ${aplData.villages.length}`);
console.log(`Total Teams: ${getAllTeams().length};