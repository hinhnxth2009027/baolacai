var txt_title = document.getElementById('title');
var txt_content = document.getElementById('content');
var img_thumbnail = document.getElementById('thumbnail');
var txt_category = document.getElementById('category');
var btnSave = document.getElementById('save');
var btnDisplay = document.getElementById('display');
var btnreset = document.getElementById('reset');

var a = [];

btnSave.onclick = function () {
    if (txt_title.value.length == 0 || img_thumbnail.value.length == 0 || txt_content.value.length == 0 || txt_category.value.length == 0) {
        document.getElementById('msgerror').className = 'error'
        document.getElementById('msgerror').innerText = 'bạn không thể bỏ trống bất kì trường nào trước khi hiển thị !!!';
        return;
    } else {
        document.getElementById('msgerror').className = 'sucset'
        document.getElementById('msgerror').innerText = 'lưu thành công';
        var contentAll = {
            title: `${txt_title.value}`,
            img: `${img_thumbnail.value}`,
            content: `${txt_content.value}`,
            category: `${txt_category.value}`
        }
        a.push(contentAll);
        console.log(a);

        txt_title.value = '';
        txt_content.value = '';
        img_thumbnail.value = '';
        txt_category.value = '';
    }
}


btnreset.onclick = function () {
    txt_title.value = '';
    txt_content.value = '';
    img_thumbnail.value = '';
    txt_category.value = '';
}


btnDisplay.onclick = function () {
    document.getElementById('show_conten_all').innerHTML = ''
    for (var i = 0; i < a.length; i++) {
        var ab = a[i];
        document.getElementById('show_conten_all').innerHTML += `<div class="new_content">
<h1 class="title_show">${ab.title}</h1><img src="${ab.img}"><div>${ab.content}</div><h3>danh mục :<span class="mau_xanh">${ab.category}</span></h3>
</div>`
    }
}