const table = document.getElementsByTagName('table')[0];
table.rows[0].style.backgroundColor = "aquamarine";
table.rows[1].style.backgroundColor = "cyan";
table.rows[2].style.backgroundColor = "magenta";
table.rows[3].style.backgroundColor = "lime";
table.rows[4].style.backgroundColor = "silver";

document.write('Even cells consists of:<br>');


for(let i=0;i<table.rows.length;i++)
{
    for(let j=0;j<table.rows[0].cells.length;j++)
    {
        if(i%2 == 0 && j%2 == 0)
        {
            document.write(`Cell(${i},${j}) - ${table.rows[i].cells[j].innerText}<br>`);
        }
            
    }
}