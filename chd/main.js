function tregoJeFormen(lloji) {
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none"
    document.getElementById("drejtkendesh").style.display = "none"





    if (lloji = 'circle') {
        document.getElementById("rreth").style.display = ""
    } else if (lloji = 'triangle') {
        document.getElementById("katror").style.display = ""
    } else if (lloji = 'drejtkendesh') {
        document.getElementById("drejtkendesh").style.display = ""
    }
}
