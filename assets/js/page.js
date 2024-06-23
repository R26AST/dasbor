$('.tahun').append(new Date().getFullYear());
//document.querySelector('.tahun').innerHTML = new Date().getFullYear();

/* Tombol kembali */

$('.home').click(function() {
	halaman('home');
});

$('.btn-back').click(function() {
	halaman('home');
});
