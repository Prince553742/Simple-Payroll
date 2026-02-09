function generatePayroll() {
    const name = document.getElementById("emploname").value;
    const rate = parseFloat(document.getElementById("hourrate").value);
    const work = parseFloat(document.getElementById("hourwork").value);

    if (name == "" || isNaN(rate) || isNaN(work)) {
        alert("Please enter valid details!");
        return;
    }

    const gross = rate * work;
    const tax = gross * 0.20;
    const sss = 750;
    const phil = 500;
    const pagibig = 800;
    const net = gross - tax - sss - phil - pagibig;

    document.getElementById("resName").innerText = name;
    document.getElementById("resGross").innerText = "₱ " + gross.toFixed(2);
    document.getElementById("resTax").innerText = "₱ " + tax.toFixed(2); 
    document.getElementById("resNet").innerText = "₱ " + net.toFixed(2);

    document.getElementById("payslipbox").style.display = "flex";
}
