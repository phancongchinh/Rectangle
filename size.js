function calculating(){
    width = prompt("Nhập chiều rộng của hình chữ nhật (đơn vị: mét)!");
    while (isNaN(width)) {
        width = prompt("Định dạng không phù hợp. Nhập lại chiều rộng!");
    }

    height = prompt("Nhập chiều cao của hình chữ nhật  (đơn vị: mét)!");
    while (isNaN(height)) {
        width = prompt("Định dạng không phù hợp. Nhập lại chiều cao!");
    }

    let w = parseFloat(width);
    let h = parseFloat(height);

    let chuvi = (w + h) * 2;
    let dientich = w * h;
    document.write("Chu vi của hình chữ nhật là: " + chuvi + " mét.");
    document.write("<br/>");
    document.write("Diện tích của hình chữ nhật là: " + dientich + " mét vuông.");
}