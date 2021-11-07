function NBA() {
    var NBA_team;
    var team = document.getElementById("team_input").value;
    switch (team) {
        case "Atlanta Hawks":
            NBA_team="Atlanta Hawks";
        break;
        case "Brooklyn Nets":
            NBA_team="Brooklyn Nets";
        break;
        case "Boston Celtics":
            NBA_team="Boston Celtics";
        break;
        case "Charlotte Hornets":
            NBA_team="Charlotte Hornets";
        break;
        case "Chicago Bulls":
            NBA_team="Chicago Bulls";
        break;
        case "Clevland Cavaliers":
            NBA_team="Clevland Cavaliers";
        break;
        case "Dallas Mavericks":
            NBA_team="Dallas Mavericks";
        break;
        case "Denver Nuggets":
            NBA_team="Denver Nuggets";
        break;
        case "Detroit Pistons":
            NBA_team="Detroit Pistons";
        break;
        case "Golden State Warriors":
            NBA_team="Golden State Warriors";
        break;
        case "Houston Rockets":
            NBA_team="Houston Rockets";
        break;
        case "Indiana Pacers":
            NBA_team="Indiana Pacers";
        break;
        case "Los Angeles Clippers":
            NBA_team="Los Angeles Clippers";
        break;
        case "Los Angeles Lakers":
            NBA_team="Los Angeles  Lakers";
        break;
        case "Memphis Grizzlies":
            NBA_team="Memphis Grizzlies";
        break;
        case "Miami Heat":
            NBA_team="Miami Heat";
        break;
        case "Milwaukee Bucks":
            NBA_team="Milwaukee Bucks";
        break;
        case "Minnesota Timberwolves":
            NBA_team="Minnesota Timberwolves";
        break;
        case "New Orleans Pelicans":
            NBA_team="New Orleans Pelicans";
        break;
        case "New York Knicks":
            NBA_team="New York Knicks";
        break;
        case "Oklahoma City Thunder":
            NBA_team="Oklahoma City Thunder";        
        case "Orlando Magic":
            NBA_team="Orlando Magic";
        break;
        case "Philadelphia 76ers":
            NBA_team="Philadelphia 76ers";
        break;
        case "Pheonix Suns":
            NBA_team="Pheonix Suns";
        break;
        case "Portland Trailblazers":
            NBA_team="Portland Trailblazers";
        break;
        case "Sacramento Kings":
            NBA_team="Sacramento Kings";
        break;
        case "San Antonio Spurs":
            NBA_team="San Antonio Spurs";
        break;
        case "Toronto Raptors":
            NBA_team="Toronto Raptors";
        break;
        case "Utah Jazz":
            NBA_team="Utah Jazz";
        break;
        case "Washington Wizards":
            NBA_team="Washinton Wizards";
        break;    
    }
    document.getElementById("Output").innerHTML=NBA_team+" are #1";
}