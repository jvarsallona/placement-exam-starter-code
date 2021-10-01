let cookies = document.querySelectorAll(".menu")
let totalCell = document.querySelector(".summary").querySelectorAll("th")[3]
let table_i = 1

function updateTotal() {
    totalCell.textContent = parseInt(document.querySelector(".summary").querySelectorAll("td")[1].textContent) + parseInt(document.querySelector(".summary").querySelectorAll("td")[3].textContent) + parseInt(document.querySelector(".summary").querySelectorAll("td")[5].textContent)
}

for (let menu_i = 0; menu_i < 3; menu_i++) {
    {
        let gingerbreadVotesCell = document.querySelector(".summary").querySelectorAll("td")[table_i]
        gingerbreadVotesBtn = document.createElement("button")
        gingerbreadVotesBtn.textContent = "+"
        gingerbreadVotesBtn.addEventListener('click', function(e) {
            let gingerbreadVotesCount = parseInt(gingerbreadVotesCell.textContent);
            gingerbreadVotesCount = gingerbreadVotesCount + 1;
            gingerbreadVotesCell.textContent = (gingerbreadVotesCount);
            updateTotal()
        }); 
        cookies[menu_i].querySelector(".button-container").querySelectorAll("button")[1].replaceWith(gingerbreadVotesBtn)
    }
    {
        let gingerbreadVotesCell = document.querySelector(".summary").querySelectorAll("td")[table_i]
        gingerbreadVotesBtn = document.createElement("button")
        gingerbreadVotesBtn.textContent = "-"
        gingerbreadVotesBtn.addEventListener('click', function(e) {
            let gingerbreadVotesCount = parseInt(gingerbreadVotesCell.textContent);
            gingerbreadVotesCount = gingerbreadVotesCount - 1;
            if (gingerbreadVotesCount < 0) return;
            gingerbreadVotesCell.textContent = (gingerbreadVotesCount);
            updateTotal()
        }); 
        cookies[menu_i].querySelector(".button-container").querySelectorAll("button")[0].replaceWith(gingerbreadVotesBtn)
    }
    table_i += 2
}

document.querySelectorAll("h2")[2].textContent = "Created By: Jessica Varsallona"