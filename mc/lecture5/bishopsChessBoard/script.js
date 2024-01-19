(function() {

    let n = 8;
    window.addEventListener("load", function() {
        const table = document.getElementById("table");
        initialiseGrid(table, n);

        table.addEventListener("mouseover", (e) => {
            if (e.target.dataset?.cellnumber) {
                const [row, col] = e.target.dataset.cellnumber.split("-");
                const boxes = document.querySelectorAll(".box");
                
                // removing existed yellow bg...
                for(let i = 0; i < boxes.length; i++) {
                    boxes[i].classList.remove("yellow");
                }


                // first get the diagonal boxes and store 
                const cellIndexMap = {};
                traversTopLeft(row, col, cellIndexMap);
                traversTopRight(row, col, cellIndexMap);
                traversBottomLeft(row, col, cellIndexMap);
                traversBottomRight(row, col, cellIndexMap);

                // change the color of it
                for(let i = 0; i < boxes.length; i++) {
                    let dataIndex = boxes[i].dataset.cellnumber;
                    if (cellIndexMap[dataIndex] === true) { 
                        boxes[i].classList.add("yellow");
                    }
                }
            }
        });
    });

    function traversTopLeft(row, col, storage) {
        while(row >= 0 && col >= 0) {
            let dataIndex = `${row}-${col}`;
            storage[dataIndex] = true;
            
            row--;
            col--;
        }
    }

    function traversTopRight(row, col, storage) {
        while(row >= 0 && col < n){
            let dataIndex = `${row}-${col}`;
            storage[dataIndex] = true;
            
            row--;
            col++;
        }
    }

    function traversBottomLeft(row, col, storage) {
        while(row < n && col >= 0) {
            let dataIndex = `${row}-${col}`;
            storage[dataIndex] = true;

            row++;
            col--;
        }
    }

    function traversBottomRight(row, col, storage) {
        while(row < n && col < n) {
            let dataIndex = `${row}-${col}`;
            storage[dataIndex] = true;
            
            row++;
            col++;
        }
    }

    function initialiseGrid(table, n) {
        for (let row = 0; row < n; row++) {
            let rowDom = document.createElement("tr");
            table.appendChild(rowDom);
            let isEven = isEvenCell(row);
            let column = document.createDocumentFragment();
            for(let col = 0; col < n; col++) {
                let cell = document.createElement("td");
                cell.setAttribute("class", "box");
                cell.setAttribute("data-cellnumber", `${row}-${col}`);
                cell.classList.add(getBgBasedOnIndex(isEven));
                column.appendChild(cell);
                isEven = toggleFlag(isEven);
            }
            rowDom.appendChild(column);
        }
    }

    function toggleFlag(flag){
        return !flag;
    }

    function isEvenCell(index) {
        return index % 2 === 0;
    }

    function getBgBasedOnIndex(isWhite){
        return isWhite ? "white" : "black"; 
    }
})();
