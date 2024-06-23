$('.tahun').append(new Date().getFullYear());

/* Tombol kembali */

$('.home').click(function() {
	halaman('home');
});

$('.btn-back').click(function() {
	halaman('home');
});

function waktu() {
	var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

	var hariIni = new Date();

	$('.hari-tanggal').text(namaHari[hariIni.getDay()] + ' ' + hariIni.getDate() + ' ' + namaBulan[hariIni.getMonth()] + ' ' + hariIni.getFullYear() + ', ');

	var h = hariIni.getHours(),
	    m = hariIni.getMinutes(),
	    s = hariIni.getSeconds();

	h = h<10 ? '0'+h : h;
	m = m<10 ? '0'+m : m;
	s = s<10 ? '0'+s : s;
	$('.jam').text(h + ' : ' + m + ' : ' + s);
}

var inter = setInterval(waktu, 1000);

$('li').on('click', function() {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});
