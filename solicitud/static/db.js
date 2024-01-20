function db() {
    //setTimeout(() => {
        var folio = document.getElementById("folio").innerText;
        var client = document.getElementById("client").value;
        var d = document.getElementById("date").value;
        var iva = document.getElementById("iva").checked;
        var flet = document.getElementById("flete").checked;
        var fshell = document.getElementById("f").value;
        var isr = document.getElementById("isr").checked;
        var p1prod = document.getElementById("p1shell").value;
        var p1mad = document.getElementById("w1shell").value;
        var p1med = document.getElementById("d1shell").value;
        var p1u = document.getElementById("u1shell").value;
        var p1c = document.getElementById("q1shell").value;
        var p1t = document.getElementById("t1shell").value;
        var p2prod = document.getElementById("p2shell").value;
        var p2mad = document.getElementById("w2shell").value;
        var p2med = document.getElementById("d2shell").value;
        var p2u = document.getElementById("u2shell").value;
        var p2c = document.getElementById("q2shell").value;
        var p2t = document.getElementById("t2shell").value;
        var p3prod = document.getElementById("p3shell").value;
        var p3mad = document.getElementById("w3shell").value;
        var p3med = document.getElementById("d3shell").value;
        var p3u = document.getElementById("u3shell").value;
        var p3c = document.getElementById("q3shell").value;
        var p3t = document.getElementById("t3shell").value;
        var p4prod = document.getElementById("p4shell").value;
        var p4mad = document.getElementById("w4shell").value;
        var p4med = document.getElementById("d4shell").value;
        var p4u = document.getElementById("u4shell").value;
        var p4c = document.getElementById("q4shell").value;
        var p4t = document.getElementById("t4shell").value;
        var p5prod = document.getElementById("p5shell").value;
        var p5mad = document.getElementById("w5shell").value;
        var p5med = document.getElementById("d5shell").value;
        var p5u = document.getElementById("u5shell").value;
        var p5c = document.getElementById("q5shell").value;
        var p5t = document.getElementById("t5shell").value;
        var p6prod = document.getElementById("p6shell").value;
        var p6mad = document.getElementById("w6shell").value;
        var p6med = document.getElementById("d6shell").value;
        var p6u = document.getElementById("u6shell").value;
        var p6c = document.getElementById("q6shell").value;
        var p6t = document.getElementById("t6shell").value;
        var unotas = document.getElementById("unotas").value;
    
        $.ajax({
            type: "POST",
            url: "/db",
            data: {
                folio: folio,
                client: client,
                d: d,
                iva: iva,
                flet: flet,
                fshell: fshell,
                isr: isr,
                p1prod: p1prod,
                p1mad: p1mad,
                p1med: p1med,
                p1u: p1u,
                p1c: p1c,
                p1t: p1t,
                p2prod: p2prod,
                p2mad: p2mad,
                p2med: p2med,
                p2u: p2u,
                p2c: p2c,
                p2t: p2t,
                p3prod: p3prod,
                p3mad: p3mad,
                p3med: p3med,
                p3u: p3u,
                p3c: p3c,
                p3t: p3t,
                p4prod: p4prod,
                p4mad: p4mad,
                p4med: p4med,
                p4u: p4u,
                p4c: p4c,
                p4t: p4t,
                p5prod: p5prod,
                p5mad: p5mad,
                p5med: p5med,
                p5u: p5u,
                p5c: p5c,
                p5t: p5t,
                p6prod: p6prod,
                p6mad: p6mad,
                p6med: p6med,
                p6u: p6u,
                p6c: p6c,
                p6t: p6t,
                unotas: unotas
            },
            success: function(data) {
                // Check the operation that occurred
                if (data.operation === 'update') {
                // If an update occurred, keep the same folio number
                    document.querySelector('.instancenum').textContent = folio;
                    console.log('Folio remains the same' + folio);
                } else if (data.operation === 'insert') {
                // If an insertion occurred, increment the folio number
                    folio = parseInt(folio) + 1;
                    fetch('/update', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ folio: folio }),
                    });
                    console.log('Folio updated' + folio);
                }
                console.log(data.results);
                console.log('FLETE? : ' + data.flet);
            }
        });
};

function dbgd() {   
    $.ajax({
        type: "GET",
        url: "/getdata",
        success: function(data) {
            console.log(data);
        }
    });    
};